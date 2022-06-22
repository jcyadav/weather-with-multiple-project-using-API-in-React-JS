import React, { useState } from 'react'
import axios from 'axios'
import ShowTemp from '../ShowTemp'
function WeatherPage() {
    const [city, setCity] = useState("")
    const [data, setData] = useState({
        description: "",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
        country: "",
    })

    const handleClick = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c412e32f8374f6a87ce341d095a159f6`)
            .then((response) => {
                setData({
                    description: response.data.weather[0].description,
                    temp: response.data.main.temp,
                    temp_max: response.data.main.temp_max,
                    temp_min: response.data.main.temp_min,
                    humidity: response.data.main.humidity,
                    sunrise: response.data.sys.sunrise,
                    sunset: response.data.sys.sunset,
                    country: response.data.sys.country,
                })
            })
    }

    return (
        <>
            <div className='container text-center my-2'>
            <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-black">Weather App Using React</h3>
               
                <div className="flex justify-center items-center">
    <input
      type="text"
      className="
        form-control
        block
        w-1/5
        px-3
    ml-10
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-700
        rounded
        transition
        ease-in-out
        ml-10
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      placeholder="Enter City" value={city} onChange={(e) => {
        setCity(e.target.value);
    }}
    />
    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-white-200 rounded" onClick={handleClick}>Get Temp</button>

    </div>
    <a href="/"> <button type='button' className="bg-purple-700 hover:bg-purple-900 float-right text-white font-semibold hover:text-black py-2 px-6 mb-5 border border-black hover:border-black rounded">Back</button></a>
            </div>

            <ShowTemp text ={data}></ShowTemp>
        </>
    )
}

export default WeatherPage;
