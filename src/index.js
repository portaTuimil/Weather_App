const title = document.querySelector(".title")
const imgContainer = document.querySelector(".mainImg");
const content = document.querySelector(".contentDiv");

async function retrieveData(city){
    try{
        //Current data:
        const response = await fetch ("https://api.weatherapi.com/v1/forecast.json?key=66bcfc1fd3c246058af81851231405&q=" + city + "&days=1");
        let data = await response.json();
        let currentData = data.current;
        let forecast = data.forecast.forecastday[0];
        console.log(currentData)
        console.log(forecast.hour[2].time, forecast.hour[2].temp_c, forecast.hour[2].temp_f, forecast.hour[2].condition.text, forecast.hour[2].condition.icon);
        //loadData(data);
        buildInterface(data);
    
    } catch(error){
        console.log(error);
    }
}

function buildInterface(data){
    content.firstElementChild.remove();
    content.classList.add("rowContainer");
    const fRow = document.createElement("div");
    const sRow = document.createElement("row");
    const tRow = document.createElement("row");
    content.appendChild(fRow).classList.add("row1");
    content.appendChild(sRow).classList.add("row2");
    content.appendChild(tRow).classList.add("row3");

    //Current weather Card:
    const currentCard = document.createElement("div")
    fRow.setAttribute("id", "currentCard")
    fRow.appendChild(currentCard).classList.add("card", "text-bg-dark");
    const title = document.createElement("h2");
    let img = document.createElement('img'); 
    img.src = "https:" + data.current.condition.icon;  
    title.textContent = (data.location.name + ", " + data.location.localtime + ":");
    
    currentCard.appendChild(title).classList.add("title")
    currentCard.appendChild(img).classList.add("currentSVG"); 

    //Weather by hour:
}



/*
function loadData(data){
    title.textContent = data.current.condition.text;
    while (imgContainer.firstChild){
        imgContainer.firstChild.remove();
    };
    let img = document.createElement('img'); 
    img.src = "https:" + data.current.condition.icon;  
    
    
}*/










//Calls:
const submit = document.querySelector("#submit");
const search = document.querySelector("#search");
const madrid = document.querySelector("#madrid");
const paris = document.querySelector("#paris");
const rome = document.querySelector("#rome");

submit.addEventListener("click", ()=>{retrieveData(search.value)});
madrid.addEventListener("click", ()=>{retrieveData("madrid")});
paris.addEventListener("click", ()=>{retrieveData("paris")});
rome.addEventListener("click", ()=>{retrieveData("rome")});