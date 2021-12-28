const API_KEY="e501460df7768525e180b34d71b22491"

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then(response=>response.json().);
}
function onGeoError(){
    alert("Can t find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);