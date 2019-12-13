var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-68334407-3']);
_gaq.push(['_trackPageview']);


(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();


function loadSettings() {
    var pet = localStorage.getItem('pets');
    var ownerName = localStorage.getItem('ownerName');
    var chromePopupReminders = localStorage.getItem('chromePopupReminders');
    if (chromePopupReminders && chromePopupReminders == "true") {
        document.getElementById("chrome-notify").checked = true;
    } else {
        document.getElementById("chrome-notify").checked = false;
    }

    if (ownerName) {
        document.getElementById("owner-name").value = ownerName;
    } else {
        document.getElementById("owner-name").value = "Human";
    }

    if (pet) {
        pet = JSON.parse(pet);
        pet = pet["cat1"];
        //if(pet.walk){
        //    document.getElementById("walk-pet-switch").checked = true;
        //} else
        //    document.getElementById("walk-pet-switch").checked = false;
        if (pet.name) {
            document.getElementById("pet-name").value = pet.name;
        } else {
            document.getElementById("pet-name").value = "Meow";
        }


        if (pet.show) {
            document.getElementById("show-pet-switch").checked = true;
        } else
            document.getElementById("show-pet-switch").checked = false;
        if (pet.talk) {
            document.getElementById("talk-pet-switch").checked = true;
        } else
            document.getElementById("talk-pet-switch").checked = false;

        if ((typeof pet.walkType == "undefined" && typeof pet.walk != "undefined" && pet.walk) || pet.walkType == "WALK") {
            document.getElementById("walk-type-switch").value = ("WALK");
        } else if (typeof pet.walkType !== "undefined" && pet.walkType == "EDGES") {
            document.getElementById("walk-type-switch").value = ("EDGES");
        } else if (typeof pet.walkType !== "undefined" && pet.walkType == "BOTTOM") {
            document.getElementById("walk-type-switch").value = ("BOTTOM");
        } else
            document.getElementById("walk-type-switch").value = ("FALSE");


    }


    var reminders = localStorage.getItem('reminders');
    if (reminders) {
        reminders = JSON.parse(reminders);
    }


    for (var x in (reminders)) {
        appendReminder(x, reminders[x]);
    }

}

function loadBars() {
    var pet = localStorage.getItem('pets');
    if (pet) {
        pet = JSON.parse(pet);
        pet = pet["cat1"];

        if (pet.sleep < 20) {
            document.getElementById("sleep-meter-holder").className = "meter red";
        } else if (pet.sleep < 70) {
            document.getElementById("sleep-meter-holder").className = "meter orange";
        } else
            document.getElementById("sleep-meter-holder").className = "meter green";

        if (pet.happiness < 20) {
            document.getElementById("happy-meter-holder").className = "meter red";
        } else if (pet.happiness < 70) {
            document.getElementById("happy-meter-holder").className = "meter orange";
        } else
            document.getElementById("happy-meter-holder").className = "meter green";

        if (pet.hunger < 20) {
            document.getElementById("hunger-meter-holder").className = "meter red";
        } else if (pet.hunger < 70) {
            document.getElementById("hunger-meter-holder").className = "meter orange";
        } else
            document.getElementById("hunger-meter-holder").className = "meter green";

        document.getElementById("sleep-meter").style.width = pet.sleep + "%";
        document.getElementById("happy-meter").style.width = pet.happiness + "%";
        document.getElementById("hunger-meter").style.width = pet.hunger + "%";

        if (pet.hideUntil > new Date().getTime()) {
            document.getElementById("hidden-desc").style.display = "block";
        }
    }

}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}


function updateReminder(id) {
    var text = document.getElementById(id).getElementsByClassName("text")[0].value;
    var hours = document.getElementById(id).getElementsByClassName("hours")[0].value;
    var minutes = document.getElementById(id).getElementsByClassName("minutes")[0].value;
    var enabled = document.getElementById(id).getElementsByClassName("enabled")[0].checked;

    chrome.runtime.sendMessage({
        method: "reminder-update",
        data: {
            id: id,
            hours: hours,
            minutes: minutes,
            text: text,
            enabled: enabled
        }
    }, function(response) {

    });
}

