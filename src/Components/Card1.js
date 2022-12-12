import React from 'react'
import { useState } from 'react'
import Modal from '../Components/Modal'

const Card1 = ({ label, calories, image, more, ingredients }) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            {
                openModal ? (
                    <div className=' w-full'>
                        {openModal && <Modal ingredients={ingredients} closeModal={setOpenModal} more={more} />}
                    </div>)
                    : (<div className="  w-full">

                        {/* 1 Card */}
                        <div className='  md:w-full mt-4 '>
                            {/* //card */}

                            <div className="  shadow-2xl m-auto  max-w-lg   rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg h-64 w-full" srcSet={image} alt="" />
                                </a>
                                <div className="p-5">
                                    <p >
                                        <span className="mb-2 text-2xl font-bold tracking-tight text-blue-900 ">{label}</span>
                                    </p>
                                    <p className="mb-4 font-semibold text-2xl text-blue-500 dark:text-gray-400">
                                        Calories : {Math.trunc(calories)}  Kcals
                                    </p>

                                    <div className='flex flex-col'>

                                        <button onClick={() => setOpenModal(true)} className='w-full items-center px-3 py-3 text-lg font-semibold text-center text-green-700  border-green-600 border-2 rounded-xl hover:bg-green-200  mb-2'> Ingredients
                                        </button>

                                        <a href={more} className='w-full items-center px-3 py-3 text-lg font-semibold text-center text-red-700  border-red-500 border-2 rounded-xl hover:bg-red-200 mb-2'> See Complete Recipe
                                        </a>
                                    </div>


                                </div>
                            </div>


                        </div>

                    </div>)
            }





        </>
    )
}

export default Card1