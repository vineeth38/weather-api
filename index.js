let city = document.getElementById("city")
const div = document.getElementById("data")
let City = document.createElement("h3")
let despriction = document.createElement("h2")
let temp = document.createElement("h2")
let humidity = document.createElement("h2")
async function findTemparature(){
    div.innerHTML="";
       try{
         const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=190e47f8a93cf7e80ba7ef4daa1d07e7&units=metric`)
         const response = await api.json()
         if (!api.ok) {
             throw new Error(response.message || "Failed to fetch weather data");
             }
         console.log(response)
         City.innerText=city.value;
         despriction.innerText=`🌥 Description:${response.weather[0].main}`;
         temp.innerText=`🌡 Temperature:${response.main.temp}`;
         humidity.innerText=`🌦️ humidity:${response.main.humidity}`;
         div.append(City,temp,despriction,humidity);
       }catch(error){
        div.innerText=error.message;
        console.log(error)
       }
     }