function appendReminder(id, data) {
    var html = document.getElementById("reminder-tmpl").innerHTML;
    var node = document.createElement("div");
    node.className = "item clearfix";
    node.innerHTML = html;
    var remindersHolder = document.getElementById("reminder-items");

    node.id = id;


    remindersHolder.appendChild(node);
    if (typeof data.text != "undefined")
        document.getElementById(id).getElementsByClassName("text")[0].value = data.text;
    if (typeof data.hours != "undefined")
        document.getElementById(id).getElementsByClassName("hours")[0].value = data.hours;
    if (typeof data.minutes != "undefined")
        document.getElementById(id).getElementsByClassName("minutes")[0].value = data.minutes;
    if (typeof data.enabled != "undefined")
        document.getElementById(id).getElementsByClassName("enabled")[0].checked = data.enabled;

    var hoursHolder = document.getElementById(id).getElementsByClassName("hours")[0];
    var minutesHolder = document.getElementById(id).getElementsByClassName("minutes")[0];
    document.getElementById(id).getElementsByClassName("text")[0].addEventListener("change", function() {
        updateReminder(id);
    })
    document.getElementById(id).getElementsByClassName("text")[0].addEventListener("keyup", function() {
        updateReminder(id);
    });
    hoursHolder.addEventListener("change", function() {
        var val = parseInt(hoursHolder.value);
        if (val > 24)
            hoursHolder.value = 24;
        if (val < 0)
            hoursHolder.value = 0;
        updateReminder(id);
    });
    hoursHolder.addEventListener("keyup", function() {
        var val = parseInt(hoursHolder.value);
        if (val > 24)
            hoursHolder.value = 59;
        if (val < 0)
            hoursHolder.value = 0;
        updateReminder(id);
    });
    minutesHolder.addEventListener("change", function() {
        var val = parseInt(minutesHolder.value);
        if (val > 59)
            minutesHolder.value = 59;
        if (val < 0)
            minutesHolder.value = 0;
        updateReminder(id);
    });
    minutesHolder.addEventListener("keyup", function() {
        var val = parseInt(minutesHolder.value);
        if (val > 59)
            minutesHolder.value = 59;
        if (val < 0)
            minutesHolder.value = 0;
        updateReminder(id);
    });
    document.getElementById(id).getElementsByClassName("enabled")[0].addEventListener("change", function(e) {
        if (e.target.checked)
            _gaq.push(['_trackEvent', 'Reminders', 'Change Activation', "true"]);
        else
            _gaq.push(['_trackEvent', 'Reminders', 'Change Activation', "false"]);
        updateReminder(id);
    });
    document.getElementById(id).getElementsByClassName("remove")[0].addEventListener("click", function(e) {
        chrome.runtime.sendMessage({
            method: "reminder-remove",
            data: {
                id: id
            }
        }, function(response) {

        });

        document.getElementById(id).remove();
        var items = remindersHolder.getElementsByClassName("item");
        if (items.length < 5) {
            document.getElementById("add-reminder").style.display = "block";
        }
    });
    document.getElementById(id).getElementsByClassName("hour-plus")[0].addEventListener("click", function(e) {
        var val = parseInt(hoursHolder.value);
        if (val < 24)
            hoursHolder.value = val + 1;
        else
            hoursHolder.value = 24
    });
    document.getElementById(id).getElementsByClassName("hour-minus")[0].addEventListener("click", function(e) {
        var val = parseInt(hoursHolder.value);
        if (val > 0)
            hoursHolder.value = val - 1;
        else
            hoursHolder.value = 0;
    });
    document.getElementById(id).getElementsByClassName("min-plus")[0].addEventListener("click", function(e) {
        var val = parseInt(minutesHolder.value);
        if (val < 59)
            minutesHolder.value = val + 1;
        else
            minutesHolder.value = 59;
    });
    document.getElementById(id).getElementsByClassName("min-minus")[0].addEventListener("click", function(e) {
        var val = parseInt(minutesHolder.value);
        if (val > 0)
            minutesHolder.value = val - 1;
        else
            minutesHolder.value = 0;
    });


    var items = remindersHolder.getElementsByClassName("item");
    if (items.length >= 5) {
        document.getElementById("add-reminder").style.display = "none";
    }
}

