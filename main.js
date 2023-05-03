const fs = require('fs');

let data;

try {
    data = fs.readFileSync('./data/test.csv', 'utf8')
    console.log(data)
    const json = parseCsvToJSON(data)
    //console.log(json);
    writeJsonToFile(json)
    // writeJSONToCSV(json)
    
} catch (error) {
    console.error(error)
}

function parseCsvToJSON(data){
    // 1) data = "name,surname,yob, gender \njing,wang,1993,female\nsimone,maccarone,2003,male\npietro,viglino,1988,male\nvalentina,cherubini,2001,female\nchiara,badile,1993,female\n"
    // 2) trasformare la stringa in un array di righe: (.split(/\r?\n/);)
    //    persone = ["name,surname,yob,gender", "jing,wang,1993,female", "..."]
    const persone = data.toString().split(/\r?\n/);
    console.log(persone)
    // https://www.geeksforgeeks.org/how-to-convert-csv-to-json-file-having-comma-separated-values-in-node-js/ check here
    // 3) separare la prima riga dalle successive
        // intestazione = "name,surname,yob,gender"
        // persone = ["jing,wang,1993,female", "..."]
    // 4) trasformare intestazione in un array
        // intestazione = ["name", "surname, "yob", "gender"]
        // persone = ["jing,wang,1993,female", "..."]
    // creare un array temporaneo vuoto
    // 6) cicliamo le righe
    // 7) trasformiamo ogni riga in array
    // for (let i = 0; i < persone.length; i++) {
    //     const persona = persone[i];
    //     // 7  personaArray = ["Jing","Wang", "1993", "female"];
    // }
    // 8) creare un nuovo oggetto vuoto
    // 9) ciclare su intestazione e aggiungere una proprietà all'oggetto per ogni elemento di intestazione
    //10) aggiungere oggetto ad array temporaneo
    //11) fare stringify array temp json()
    //12) ritornare la stringa json
}
function writeJsonToFile(json){
    const content = 'sti cazzi'
    try {
        fs.writeFileSync('./output/output.json', json)
    } catch (error) {
        console.error(error);
    }
}