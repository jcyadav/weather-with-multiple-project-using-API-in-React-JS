import React from 'react'

function Home() {
  return (
    <>
   <div className="mt-60">
   <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-black">Click and check multiple Projects</h3>
<a href="/weatherpage"> <button type='button' className="bg-purple-600 hover:bg-purple-700 text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-white-200 rounded">Check Weather</button></a>
<a href="/showprofile"> <button type='button' className="bg-purple-600 hover:bg-purple-700 text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-white-200 rounded">Check Github Users</button></a>
<a href="/todolist"> <button type='button' className="bg-purple-600 hover:bg-purple-700 text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-white-200 rounded">Add TodoList</button></a>
<a href="/searchImage"> <button type='button' className="bg-purple-600 hover:bg-purple-700 text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-white-200 rounded">Get Image</button></a>
<a href="/datafetch"> <button type='button' className="bg-purple-600 hover:bg-purple-700 text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-white-200 rounded">Country List with API</button></a>
   </div>
</>
  )
}

export default Home