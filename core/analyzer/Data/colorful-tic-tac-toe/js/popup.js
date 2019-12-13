//jQuery(document).ready(function($) {
//});

//function Scrolldown() { 
//	window.location = '#gameColumnWidth';
//}

//window.onload = Scrolldown;
(function($) {

    var userIsReading = false;
    var waitForFinalEvent = (function() {
        var timers = {};
        return function(callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Don't call this twice without a uniqueId";
            }
            if (timers[uniqueId]) {
                clearTimeout(timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();

    //$(window).on('scroll', function() {
    //	//stop repositioning screen if user is reading about ttt
    //	if(!userIsReading && $(this).scrollTop() >= ($(".scores").offset().top + 100)){
    //		userIsReading = true;
    //	}
    //});

    $(window).resize(function() {

        waitForFinalEvent(function() {
            //		var wh = window.innerHeight;
            //		var cw = $('.game-column-width').width();

            //		var s = wh*0.7;
            //		var h = wh;
            //		if(cw/0.7 <= wh){

            //			h = cw/0.7;
            //			s = cw;
            //		}
            //		s = s < cw ? s : cw;
            //		$('.game-container').css('height',h);
            //		$('.game-container').css('width',s);
            //		$('.game').css('height', s);

            //SVGs are huge upon first loading when using percents. So, set initial values then remove
            $(".scores svg").removeAttr("style");
            //		if(!userIsReading){
            //			Scrolldown();
            //		}
        }, 500, "ID1");
    });

})(jQuery);

(function() {
    var oColor = 'white-shape';
    var xColor = 'white-shape';
    var oBgColor = 'pink';
    var xBgColor = 'orange';

    var ui = {
            board: document.querySelector('.board'),
            squares: document.querySelectorAll('.square'),
            restart: document.querySelector('.restart'),
            mute: document.querySelector('.mute'),
            scores: {
                scores: document.querySelector('.scores'),
                swap: document.querySelector('.swap'),
                player1: document.querySelector('.player1 .score'),
                player2: document.querySelector('.player2 .score'),
                ties: document.querySelector('.ties .score'),
                turn1: document.querySelector('.player1'),
                turn2: document.querySelector('.player2'),
                turnTies: document.querySelector('.ties')
            }
        },
        computerScores = {
            player1: 0,
            player2: 0,
            ties: 0
        },
        twoPlayerScores = {
            player1: 0,
            player2: 0,
            ties: 0
        },
        player1 = 'x',
        player2 = 'o',
        audio = {},
        context, totalSquares = 9,
        hasLocalStorage, muted, playing, turn = true,
        firstTurn = true,
        twoPlayer = false,
        delay = 300,
        playerChance = 1.0,
        board, win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

    function loadAudio(name) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/assets/audio/' + name + '.wav', true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function() {
            context.decodeAudioData(xhr.response, function(buffer) {
                audio[name] = buffer;
            }, function() {});
        };
        xhr.send();
    }

    function playAudio(name) {
        if (muted || !audio[name]) {
            return;
        }
        if (context && context.resume) {
            context.resume();
        }
        var source = context.createBufferSource();
        source.buffer = audio[name];
        source.connect(context.destination);
        if (source.start) {
            source.start(0);
        } else {
            source.noteOn(0);
        }
    }

    function updateMuteIcon() {
        var muteSoundWaves = ui.mute.querySelectorAll('path');
        for (var i = muteSoundWaves.length; i--;) {
            muteSoundWaves[i].style.display = muted ? 'none' : '';
        }
    }

    function toggleMute() {
        muted = !muted;
        if (hasLocalStorage) {
            try {
                localStorage.setItem('muted', muted.toString());
            } catch (e) {}
        }
        updateMuteIcon();
    }

    function toggleTwoPlayer() {

        //Move from two player to 1P easy, 1P med, 1P hard, 2P
        var t = ui.scores.scores.classList;
        if (twoPlayer) {
            //Easy CPU player
            twoPlayer = false;
            playerChance = 1.0;
            console.log("was TwoPlayer...is 1P...chance = 1.0");
            t.remove('p2');
            t.add('p1');
            firstTurn = false;
        } else {
            if (playerChance == 1.0) {
                //Med CPU player
                playerChance = 0.75;
                console.log("was 1Player...is 1P...chance = .75");
                t.remove('p1');
                t.add('p1m');
                firstTurn = false;
            } else if (playerChance == 0.75) {
                //Impossible CPU player
                playerChance = 0.25;
                console.log("was 1Player...is 1P...chance = .25");
                t.remove('p1m');
                t.add('p1h');
                firstTurn = false;
            } else {
                //Two players
                twoPlayer = true;
                console.log("was 1Player...is 2P");
                t.remove('p1h');
                t.add('p2');
                firstTurn = true;
            }
        }

        ui.scores.player1.innerHTML = (twoPlayer ? twoPlayerScores.player1 : computerScores.player1);
        ui.scores.player2.innerHTML = (twoPlayer ? twoPlayerScores.player2 : computerScores.player2);
        ui.scores.ties.innerHTML = (twoPlayer ? twoPlayerScores.ties : computerScores.ties);
        playing = false;
        start();
    }

    function updateBoard(player, index) {
        ui.squares[index].querySelector('div').classList.add(player);
        ui.squares[index].querySelector('div').classList.add(player == 'o' ? oColor : xColor);
        ui.squares[index].classList.add(player == 'o' ? oBgColor : xBgColor);
    }

    function updateTurn() {
        var t1 = ui.scores.turn1.classList,
            t2 = ui.scores.turn2.classList,
            ties = ui.scores.turnTies.classList;
        if (twoPlayer && ui.restart.style.display === 'none') {
            if (turn) {
                t2.remove('turn');
                t1.add('turn');
            } else {
                t1.remove('turn');
                t2.add('turn');
            }
            ties.add('turn');
        } else {
            t1.remove('turn');
            t2.remove('turn');
            ties.remove('turn');
        }
    }

    function selectSquare(index) {
        if (board[index] !== 0 || isGameOver() || (!twoPlayer && turn)) {
            return;
        }
        if (twoPlayer) {
            turn = !turn;
            board[index] = turn ? -1 : 1;
            updateBoard(turn ? player1 : player2, index);
            playAudio('jump'); //'note-' + (turn ? 'low' : 'high')
            isGameOver();
        } else {
            board[index] = -1;
            updateBoard(player1, index);
            turn = true;
            playAudio('jump'); //'note-low'
            setTimeout(computerPlay, delay);
        }
        updateTurn();
    }

    function initSquare(index) {
        ui.squares[index].ontouchstart = ui.squares[index].onmousedown = function(event) {
            event.preventDefault();
            selectSquare(index);
        };
    }

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    function start() {

        if (playing) {
            return;
        }
        playing = true;

        var colors = ['orange', 'pink', 'blue'];
        colors = shuffle(colors);

        var bd = Math.floor(Math.random() * 4);
        switch (bd) {
            case 1:
                oColor = colors[0] + '-shape';
                xColor = colors[1] + '-shape';
                oBgColor = 'white';
                xBgColor = 'white';
                break;
            case 2:
                if (Math.floor(Math.random() * 2)) {
                    oColor = 'white-shape';
                    xColor = colors[0] + '-shape';

                    oBgColor = colors[0];
                    xBgColor = 'white';
                } else {
                    xColor = 'white-shape';
                    oColor = colors[0] + '-shape';

                    xBgColor = colors[0];
                    oBgColor = 'white';
                }
                break;
            default:
                oColor = 'white-shape';
                xColor = 'white-shape';
                oBgColor = colors[0];
                xBgColor = colors[1];
        }

        ui.restart.style.display = 'none';
        board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (var i = totalSquares; i--;) {
            ui.squares[i].querySelector('div').className = '';
            ui.squares[i].classList.remove('pink');
            ui.squares[i].classList.remove('blue');
            ui.squares[i].classList.remove('orange');
        }
        ui.scores.ties.classList.remove('appear');
        ui.scores.player1.classList.remove('appear');
        ui.scores.player2.classList.remove('appear');
        ui.board.classList.remove('blink');
        turn = firstTurn = !firstTurn;
        updateTurn();
        if (firstTurn && !twoPlayer) {
            setTimeout(computerPlay, delay);
        }
    }

    function init() {

        try {
            hasLocalStorage = 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            hasLocalStorage = false;
        }
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        if (window.AudioContext) {
            context = new AudioContext();
            loadAudio('jump');
            loadAudio('powerup'); //note-low
            //loadAudio('game-over');
            //loadAudio('game-over-tie');
            if (hasLocalStorage) {
                try {
                    muted = localStorage.getItem('muted') === 'true';
                } catch (e) {
                    muted = false;
                }
            }
            updateMuteIcon();
            ui.mute.ontouchstart = ui.mute.onclick = function(event) {
                event.preventDefault();
                event.stopPropagation(); //avoid triggering tap on scores so that 1Player/2Player mode isn't altered				
                toggleMute();
            };
        } else {
            ui.mute.style.display = 'none';
        }
        for (var i = totalSquares; i--;) {
            initSquare(i);
        }
        ui.restart.ontouchstart = ui.scores.scores.ontouchstart = function(event) {
            event.preventDefault();
        };
        ui.scores.scores.ontouchend = ui.scores.scores.onclick = function(event) {
            event.preventDefault();
            toggleTwoPlayer();
        };
        ui.restart.ontouchend = ui.restart.onclick = function(event) {
            event.preventDefault();
            start();
        };
    }

    function endGame(winner, sq) {
        ui.restart.style.display = 'block';
        setTimeout(function() {
            var action = 'Game',
                label = (twoPlayer ? 'players ' : 'computer ');
            setTimeout(function() {
                playing = false;
            }, delay);
            if (sq) {
                for (var i = 3; i--;) {
                    ui.squares[sq[i]].querySelector('div').classList.add('blink');
                }
            }
            switch (winner) {
                case player1:
                    ui.scores.player1.innerHTML = (twoPlayer ? ++twoPlayerScores.player1 : ++computerScores.player1);
                    ui.scores.player1.classList.add('appear');
                    playAudio('powerup'); //game-over

                    break;
                case player2:
                    ui.scores.player2.innerHTML = (twoPlayer ? ++twoPlayerScores.player2 : ++computerScores.player2);
                    ui.scores.player2.classList.add('appear');
                    playAudio('powerup'); //game-over
                    break;
                default:
                    ui.scores.ties.innerHTML = (twoPlayer ? ++twoPlayerScores.ties : ++computerScores.ties);
                    ui.scores.ties.classList.add('appear');
                    ui.board.classList.add('blink');
                    playAudio('powerup'); //game-over-tie
                    break;
            }
        }, (turn && !twoPlayer) ? 100 : delay + 100);
    }

    function isGameOver() {
        for (var i = win.length; i--;) {
            var sq = win[i],
                line = board[sq[0]] + board[sq[1]] + board[sq[2]];
            if (line === 3 || line === -3) {
                endGame(line === 3 ? player2 : player1, sq);
                return true;
            }
        }
        var count = 0;
        for (i = totalSquares; i--;) {
            if (board[i] !== 0) {
                count++;
            }
        }
        if (count === 9) {
            endGame();
            return true;
        }
        return false;
    }

    function computerPlay() {
        if (isGameOver()) {
            return;
        }
        var i, j, k, max, chosen, firstSquare, count = 0;
        turn = false;
        updateTurn();
        playAudio('jump'); //note-high
        for (i = totalSquares; i--;) {
            if (board[i] !== 0) {
                count++;
                if (count === 1) {
                    firstSquare = i;
                }
            }
        }
        if (count < 2 && Math.random() > 0.2) {
            do {
                chosen = Math.floor(Math.random() * totalSquares);
            } while (chosen === firstSquare);
        } else {
            for (i = totalSquares; i--;) {
                for (j = totalSquares; j--;) {
                    if (board[j] !== 0) {
                        continue;
                    }
                    board[j] = 1;
                    if (isGameOver()) {
                        updateBoard(player2, j);
                        return;
                    }
                    board[j] = 0;
                }
                if (board[i] !== 0) {
                    continue;
                }
                board[i] = 1;
                var min = null,
                    temp = board.concat();
                for (j = totalSquares; j--;) {
                    if (temp[j] !== 0) {
                        continue;
                    }
                    temp[j] = -1;
                    for (k = win.length; k--;) {
                        if (temp[win[k][0]] + temp[win[k][1]] + temp[win[k][2]] === -3 && Math.random() > playerChance) {
                            board[i] = 0;
                            board[j] = 1;
                            updateBoard(player2, j);
                            isGameOver();
                            return;
                        }
                    }
                    var max2 = 0,
                        min2 = 0,
                        tempMax = temp.concat(),
                        tempMin = temp.concat();
                    for (k = totalSquares; k--;) {
                        if (tempMax[k] === 0) {
                            tempMax[k] = 1;
                        }
                        if (tempMin[k] === 0) {
                            tempMin[k] = -1;
                        }
                    }
                    for (k = win.length; k--;) {
                        if (tempMax[win[k][0]] + tempMax[win[k][1]] + tempMax[win[k][2]] === 3) {
                            max2++;
                        }
                        if (tempMin[win[k][0]] + tempMin[win[k][1]] + tempMin[win[k][2]] === -3) {
                            min2++;
                        }
                    }
                    var d = max2 - min2;
                    min = min == null ? d : (min > d ? d : min);
                    temp[j] = 0;
                }
                if (max == null || max < min) {
                    max = min;
                    chosen = i;
                }
                board[i] = 0;
            }
        }
        board[chosen] = 1;
        updateBoard(player2, chosen);
        isGameOver();
    }
    init();
    start();
}());