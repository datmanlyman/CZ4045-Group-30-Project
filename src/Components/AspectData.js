import { absa } from "../data";
import Papa from 'papaparse';
import { useState } from 'react';

export default function AspectData() {
    const [reviews, setReviews] = useState();

    const getCsvData = async (file) => {
        Papa.parse(
            file,
            {
                download: true,
                complete: (result) => {
                    setReviews(convertToJSON(result.data));
                }
            }
        )

        console.log(reviews);
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
        const charArray = [...string];
        for (var i = 0; i < charArray.length; i++) {
            if (charArray[i] === "'") {
                charArray[i] = '"';
            }
        }
        const newString = charArray.join("");
        const obj = JSON.parse(newString);

        /* return [obj];

        return [obj]; */
        return [obj];
    }
    
    const array = absa;

    getCsvData(array);

    return reviews;
}