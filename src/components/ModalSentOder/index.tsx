import {  useEffect, useRef } from "react";

const ModalSentOder = ({showSentOder, setShowSentOder}) =>{
    const closeModal=()=>{
        setShowSentOder(!showSentOder)
    }
    const ref = useRef()
    //не работает код ниже
    // useEffect(() => {
    //     const checkIfClickedOutside = e => {

    //       if (showSentOder && ref.current && !ref.current.contains(e.target)) {
    //         setShowSentOder(false)
    //       }
    //     }
    
    //     document.addEventListener("mousedown", checkIfClickedOutside)
    
    //     return () => {

    //       document.removeEventListener("mousedown", checkIfClickedOutside)
    //     }
    //   }, [showSentOder])
    //   console.log(showSentOder)

    if(!showSentOder){
        return null
    }
    return(
        <div ref={ref} className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 z-100 ">
        <div className="bg-white rounded shadow-lg px-10 py-5 w-[200px] h-[200px]">
            <h1>Ваш заказ отправлен</h1>
            <button onClick={closeModal}>Закрыть</button>
        </div> 
        </div> 
    )
    
    
}
export default ModalSentOder