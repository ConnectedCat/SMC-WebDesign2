let header = document.getElementById("myHeader");
let clrBTN = document.getElementById("colorBTN");
let quokkaImg = document.getElementById("quokkaImg");
let tgglBTN = document.getElementById("toggleBTN");

function changeTheColor(){
    // WE'LL DO SOME COLOR CHANGING HERE
    let redComp = Math.random() * 255;
    let greenComp = Math.random() * 255;
    let blueComp = Math.random() * 255;
    console.log("RED: " + redComp);
    console.log("GREEN: " + greenComp);
    console.log("BLUE: " + blueComp);

    header.style.backgroundColor = "rgb("+ redComp + ", "+ greenComp +", " + blueComp + ")";
}

let toggleTheImage = function(){
    // WE'LL DO SOME IMAGE TOGGLING HERE

    if(tgglBTN.innerText === "Show the second one!") {
        console.log("show the second image");
        quokkaImg.src = "quokka2.jpg";
        tgglBTN.innerText = "Now show the first one!";
    }
    else {
        console.log("show the first image");
        quokkaImg.src = "quokka1.jpg";
        tgglBTN.innerText = "Show the second one!";
    }
}

changeTheColor();

clrBTN.addEventListener("click", changeTheColor);
tgglBTN.addEventListener("click", toggleTheImage);