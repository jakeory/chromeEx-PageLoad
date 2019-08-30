
// handle to document
const body = $("body");

// loadify constants
const secondsLegend = "This page's load time was...";
const gradeLegend = "GRADE: ";
const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d2/Sign_language_L.svg";
const grades = [[0.5,"A+"], [1, "A"], [2, "B"],[3, "C"], [4, "D"], [Infinity, "F"]];
const gradeInfo = { "A+": [ "You're up there with Google, nice job kid", "Eatin like Bezos with this load time", "Your page load time is well above Google's 2 second expectation for ecommerce websites"],
"A": [ "Nice", "Almost Google... almost", "Your page load time is well above Google's 2 second expectation for ecommerce websites"],
"B": [ "You're just meeting google's expected standards for page load time", "Even a half second improvement in load time could have a huge impact on bounce rate", "5-10% of visitors could be bouncing due to page load time"],
"C": [ "Not even a C++", "Your page load time could seriously be affecting your bounce rate", "Up to 15% of visitors could be bouncing due to page load time"],
"D": [ "Your page load time could seriously be affecting your bounce rate", "SOS", "Up to 20% of visitors could be bouncing due to page load time"],
"F": [ "It's not just your wi-fi", "yikes", "Up to 25% of visitors could be bouncing due to page load time"]
};   

// load time calc
const loadTime = ((window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart)/1000).toFixed(2);

// grading logic
let grade;
let gradeIdx = 0;

while(!grade){
  if(loadTime < grades[gradeIdx][0]) grade = grades[gradeIdx][1];
  gradeIdx += 1;
}

// get a random fact about the current grade
const gradInfoIdx = Math.floor(Math.random() * gradeInfo[grade].length);
const gradeMessage = gradeInfo[grade][gradInfoIdx];

//DOM manipulation
body.append('<div id="loadify-shell"></div>');
const shell = $("#loadify-shell");
body.append(shell);
shell.append(`<image id="loadify-logo" src='${imageUrl}'/>`);
shell.append(`<p id="loadify-seconds-header" class="loadify-subtle">${secondsLegend}</p>`);
shell.append(`<p id="loadify-seconds" class="loadify-bold">${loadTime}s</p>`);
shell.append(`<p id="loadify-grade-header" class="loadify-subtle">${gradeLegend}<strong>${grade}</strong></p>`);
shell.append(`<p id="loadify-grade-info" class="loadify-grade-info">${gradeMessage}</p>`);
