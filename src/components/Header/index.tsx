import { Link} from 'react-router-dom'
import { useState, useRef, useEffect } from "react";
import CartOder from "components/CartOder"
import { cartItems } from 'components/App';
import { FaSistrix} from 'react-icons/fa'

type Props = {
    cartItems:cartItems[]
    onDelite:any
    setShow:any
    setCartItems: cartItems[]
}

function Header (props:Props){
    const {cartItems, onDelite, setCartItems, setShow}= props
    const ref = useRef()
    const [cartOpen, setCartOpen] = useState (false)
    let sum = 0
    cartItems.forEach(element => {sum+= (element.price*element.quantity)})
    const handelClick = (e)=>{
        e.preventDefault()
        setShow(true)
        setCartOpen(!cartOpen)
    }

    const deleteCartItems = (e)=>{
        setCartItems([])
    }

    //Лиля, объясни пожалуйста как работает эта штука 
    useEffect(() => {
        const checkIfClickedOutside = e => {

          if (cartOpen && ref.current && !ref.current.contains(e.target)) {
            setCartOpen(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {

          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [cartOpen])
    // 
      

    return(
        <div className="md:h-[150px] h-[150px] text-black font-semibold flex justify-between text-xl  border-gray-300 border-b-2  ">
            <div className=" mx-auto justify-start items-center pt-5 md:pt-10 flex flex-col sm:flex-row  w-[90%]  sm:justify-between">
                <div className="flex  flex-col sm:flex-row items-center">
                    <Link to={'/'} className="text-3xl mr-5 ">Заказ еды</Link>
                    
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500"><FaSistrix/></span>
                        </div>
                        <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full text-sm md:text-lg rounded-md border-0 py-1.5 pl-7 ml-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black"
                        placeholder="введите название"
                        />
                    
                    </div> 
                </div>
                <div className=''>
                    <img src='icon/shopp_icon.png' className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1  duration-300" onClick={()=> setCartOpen(!cartOpen)}/> 
                    {cartOpen && (
                        <div className="h-screen w-full fixed left-0 top-0 bg-black bg-opacity-70 z-100 ">
                            
                            <div ref={ref} className='bg-slate-100 rounded-xl  md:mt-[130px] py-5 ml-auto mr-[60px] w-[450px]  min-h-[300px] z-50 px-5'>
                                <div className='flex flex-row justify-between'>
                                            <h1 className='font-bold'>Корзина</h1>
                                            <p className='font-light text-base cursor-pointer' onClick={deleteCartItems}>Очистить</p>
                                </div>
                                <div className=' flex flex-col my-5'> 
                                {cartItems.length > 0 ? cartItems.map((item:cartItems) => {return <CartOder setCartItems={setCartItems} item={item} key={item.itemID} onDelite={onDelite} cartItems={cartItems}/>}): 
                                <p className='font-light text-base' >В вашей корзине пока пусто</p> }
                                </div>
                                
                                <p className=''>Общая стоимость: {sum}р.</p>
                                <button onClick={handelClick}>Сделать заказ</button>
                                <div>
                                </div> 

                            </div>
                        </div>
                        
                )}
                    
                </div>
                
                
            </div>
           
        </div>
    )
}
export default Header
