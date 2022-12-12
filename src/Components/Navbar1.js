import React, { useState } from 'react'
import img from '../img.png'
import Content from './Content';


const Navbar1 = () => {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('banana')

    const updateSearch = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    const getdone = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return (
        <>
            <div className="bg-green-500 md:h-28  w-full grid md:grid-cols-2 sm:grid-rows-2 xsm:grid-rows-2 p-3 xsm:gap-3 md:gap-2 " >

                <div className="col1 w-full md:flex xsm:flex-col md:flex-row gap-4 mt-3">
                    {/* img */}
                    <div className="img ">
                        <img className='w-14 xsm:m-auto md:m-0' src={img} alt="" srcset="" />
                    </div>

                    {/* //appname */}
                    <div className=" w-full text-4xl font-semibold align-middle mt-1.5 xsm:text-center md:text-left ">
                        <span>Food Recipe App</span>
                    </div>
                </div>

                <form onSubmit={getdone} className="col2  flex h-16 gap-3 xsm:mx-auto md:mx-0  mt-3">

                    <div className='input xsm:ml-2 md:ml-7 mt-1.5   '>
                        <input value={search} onChange={updateSearch} className=' xsm:w-56 md:w-96 p-3 rounded-lg text-black' type="text" placeholder='Search Recipe here ' />
                    </div>

                    <div className="icon mt-2 ">

                        <button className='  text-white  bg-blue-600 hover:bg-sky-600 xsm:px-4 xsm:py-1.5   md:px-5   md:py-1.5 xsm:ml-0 rounded-xl text-2xl'> <i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                    </div>

                </form>



            </div>

            <Content query={query} />


        </>
    )
}

export default Navbar1