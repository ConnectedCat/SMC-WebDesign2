let field = document.getElementById("colorField");
let colorBTN = document.getElementById("colorToggle");

let toggleIMG = document.getElementById("quokkaIMG");
let imageBTN = document.getElementById("imgToggle");

let catSelect = document.getElementById("category");
let subSelect = document.getElementById("subcategory");

let imageToggle = function(){

    if(toggleIMG.alt === "Qute quokka 1"){
        //do stuff
        toggleIMG.src = "../what_JS_can_do/quokka2.jpg";
        toggleIMG.alt = "Qute quokka 2";
    }
    else {
        //do other stuff
       toggleIMG.src = "../what_JS_can_do/quokka1.jpg";
       toggleIMG.alt = "Qute quokka 1";
    }
}

let categoryUpdate = function(){
    let foodSubcats = ["coffee", "desserts", "cocktails", "muffins"];
    let animSubcats = ["kittens", "puppies", "quokkas"];
    let natureSubcats = ["forests", "mountains", "lakes"];

    subSelect.innerHTML = "";

    if(catSelect.value === "food"){
        console.log("food");
        foodSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
    else if(catSelect.value === "anim"){
        console.log("animals");
        animSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
    else if(catSelect.value === "nat"){
        console.log("nature");
        natureSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
}

//imageToggle();

catSelect.addEventListener("change", categoryUpdate);

imageBTN.addEventListener("click", imageToggle);

colorBTN.addEventListener("click", function(){
    console.log("Hello " + "World");

    let rComp = Math.random()*255;
    let gComp = Math.random()*255;
    let bComp = Math.random()*255;
    //"rgb(18, 187, 56)"
    field.style.backgroundColor = "rgb(" + rComp + ", " + gComp + ", " + bComp + ")";
})