import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from 'react-loader-spinner'

const Grid = (props) => {
    const [dogs, setDogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDogs = async () => {
            const { data: { message } }  = await axios.get('https://dog.ceo/api/breeds/image/random/15');
            setDogs(message)
            setIsLoading(false)
        }
        fetchDogs()
    }, []);

    return (
        <div>
            { isLoading ? <Loader type="TailSpin" /> : null }
        </div>
    )
}

export default Grid
