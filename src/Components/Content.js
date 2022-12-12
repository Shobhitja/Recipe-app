import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card1 from './Card1'
import Navbar1 from './Navbar1';
import Spinner from './Spinner';

const Content = ({ query }) => {

    const [recipe, setRecipe] = useState([])
    const [loading, setLoading] = useState(true)

    const APP_ID = "a51090a3"
    const APP_KEY = "45dd150c92279783fa2a9cfeb59476d8 "

    const getRecipe = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`)
            console.log(response.data.hits)
            setRecipe(response.data.hits)
            setLoading(false);

        } catch (error) {
            console.log('Error')
        }
    }



    useEffect(() => {
        getRecipe()
    }, [query])

    if (loading) {
        return <Spinner />
    }

    return (
        <>

            <div className=' mt-8 xsm:mx-3 md:mx-4   grid-Container xsm:gap-5 md:gap-5 grid  md:grid-cols-4 xsm:grid-rows-1'>
                {
                    recipe.map((curElem) => {
                        return <>
                            <Card1 key={curElem.recipe.label}
                                label={curElem.recipe.label}
                                calories={curElem.recipe.calories}
                                image={curElem.recipe.image}
                                ingredients={curElem.recipe.ingredients}
                                more={curElem.recipe.url}
                            />
                        </>
                    })
                }


            </div>

        </>
    )
}

export default Content
