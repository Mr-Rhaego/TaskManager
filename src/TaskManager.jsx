import { useState } from "react"

export const TaskManager = () => {

    const [nombre, setNombre] = useState('Pablo');

    return (
        <div className="flex flex-row w-full">
            <div className="w-full">
                <h1 className="bg-cyan-500 text-white font-bold m-8 p-2 rounded-lg">{ nombre }</h1>
                <span></span>
                <button className="bg-pink-500 text-white font-bold mx-8 p-2 rounded-lg cursor-pointer" onClick={ () => setNombre('Diego') }>Boton</button>
            </div>
        </div>
    )
}
