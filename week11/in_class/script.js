// for the carousel:
let carouselImages = ["quokkas1.jpg", "quokkas2.jpg", "quokkas3.jpg"];
let currentIndex = 2;
let carouselIMG = document.getElementById("carouselIMG");

//for the select:
let groupSelect = document.getElementById("groupSelect");
let categorySelect = document.getElementById("categorySelect");
let animalOptions = ['puppies', 'kittens', 'quokkas'];
let foodOptions = ['coffee', 'desserts', 'cocktails', 'muffins'];
let natureOptions = ['beaches', 'forests', 'lakes'];

let changeSlide = function(){
    if(currentIndex === 0){
        carouselIMG.src = carouselImages[1];
        //currentIndex = 1;
    }
    else if(currentIndex === 1) {
        carouselIMG.src = carouselImages[2];
        //currentIndex = 2;
    }
    else {
        carouselIMG.src = carouselImages[0];
        //currentIndex =  0;
    }

    if(currentIndex === 2) {
        currentIndex = 0;
    }
    else {
        currentIndex = currentIndex+1;
    }
}

let updateCategory = function(){
    console.log(groupSelect);
    categorySelect.innerHTML = '';
    let selectedValue = groupSelect.value;
    if(selectedValue === "animals"){
        animalOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
    else if(selectedValue === "food"){
        foodOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
    else if(selectedValue === "nature"){
        natureOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
}


window.addEventListener("load", function(){
    // triggered once after 5 sec
    setTimeout(function(){
        prompt("SUBSCRIBE TO OUR NEWSLETTER!!!", "my@email.com");
    }, 5000);

    //triggered every 5 sec
    setInterval(changeSlide, 5000);
});

groupSelect.addEventListener("change", updateCategory);