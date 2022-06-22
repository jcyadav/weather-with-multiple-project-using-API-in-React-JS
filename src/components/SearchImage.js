import React, { useState } from 'react'
import axios from 'axios'
function SearchImage() {
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`)
            .then((response) => {
                // console.log(response.data);
                setResult(response.data.results);
            })
    }
    return (
        <>
            <div className='container text-center my-2 mt-8'>
            <h3 className="font-medium leading-tight text-3xl mt-58 mb-2 text-black">Search Image unsplash Help of API</h3>
               
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
      placeholder="Search Image"
      value={photo} onChange={(e) => {
        setPhoto(e.target.value)
    }}
    />
    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-white-200 rounded" onClick={changePhoto}>Get Temp</button>

    </div>
    <a href="/"> <button type='button' className="bg-purple-700 hover:bg-purple-900 float-right text-white font-semibold hover:text-black py-2 px-6 mb-5 border border-black hover:border-black rounded">Back</button></a>
            </div>
            <div className="container">
                <div class="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                            <div class="col-lg-3 col-md-4 col-6">
                                    <img class="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default SearchImage;