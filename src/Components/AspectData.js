import { absa } from "../data";
import { final } from "../data";
import Papa from 'papaparse';
import { useState } from 'react';

export default function AspectData() {
    const [json, setJSON] = useState();
    const getCsvData = async (file) => {
        Papa.parse(
            file,
            {
                download: true,
                complete: (result) => {
                    setJSON(convertToJSON(result.data));
                }
            }
        )

        download();
    }

    function convertToJSON(array) {
        var objArray = [];
        for (var i = 1; i < array.length; i++) {
            objArray[i - 1] = {};
            for (var k = 0; k < array[0].length && k < array[i].length; k++) {
            var key = array[0][k];
            if (array[i][k].charAt(0) === "{") {
                array[i][k] = convertStrToJson(array[i][k]);
            }
            objArray[i - 1][key] = array[i][k];
            }
        }
        
        return objArray;
    }

    function convertStrToJson(string) {
        var data = []
        const mString = string.split(": ");
        const multiString = mString.join("").split(", ");
        const stringWithoutFront = multiString.join("").split("{");
        const stringWithoutEnd = stringWithoutFront.join("").split("}");
        const stringWithoutQuote = stringWithoutEnd.join("").split("'");
        var i = 0;
        while (i < stringWithoutQuote.length - 1) {
            var obj = {};
            obj["aspect"] = stringWithoutQuote[i + 1];
            obj["sentiment"] = stringWithoutQuote[i + 3];
            data.push(obj);
            i += 4;
        }

        /* return [obj];

        return [obj]; */
        return data;
    }

    function download() {
        const filename = 'data.json';
        const jsonStr = JSON.stringify(json);

        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    
    const array = final;

    getCsvData(array);

    return json;
}
