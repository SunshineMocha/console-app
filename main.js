const fs = require('fs');

let data;

console.log(process.argv) // argv argomenti a linea di comando
const inputUrl = process.argv[2];
const outputUrl = process.argv[3];

try {
    data = fs.readFileSync(inputUrl, 'utf8');
    const json = parseCsvToJSON(data);
    writeJsonToFile(json, outputUrl)
} catch (error) {
    console.error(error)
}

function parseCsvToJSON(data){
    const dataArray = data.split(/\r?\n/);
    const objArray = []
    let header = dataArray.shift()
    console.log(header);
    header = header.split(",")
    for (let i = 0; i < dataArray.length; i++) {
        const element = dataArray[i].split(",");
        const obj = {}
        for (let y = 0; y < header.length; y++) {
            const key = header[y];
            obj[key] = element[y]
        }
        objArray.push(obj)
    }
    console.log(objArray)
    return JSON.stringify(objArray)
}
function writeJsonToFile(json, outputUrl){
    // const content = 'sti cazzi'
    try {
        fs.writeFileSync(outputUrl, json)
    } catch (error) {
        console.error(error);
    }
}