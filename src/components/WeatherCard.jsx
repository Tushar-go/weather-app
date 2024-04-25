import { useEffect, useState } from "react";

export default function WeatherCard({ tempInfo }) {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <article className=" grid grid-cols-4  bg-white h-[400px] w-[650px]   rounded-xl">
      <div className="col-start-1 col-end-5  min-h-[100px]">
        <div className=" flex h-full justify-center items-center">
          <i
            className={`wi ${weatherState}`}
            style={{ fontSize: "50px", width: "50px", height: "50px" }}
          ></i>
        </div>
      </div>
      <div className="col-start-1 col-end-4 bg-black min-h-[100px]">
        <div className="flex justify-start gap-6 items-center h-full w-full">
          <div className=" ml-10">
            <span className=" text-4xl font-semibold text-white">
              {temp}&deg;
            </span>
          </div>
          <div className="ml-3">
            <div className="text-3xl text-white">{weathermood}</div>
            <div className=" text-sm text-white">
              {name}, {country}
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-4 col-end-5 bg-blue-600	 min-h-[100px] p-1">
        <div class="flex flex-0  items-center justify-around h-full  text-white text-2xl font-bold">
          {new Date().toLocaleString()}
        </div>
      </div>
      <div className="col-start-1 col-end-2  min-h-[100px]">
        <div className="flex h-full justify-around items-center">
          <p>
            <i
              className={"wi wi-sunset"}
              style={{
                fontSize: "35px",
                width: "35px",
                height: "35px",
                color: "skyblue",
              }}
            ></i>
          </p>
          <p className="font-semibold">
            {timeStr} PM <br />
            Sunset
          </p>
        </div>
      </div>
      <div className="col-start-2 col-end-3  min-h-[100px]">
        <div className="flex h-full justify-around items-center">
          <p>
            <i
              className={"wi wi-humidity"}
              style={{
                fontSize: "35px",
                width: "35px",
                height: "35px",
                color: "skyblue",
              }}
            ></i>
          </p>
          <p className=" font-semibold">
            {humidity} <br />
            Humidity
          </p>
        </div>
      </div>
      <div className="col-start-3 col-end-4  min-h-[100px]">
        <div className="flex h-full justify-around items-center">
          <p>
            <i className={"wi wi-rain"} style={{
                fontSize: "35px",
                width: "35px",
                height: "35px",
                color: "skyblue",
              }}></i>
          </p>
          <p className=" font-semibold">
            {pressure} <br />
            Pressure
          </p>
        </div>
      </div>
      <div className="col-start-4 col-end-5  min-h-[100px]">
        <div className="flex h-full justify-around items-center">
          <p>
            <i className={"wi wi-strong-wind"} style={{
                fontSize: "35px",
                width: "35px",
                height: "35px",
                color: "skyblue",
              }}></i>
          </p>
          <p className=" font-semibold">
            {speed} <br />
            Speed
          </p>
        </div>
      </div>
    </article>
  );
}
