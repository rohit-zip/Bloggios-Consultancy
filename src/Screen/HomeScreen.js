import React from 'react'
import Landing from '../Component/Landing/Landing'

const HomeScreen = () => {
    return (
        <Landing>
            <div className='bg-body row mx-5 my-4'>
                <div className="col-lg-4 col-md-12 col-sm-12 bg-success">
                    Rohit
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12  bg-info">
                    Rohit
                </div>
            </div>
        </Landing>
    )
}

export default HomeScreen