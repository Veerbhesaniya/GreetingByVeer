let inp = document.getElementById("inp");
let btn = document.getElementById("btn").addEventListener("click"  , () =>
{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=fe4b914629450b66e2dc9014b6570550&units=metric`;
    fetch(url).then((res) => res.json()).then((data) => 
    {
        var table = "<table><tr><th>Cityname</th><th>Base</th><th>Timezone</th><th>Weather</th></tr>";
        
            table += "<tr><td>"+  data.name + "</td><td>"+
                data.base + "</td><td>"+
                    data.main.temp + "</td><td>"+
                        data.timezone + "</td><td>" +
                        data.weather + "</td></tr>";
                    
                    document.getElementById("inner").innerHTML = table;
                    console.log(data.name);
                    console.log(data.base);
                    console.log(data.main.temp);
                    console.log(data.sys);
                    console.log(data.sys);
                    console.log(data.timezone);
                    console.log(data.wind);
                    console.log(data.weather);
                    console.log(data.visibisyslity);
                }) 
            } 

)
        //  document.getElementById("innerdiv").innerHTML = data;x
// // base
// // : 
// "stations"
// clouds
// : 
// {all: 20}
// cod
// : 
// 200
// coord
// : 
// {lon: 72.8333, lat: 21.1667}
// dt
// : 
// 1683351670
// id
// : 
// 1255364
// main
// : 
// {temp: 32.99, feels_like: 36.86, temp_min: 32.99, temp_max: 32.99, pressure: 1009, …}
// name
// : 
// "Surat"
// sys
// : 
// {type: 1, id: 9071, country: 'IN', sunrise: 1683333323, sunset: 1683380112}
// timezone
// : 
// 19800
// visibisyslity
// : 
// 6000
// weather
// : 
// [{…}]
// wind
// : 
// {speed: 3.09, deg: 180{