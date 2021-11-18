let cocktailButton = document.getElementById('fetchCocktail');
let cocktailDisplay = document.getElementById('displayCocktail');

let roverImageButton = document.getElementById('fetchRoverImage');
let roverImageDisplay = document.getElementById('displayRoverImage');

let fetchRandomCocktail = function(){
    let randCocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    fetch(randCocktailURL).
        then(function(result){
            return result.json();
        }).
        then(function(data){
            console.log(data.drinks[0]);

            let drName = data.drinks[0].strDrink;
            let drImage = data.drinks[0].strDrinkThumb;
            let drInstr = data.drinks[0].strInstructions;

            while (cocktailDisplay.firstChild){
                cocktailDisplay.removeChild(cocktailDisplay.firstChild);
            }

            let title = document.createElement('h3');
            title.innerText = drName;
            cocktailDisplay.appendChild(title);

            let image = document.createElement('img');
            image.src = drImage;
            image.alt = drName;
            cocktailDisplay.appendChild(image);

            let recepie = document.createElement('p');
            recepie.innerText = drInstr;
            cocktailDisplay.appendChild(recepie);
        })

    //console.log(cocktailDisplay);
}

let fetchRoverImage = function(){
    let baseURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
    let dateURL = '2015-7-4';
    let apiURL = 'DEMO_KEY';
    let imgURL = baseURL + 'earth_date=' + dateURL + '&api_key=' + apiURL;

    fetch(imgURL).
        then(function(result){
            return result.json();
        }).
        then(function(data){
            console.log(data.photos[0]);

            while(roverImageDisplay.firstChild){
                roverImageDisplay.removeChild(roverImageDisplay.firstChild);
            }

            let imgSrc = data.photos[0].img_src;

            let img  = document.createElement('img');
            img.src = imgSrc;
            img.alt = "Curiosity Rover Image";
            img.classList.add('rover-img');
            roverImageDisplay.appendChild(img);
        })

}

cocktailButton.addEventListener('click', fetchRandomCocktail);
roverImageButton.addEventListener('click', fetchRoverImage);