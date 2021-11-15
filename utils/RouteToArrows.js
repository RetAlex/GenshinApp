/**
 * How to use this script/utility:
 * TBD
 */
const fs = require('fs')
let sourceFile = "./RouteToConvert.json"

function main(){
    let resultLine = []
    fs.readFile(sourceFile, "utf8", ((err, fileData) => {
        if(err){
            console.error("Got exception during file read: ", err)
            process.exit(1)
        }
        let data = JSON.parse(fileData)
        console.debug("Read the file "+sourceFile+" with the following points:\n", data["points"])

        data["points"].forEach(point => {
            console.debug("Processing point: ", point)
            resultLine.push([point["lat"], point["lng"]])
        })

        console.log(formatResultLine(resultLine))
    }))
}

function formatResultLine(resultLine){
    return resultLine.map(element => "["+element[0]+","+element[1]+"]").join(",")
}

//Call the function
main()