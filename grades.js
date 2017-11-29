// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// let GradeA = [];
// let GradeB = [];
// let GradeC = [];
// let GradeD = [];
// let GradeF = [];
let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;
let gradeF = 0;

function gradeCount(){
        console.log("There are " + gradeA + " A's in the class");
        console.log("There are " + gradeB + " B's in the class");
        console.log("There are " + gradeC + " C's in the class");
        console.log("There are " + gradeD + " D's in the class");
        console.log("There are " + gradeF + " F's in the class");
}


function gradedScores ( scores ) {
    for (let i = 0; i < scores.length; i++) {
        console.log(typeof scores[i])
        if(scores[i] <= 100 && scores[i] >= 91){
            gradeA++;
        }
        else if(scores[i] <= 90 && scores[i] >= 81){
            gradeB++;
        }
        else if(scores[i] <= 80 && scores[i] >= 71){
            gradeC++;
        }
        else if(scores[i] <= 70 && scores[i] >= 61){
            gradeD++;
        }
        else if(scores[i] <= 60 && scores[i] >= 50)
            gradeF++;
        else{
            console.log("This grade is too low")
        }
    };
    gradeCount();
}

gradedScores(scores)