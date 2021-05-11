import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Search from "./component/search";
import Weather from "./component/weather";

function App() {
  const [weatherInfo, setWeatherInfo] = useState();
  const [value, setValue] = useState("new+york");
  useEffect(() => {
    const search = () => {
      const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=ef6d31687e51707c794471b929c51907&units=metric`;

      const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=ef6d31687e51707c794471b929c51907&units=metric`;

      const one = axios.get(weather);

      const two = axios.get(forecast);

      axios.all([one, two]).then((res1) => {
        const data1 = res1[0].data;
        const data2 = res1[1].data;
        // console.log(data1);

        const sunset = new Date(data1.sys.sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 5);
        const sunrise = new Date(data1.sys.sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 5);

        setWeatherInfo({
          city: data1.name,
          country: data1.sys.country,
          description: data1.weather[0].description,
          icon: data1.weather[0].icon,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: data2.list,
        });
      });
    };
    search();
  }, [value]);

  if (!weatherInfo) return <div>loading</div>;

  console.log(weatherInfo);
  return (
    <div className="container-fluid">
      <img src="clouds.jpg" className="img-fluid" alt="clouds" />
      <div className="display">
        <div className="row justify-content-center mt-5">
          <Search setValue={setValue} />
        </div>
        <h2 className="cityname">{`${weatherInfo.city}, ${weatherInfo.country}`}</h2>
        <div className="weather">
          <Weather data={weatherInfo} />
        </div>
      </div>
    </div>
  );
}

export default App;
