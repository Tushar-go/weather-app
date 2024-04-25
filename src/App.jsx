import { useEffect } from "react"
import { useState } from "react"
import WeatherCard from "./components/WeatherCard"



function App() {
  const[searchValue, setSearchValue]=useState("jaipur")
  const [tempInfo,setTempInfo]=useState({})
  const getWeatherInfo = async()=>{
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${import.meta.env.VITE_REACT_APP_KEY}`

        const res = await fetch(url)
        const data = await res.json()
        const {temp , humidity , pressure} = data.main
        const {main:weathermood} = data.weather[0]
        const {name}  = data
        const {speed} = data.wind
        const {country, sunset} = data.sys
        
        const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
        }
        setTempInfo(myNewWeatherInfo)

    } catch(error){
        console.log(error)
    }
}  

useEffect(()=>{
    getWeatherInfo()
  
}, [searchValue])

        function handleSubmit(e){
        e.preventDefault()
        getWeatherInfo()
    }

  return (
  <div className=" bg-stone-600 h-screen  w-screen flex flex-col justify-center items-center gap-4"> 
  
        <form className="max-w-md mx-auto w-[350px]  " onSubmit={handleSubmit}>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter City Name"  value={searchValue}
         onChange={(e)=>setSearchValue(e.target.value)} required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
  

    <WeatherCard tempInfo={tempInfo} />

  </div>
  )
}

export default App
