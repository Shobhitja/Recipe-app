import React from 'react'
import loading from '../loading.gif'
const Spinner = () => {
    return (
        <>
            <div className=' w-full p-3'>

                <div className="">
                    <div className=" m-auto">
                        <img className='m-auto  md:w-24 xsm:w-16' srcSet={loading} alt="image" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Spinner