function onWindowLoad() {
    tippy.setDefaults({
        arrow: true,
        delay: 40,
        theme: 'my-tippy'
    })

    loadSettings();
    loadBars();
    setInterval(loadBars, 2000);


    document.getElementById("add-reminder").addEventListener("click", function(e) {
        var id = uuidv4();
        appendReminder(id, {});

        var text = document.getElementById(id).getElementsByClassName("text")[0].value;
        var hours = document.getElementById(id).getElementsByClassName("hours")[0].value;
        var minutes = document.getElementById(id).getElementsByClassName("minutes")[0].value;
        var enabled = document.getElementById(id).getElementsByClassName("enabled")[0].checked;
        chrome.runtime.sendMessage({
            method: "reminder-add",
            data: {
                id: id,
                hours: hours,
                minutes: minutes,
                text: text,
                enabled: enabled
            }
        }, function(response) {

        });
    });

    document.getElementById("pet-name").addEventListener("change", function(e) {
        chrome.runtime.sendMessage({
            method: "change-pet-name",
            data: {
                name: e.target.value
            }
        }, function(response) {

        });
    });

    document.getElementById("owner-name").addEventListener("change", function(e) {
        chrome.runtime.sendMessage({
            method: "change-owner-name",
            data: {
                name: e.target.value
            }
        }, function(response) {

        });
    });

    document.getElementById("chrome-notify").addEventListener("change", function(e) {
        chrome.runtime.sendMessage({
            method: "change-chrome-notify",
            data: {
                status: e.target.checked
            }
        }, function(response) {

        });
    });

    document.getElementById("show-pet-switch").addEventListener("change", function(e) {
        if (e.target.checked)
            document.getElementById("hidden-desc").style.display = "none";
        chrome.runtime.sendMessage({
            method: "show-toggle",
            data: {
                status: e.target.checked
            }
        }, function(response) {

        });
    });
    /*
    document.getElementById("enter-playground").addEventListener("click", function(e){
        chrome.tabs.create({'url': chrome.extension.getURL('/html/playground.html')}, function(tab) {
          // Tab opened.
        });
    }); 
    */

    document.getElementById("revive-hidden").addEventListener("click", function(e) {
        document.getElementById("hidden-desc").style.display = "none";
        chrome.runtime.sendMessage({
            method: "show-toggle",
            data: {
                status: true
            }
        }, function(response) {

        });
    });
    /*
    document.getElementById("walk-pet-switch").addEventListener("change", function(e){
        chrome.runtime.sendMessage({method: "walk-toggle", data: {status: e.target.checked}}, function(response) {
            
        });
    });
    */
    document.getElementById("talk-pet-switch").addEventListener("change", function(e) {
        chrome.runtime.sendMessage({
            method: "talk-toggle",
            data: {
                status: e.target.checked
            }
        }, function(response) {

        });
    });

    document.getElementById("walk-type-switch").addEventListener("change", function(e) {
        console.log(e.target.value);
        chrome.runtime.sendMessage({
            method: "walk-type",
            data: {
                status: e.target.value
            }
        }, function(response) {

        });
    });

    document.getElementById("tabs").addEventListener("click", function(e) {
        var elem = null;
        if (e.target.tagName === "LI")
            elem = e.target.children[0];
        else if (e.target.tagName === "A")
            elem = e.target;
        else
            return;

        var activeTabs = document.getElementById("tabs").getElementsByClassName("active");
        if (activeTabs.length > 0)
            activeTabs[0].classList.remove("active");
        elem.parentElement.classList.add("active");
        var hash = (elem.hash);

        var activeContent = document.getElementById("tabs-content").getElementsByClassName("active");
        if (activeContent.length > 0)
            activeContent[0].classList.remove("active");
        document.getElementById(elem.hash.replace("#", "")).classList.add("active");

    });

    document.getElementById("send-suggestion").addEventListener("click", function() {
        var content = document.getElementById("suggest-content").value;
        var email = document.getElementById("suggest-email").value;
        ajaxRequest({
            url: "https://www.meowplayground.com/suggest",
            type: "post",
            data: {
                content: content,
                email: email
            }
        });
        document.getElementById("suggest-content").value = "";
        document.getElementById("suggest-email").value = "";

        document.getElementById("suggestion-section").innerHTML = "<div id='thank-you'>THANK YOU!</div>"
    });

}

function ajaxRequest(data) {
    var xmlhttp = new XMLHttpRequest();
    var encodedString = '';
    for (var k in data.data) {
        if (encodedString.length > 0) {
            encodedString += '&';
        }
        encodedString += encodeURI(k + '=' + data.data[k]);
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) { // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                if (data.success) {
                    data.success.call(this, xmlhttp.responseText);
                }

            } else {
                if (data.error)
                    data.error.call(xmlhttp.responseText);
            }
        }
    };

    xmlhttp.open(data.type, data.url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send(encodedString);
}



window.onload = onWindowLoad;