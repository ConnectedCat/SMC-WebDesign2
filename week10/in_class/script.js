let clrBtn = document.getElementById("colorButton");
let randomColorBox = document.getElementById("randomColor");
let toggleBtn = document.getElementById("imageToggle");
let imgToToggle = document.getElementById("toggleImage");

let qShowcase = document.getElementById("quokkaShowcase");
let img1Btn = document.getElementById("img1");
let img2Btn = document.getElementById("img2");
let img3Btn = document.getElementById("img3");
let img4Btn = document.getElementById("img4");


let randomizeColor = function(){
    let redComp = Math.random()*255;
    let greenComp = Math.random()*255;
    let blueComp = Math.random()*255;

    randomColorBox.style.backgroundColor = "rgb(" + redComp + "," +  greenComp + "," + blueComp + ")";

    console.log(randomColorBox.style.backgroundColor);
}

let toggleTheImage = function(){
    //console.log(imgToToggle.src);
    if(imgToToggle.alt == "first quokka image"){
        imgToToggle.src = "quokka2.jpg";
        imgToToggle.alt = "second quokka image";
    }
    else {
        imgToToggle.src = "quokka1.jpg";
        imgToToggle.alt = "first quokka image";
    }

    
}

clrBtn.addEventListener("click", randomizeColor);
toggleBtn.addEventListener("click", toggleTheImage);

img1Btn.addEventListener("click", function(){
    console.log(qShowcase);
    qShowcase.style.backgroundImage = "url("+"https://www.traveller.com.au/content/dam/images/g/u/n/q/h/0/image.related.articleLeadwide.620x349.gunpvd.png/1488330286332.png" + ")";
})
img2Btn.addEventListener("click", function(){
    qShowcase.style.backgroundImage = "url("+"https://animals.sandiegozoo.org/sites/default/files/2020-04/quokka01.jpg"+")";
})
img3Btn.addEventListener("click", function(){
    qShowcase.style.backgroundImage = "url(" + "https://www.australiangeographic.com.au/wp-content/uploads/2020/12/quokka.jpg" + ")";
})
img4Btn.addEventListener("click", function(){
    qShowcase.style.backgroundImage = "url(" + "https://images.perthnow.com.au/publication/B881746762Z/1607831726514_GPH31T1NM.3-2.jpg" + ")";
})