import React from 'react'

const Modal = ({ closeModal, ingredients, more }) => {
    return (
        <>
            <div className=' w-full h-full '>

                <div className=" mt-4 md:py-0 xsm:py-2 ">
                    <div className="modalContainer  w-full  md:my-auto xsm:my-10 flex flex-col">

                        <div className="heading flex flex-row justify-between my-5  ">

                            <div><span className='text-4xl font-bold ml-4'>Ingredients</span></div>
                            <div><button onClick={() => closeModal(false)} className="text-3xl bg-green-500 hover:bg-green-400 xsm:px-2  md:px-3  mr-2"><i class="fa-solid fa-xmark"></i></button></div>
                        </div>

                        <div className="body  flex flex-col mt-4 mb-10 text-2xl p-3 list-disc" >
                            <ul className='ml-3 list-decimal'>
                                {
                                    ingredients.map((curElem) => {
                                        return (
                                            <p className='list-disc'> • {curElem.text}</p>

                                        )
                                    })
                                }

                            </ul>
                        </div>

                        <div className="bottom flex flex-row gap-2  justify-between pt-3 pb-3">


                            <a href={more} className='bg-green-500 hover:bg-green-400  rounded-md px-3 py-2 text-xl font-semibold xsm:ml-4 md:ml-2'> <button>See Complete recipe</button>
                            </a>

                            <div className='bg-green-500 hover:bg-green-400  px-3 py-2 text-xl font-semibold mr-2 rounded-md  '><button onClick={() => closeModal(false)}>Close</button></div>

                        </div>










                    </div>

                </div>


            </div>








        </>
    )
}

export default Modal
