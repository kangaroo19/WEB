const API_KEY="e501460df7768525e180b34d71b22491";

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    console.log(`you live in ${lat} , ${lon}`);
    const url=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).
    then((response)=>response.json())
    .then((data)=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        city.innerText=data.name;
        weather.innerText=`${data.weather[0].main}/${data.main.temp}'C`;
    });
}
    


function onGeoError(){
    alert("Cant find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);