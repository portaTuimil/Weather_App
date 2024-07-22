const title = document.querySelector(".title")
const imgContainer = document.querySelector(".mainImg");

async function retrieveData(city){
    try{
        //Current data:
        const response = await fetch ("https://api.weatherapi.com/v1/forecast.json?key=66bcfc1fd3c246058af81851231405&q=" + city + "&days=1");
        let data = await response.json();
        let currentData = data.current;
        let forecast = data.forecast.forecastday[0];
        console.log(currentData)
        //console.log(forecast.hour[2].time, forecast.hour[2].temp_c, forecast.hour[2].temp_f, forecast.hour[2].condition.text, forecast.hour[2].condition.icon);
        loadData(data);
    
    } catch(error){
        console.log(error);
    }
}

function loadData(data){
    title.textContent = data.current.condition.text;
    while (imgContainer.firstChild){
        imgContainer.firstChild.remove();
    };
    let img = document.createElement('img'); 
    img.src = "https:" + data.current.condition.icon;  
    imgContainer.appendChild(img); 
    
}

retrieveData('madrid');

