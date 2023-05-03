const fs = require('fs');

let data;

try {
    data = fs.readFileSync('./data/test.csv', 'utf8');
    const json = parseCsvToJSON(data);
    writeJsonToFile(json)
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
function writeJsonToFile(json){
    const content = 'sti cazzi'
    try {
        fs.writeFileSync('./output/output.json', json)
    } catch (error) {
        console.error(error);
    }
}