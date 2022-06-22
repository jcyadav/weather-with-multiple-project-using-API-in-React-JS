import React from 'react'
function ShowTemp({text}) {
    return (
        <>
        <div className="grid grid-cols-4 gap-2 w-full">
<div class="block p-6 rounded-lg shadow-lg bg-white ">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2 border-solid-black">Description</h5>
    <p class="text-gray-700 text-base mb-4">
    {text.description}
    </p>
   </div> 
   <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Temp</h5>
    <p class="text-gray-700 text-base mb-4">
     {text.temp}
    </p>
   </div> 
   <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Temp Min</h5>
    <p class="text-gray-700 text-base mb-4">
      {text.temp_min}
    </p>
   </div> 
   <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Temp Max</h5>
    <p class="text-gray-700 text-base mb-4">
      {text.temp_max}
    </p>
   </div> 
   <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Humidity</h5>
    <p class="text-gray-700 text-base mb-4">
     {text.humidity}
    </p>
   </div> 
   <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Sunrise</h5>
    <p class="text-gray-700 text-base mb-4">
     {text.sunrise}
    </p>
   </div> 
   <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Sunset</h5>
    <p class="text-gray-700 text-base mb-4">
     {text.sunset}
    </p>
   </div> 
   <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Country</h5>
    <p class="text-gray-700 text-base mb-4">
   {text.country}
    </p>
   </div> 
  </div>
 
</>

    )
}

export default ShowTemp;
