"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

     for (let i = 0; i < sampleSize; i++) {
        const random = Math.floor(Math.random() * 6 + 1);
        switch (random) {
            case 1:
                valueCounts[0] += 1;
                break;
            case 2:
                valueCounts[1] += 1;
                break;
            case 3:
                valueCounts[2] += 1;
                break;
            case 4:
                valueCounts[3] += 1;
                break;
            case 5:
                valueCounts[4] += 1;
            case 6:
                valueCounts[5] += 1;
                break;
            default:
                console.log('this number is not arranged between 1 to 6');

        };





    }


  const results = [];

     for (let x of valueCounts) {
        let percentage = (x / sampleSize) * 100;
        percentage = percentage.toFixed(2);

        results.push(percentage);


    }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];


    for (let i of sampleSizes) {
        const res = runExperiment(i);
        console.log(res, i);
    }
}

main();
