var header = document.getElementById("docHeader");
var hColorChangeBtn = document.getElementById("headerColorControl");

var quokkaImage = document.getElementById("quokkaImg");
var quokkaButton= document.getElementById("quokkaImgChange");

var headerColorChange = function(){
    var redComp = Math.random() * 255;
    console.log(redComp);
    var greenComp = Math.random() * 255;
    var blueComp = Math.random() * 255;

    // rgb(255, 255, 255)
    // rgb(|- a numer for Red -|, |-  -|, |-  -|)

    header.style.backgroundColor = "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";
}

var swapQuokkaImage = function(){
    console.log(quokkaImage.alt);

    if(quokkaImage.alt == "First image of a qute quokka"){ //the first image is showing
        quokkaImage.src = "quokka2.jpg";
        quokkaImage.alt = "Second image of a qute quokka";
        quokkaButton.innerText = "Show the first one!";
    } 
    else { // otherwise
        quokkaImage.src = "quokka1.jpg";
        quokkaImage.alt = "First image of a qute quokka";
        quokkaButton.innerText = "Show the second one!";
    }

    
}

//just when the JS loads
headerColorChange();
//when the button is clicked
hColorChangeBtn.addEventListener("click", headerColorChange);

quokkaButton.addEventListener("click", swapQuokkaImage);
