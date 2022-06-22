import React, { useState } from 'react'
import ShowTodo from './ShowTodo'
import '../App.css'
function Todo() {

    const [task, setTask] = useState("add some task")
    const [data, setData] = useState([])

    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newData = task;
        setData([...data, newData])

        setTask('')
    }

    const deleteItem =(a)=>{
        const finalData = data.filter((curEle,index)=>{
            return index !== a;
        })
        setData(finalData)
    }

    return (
        <>
        <a href="/"> <button type='button' className="bg-purple-700 hover:bg-purple-900 float-right text-white font-semibold hover:text-black py-2 px-6 mt-10 mr-20 border border-black hover:border-black rounded">Back</button></a>
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col bg-white">
                    <div className="row bg-primary text-white">
                        <div className="col  p-2">
                            <h4 className="font-medium leading-tight text-xl mt-0 mb-2 text-white">Todo App Using React JS</h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9">
                                <input id="todo-input" type="text" className="form-control" value={task} onChange={onChangeHandler} />
                            </div>
                            <button className="btn btn-primary btn-block w-100 btn-lg">Search</button>
                        </div>
                    </form>
                    
                    {data.map((value, index) => {
                        return <ShowTodo
                            key={index}
                            id={index}
                            task={value}
                            onSelcet={deleteItem}
                            
                        />
                        
                    })}


                </div>
            </div>
        </div>
        </>
    )
}

export default Todo
