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
        console.log(data.forecast.forecastday[0].hour[1].time);
        buildInterface(data);
    
    } catch(error){
        console.log(error);
    }
}

function buildInterface(data){
    content.firstElementChild.remove();
    if (content.firstElementChild){content.firstElementChild.remove()};
    content.classList.add("rowContainer");

    //Current weather Card:
    const currentCard = document.createElement("div")
    const sRow = document.createElement("row");

    const title = document.createElement("h2");
    title.textContent = (data.location.name + ", " + data.location.localtime + ":");

    const img = document.createElement('img'); 
    img.src = "https:" + data.current.condition.icon;  
    
    
    currentCard.appendChild(title).classList.add("title")
    currentCard.appendChild(img).classList.add("currentSVG"); 
    content.appendChild(currentCard).classList.add("card", "text-bg-dark");
    content.appendChild(sRow).classList.add("row2");

    //Weather by hour:
    for(let i = 0; i < 24; i++){
        let wCard = document.createElement("div");
        let hourText = document.createElement("p");
        hourText.textContent = data.forecast.forecastday[0].hour[i].time.slice(-6);
        wCard.classList.add("card", "text-bg-dark", "hourDiv");
        sRow.appendChild(wCard)
        wCard.appendChild(hourText)
        const hourImg = document.createElement('img'); 
        hourImg.src = "https:" + data.forecast.forecastday[0].hour[i].condition.icon;  
        wCard.appendChild(hourImg).classList.add("hourImg")
    }
}

//Calls:
const submit = document.querySelector("#submit");
const search = document.querySelector("#search");
const madrid = document.querySelector("#madrid");
const paris = document.querySelector("#paris");
const rome = document.querySelector("#rome");

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    retrieveData(search.value);
    search.value = "";
});
madrid.addEventListener("click", ()=>{retrieveData("madrid")});
paris.addEventListener("click", ()=>{retrieveData("paris")});
rome.addEventListener("click", ()=>{retrieveData("rome")});