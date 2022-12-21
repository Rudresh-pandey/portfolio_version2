let pybtn = document.getElementById("py");
let pyDetails = document.getElementById("py-details");

let jsbtn = document.getElementById("js");
let jsDetails = document.getElementById("js-details");

pybtn.addEventListener("click", showpy);
function showpy() {
    // jsbtn.style = "background-color:rgb(57 19 119 / 26%)";
    jsbtn.style = "border-bottom: 2px solid #d9c5f9";
    // pybtn.style = "background-color:#391377";
    pybtn.style = "border-bottom: 2px solid rgb(95 219 209)";

    if (jsDetails.style = "display:block") {
        jsDetails.style = "display:none";
        pyDetails.style = "display:block";
    }
}

jsbtn.addEventListener("click", showjs);
function showjs() {
    // pybtn.style = "background-color:rgb(57 19 119 / 26%)";
    pybtn.style = "border-bottom: 2px solid #d9c5f9";
    // jsbtn.style = "background-color:rgb(57 19 119)";
    jsbtn.style = "border-bottom: 2px solid rgb(95 219 209)";

    if (pyDetails.style = "display:block") {
        pyDetails.style = "display:none";
        jsDetails.style = "display:block";
    }
}