const APIKEY = "c288664b901cbff8aaf1b4a6aab2db0b";

let apiCall = function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then((response) => 
        response.json().then((data) => {

        document.querySelector(".ville").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°";
        document.querySelector(".description").innerHTML = data.weather[0].description;

        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".vent").innerHTML = data.wind.speed + " km";

        const weatherMain = data.weather[0].main;

        if(weatherMain == "Clear"){
            document.getElementById("card-top").style.backgroundImage = "url('./img/sunnylandscape.png')"; 
            document.getElementById("card").style.boxShadow = "5px 5px 50px var(--bg-sunny), -5px -5px 50px var(--bg-sunny)"
            document.getElementById("container").style.backgroundImage = "linear-gradient(165deg, rgb(166, 192, 254) 0%, rgba(246, 128, 132, 0.500) 100%)";
        }

        if(weatherMain == "Clouds"){
            document.getElementById("card-top").style.backgroundImage = "url('./img/cloudylandscape.png')"; 
            document.getElementById("card").style.boxShadow = "5px 5px 50px var(--bg-cloudy), -5px -5px 50px var(--bg-cloudy)"
            document.getElementById("container").style.backgroundImage = "linear-gradient(165deg, rgba(88,88,88,1) 0%, rgba(210,237,244,1) 60%, rgba(210,237,244,0.80) 100%)"
        }

        if(weatherMain == "Rain"){
            document.getElementById("card-top").style.backgroundImage = "url('./img/rainylandscape.png')"; 
            document.getElementById("card").style.boxShadow = "5px 5px 50px var(--bg-rainy), -5px -5px 50px var(--bg-rainy)"
            document.getElementById("container").style.backgroundImage = "linear-gradient(165deg, rgba(81,207,199,1) 0%, rgba(210,244,218,1) 60%, rgba(210,237,244,0.80) 100%)"
        }

        if(weatherMain == "Snow"){
            document.getElementById("card-top").style.backgroundImage = "url('./img/snowylandscape.png')"; 
            document.getElementById("card").style.boxShadow = "5px 5px 50px var(--bg-snowy), -5px -5px 50px var(--bg-snowy)"
            document.getElementById("container").style.backgroundImage = "linear-gradient(165deg, rgba(36,211,224,1) 0%, rgba(210,244,234,1) 60%, rgba(210,237,244,0.80) 100%))"
        }
    })
    )

        .catch((err) => console.log("Erreur : " + err));
};

document.querySelector('form').addEventListener("submit", function (e) {
    e.preventDefault();
    let ville = document.querySelector(".input").value;
    document.querySelector(".input").value = " ";

    apiCall(ville);
});

apiCall("Paris");