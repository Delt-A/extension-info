const path = require('path')
const util = require('util')
const fs = require('fs')
const execFile = util.promisify(require('child_process').execFile);
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


class AnalyzerService {
  static async analyzeLink(link) {
    const analyzePyPath = path.resolve(__dirname, 'analyzer.py')
    let {stderr, stdout} = await execFile('python3', [analyzePyPath, '-l', link], {shell: true, cwd: path.resolve(__dirname)})     //stdout == Output(Ext)
    if(stderr) {
      throw new Error("Error at analyze ext. Analyzer.service.js")
    }
    else {
      stdout = stdout.replace(/\r?\n|\r/g, "")
      // Connection URL
      const url = 'mongodb://localhost:27017';
      // Database Name
      const dbName = 'Thesis';
      try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection('Analyzer');
        console.log('Stdout', stdout)
        const outputData = await collection.findOne({ id: stdout });
        console.log('Output', outputData)
        client.close();
        return {data: outputData}   
      } catch (err) {
        console.log('Err' + err)
        return {data: null}   
      }
      
      // const outputFilePath = path.resolve(__dirname,stdout)
      // const outputFileData = fs.readFileSync(outputFilePath).toString()
     //need to understand this
    }
  }
}

module.exports = AnalyzerService