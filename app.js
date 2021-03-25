const { exec } = require("child_process");

const parcelCodes = ["10A001", "10A002", "10A003", "10A004", "10A005", "10A006"]

for(code in parcelCodes){

    let parcelCode = parcelCodes[code]

    exec(`.\\utility\\LTax4Utility.exe ${parcelCode}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`${parcelCode} => ${stdout}`);
    });

}

