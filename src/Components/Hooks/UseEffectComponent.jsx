import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function UseEffectComponent() {

    let [countOne, setCountOne] = useState(0)
    let [countTwo, setCountTwo] = useState(0)
    let increaseCountOne = () => {
        setCountOne(countOne+1)
    }
    let increaseCountTwo = () => {
        setCountTwo(countTwo+1)
    }

    //first -> side-effect function 
    //second -> clean-up funtion 
    //third -> comma separated dependency list 

    //variation:1 =============================================
    //I will run on each render.
    let notifyToast = () => toast("I will run on each render.")
    useEffect(() => {
        if(countOne === 0){}else{
            notifyToast()
        }
    })

    //variation:2 =============================================
    // I will run on only first render.
    // let notifyToast = () => toast("I will run on only first render.");
    // useEffect(() => {
    //     notifyToast()
    // }, [])

    //variation:3 =============================================
    // I will run every time when count updated.
    // let notifyToast = () => toast("I will run every time when count updated.");
    // useEffect(() => {
    //   notifyToast()
    // }, [countOne])

    //variation:4 =============================================
    // I can run multiple dependencies.
    // let notifyToast = () => toast("I can run multiple dependencies.");
    // useEffect(() => {
    //     notifyToast()
    // }, [countOne, countTwo])

    //variation:5 =============================================
    // Let's add a clean up function.
    // useEffect(() => {
    //     alert("Value is updated.")
    //     return () => {
    //         alert("Value is unmounted.")
    //   }
    // }, [countOne])

    return (
        <>
            <div className='mb-4'>Count one is : {countOne}</div>
            <button className="bg-green-700 p-2 px-4 rounded-full mb-8" onClick={increaseCountOne}>
                Increase Count one
            </button>
            {/* <div className='mb-4'>Count two is : {countTwo}</div>
            <button className="bg-green-700 p-2 px-4 rounded-full" onClick={increaseCountTwo}>
                Increase Count two
            </button> */}
            <ToastContainer
                position="bottom-left"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition: Slide
            />
        </>
    )
}

export default UseEffectComponent