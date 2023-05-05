import {infoMenu} from 'components/Menu'
import { FaTrash } from 'react-icons/fa'
import { useState } from 'react'
import { cartItems } from 'components/App'


type Props = {
    item: cartItems,
    onDelite: any,
    cartItems: cartItems[]
    setCartItems: any
}

function CartOder (props:Props){
    const style = { color: "gray" }
    const {item, onDelite, cartItems,setCartItems }= props
    const [chandeQuantity, setQuantity] = useState<number>(1) //у меня есть переменная chandeQuantity, чтобы туда записывать кол-во

//не понимаю почему не работает счетчик//
    const plus=( itemId:number)=>{
      
     
      setQuantity(chandeQuantity+1) 
        
        const q='quantity'
        setCartItems(
            cartItems.map((item) => {
              if (item.itemId === itemId) {
                return {...item, [q]: chandeQuantity}
              }else{
                return item
              }
            }))   
    }
    

    const minus=(itemId:number)=>{
        if(chandeQuantity<=0){
          console.log('надо удалять')
          console.log(itemId) 
          onDelite(itemId) //не работает! 

        } else{
            setQuantity(chandeQuantity-1)
        }
        const q='quantity'
        setCartItems(
            cartItems.map((item) => {
              if (item.itemId === itemId) {
                return {...item, [q]: chandeQuantity}
              }else{
                return item
              }
            }))  
    }

    return(
        <div className="text-black flex flex-row mt-5">
            <div className='w-[45%] text-base  flex flex-row items-center'>
                <img  src={item.image} className=' w-[50%] mr-2 '/>
                <div className='flex- flex-col'>
                  <p className='font-bold '>{item.name}</p>
                  <p className='font-light'>{item.price}p.</p>
                  
                </div>  
                
            </div>
            <div className=' w-[30%] flex justify-center'> 

              <div className='bg-slate-200 rounded-3xl w-[30%] text-center flex flex-col '>
                  <button onClick={()=>plus(item.itemId)} className=' cursor-pointer '>+</button>
                    {item.quantity}
                    <button onClick={()=>minus(item.itemId)} className=' cursor-pointer '>-</button>
              </div>
                    
            </div>

            <FaTrash style={style} className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1  duration-200' onClick={()=>onDelite(item.itemId)}/>    
            
        </div>
         
    )
}
export default CartOder