const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function main() {
    let geojson = fs.readFileSync("./test.geojson");
    let data = JSON.parse(geojson);
    for (code in data.features) {

        let parcelCode = data.features[code].properties.parcel_cod;

        const { error, stdout, stderr } = await exec(`.\\utility\\LTax4Utility.exe -encrypt ${parcelCode}`);
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`${parcelCode} => ${stdout}`);
    }
}

main()




