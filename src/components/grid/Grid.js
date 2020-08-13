import React, { useState, useEffect } from 'react'
import './Grid.css'
import http from '../../utils/api'
import Loader from 'react-loader-spinner'


const Grid = (props) => {
    const [dogs, setDogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDogs = async () => {
            const { data: { message } }  = await http('/breeds/image/random/15');
            setDogs(message)
            setIsLoading(false)
        }
        fetchDogs()
    }, []);

    return (
        <div className="grid">
            { isLoading ? 
                <Loader type="TailSpin" /> 
                :  
                null
                }
        </div>
    )
}

export default Grid
