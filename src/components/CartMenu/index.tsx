import {infoMenu} from 'components/Menu'
import{cartItems} from "components/App"


type Props = {
    item: infoMenu
    onAdd:any
    
    
}

function CartMenu (props:Props){
    const {item, onAdd}= props


    return(
        <div className=" text-black w-full h-[200px]">
            <img src={item.image} className='w-full h-[40%] rounded-lg' />
            <div className='h-[15%] text-base'>
                <p className='font-bold '>{item.name}</p>
                <div className='flex flex-row font-light'>
                    <p >{item.price}</p>
                    <p > р.</p>
                </div>
                <p className='font-bold  text-center cursor-pointer' onClick={()=>onAdd(item)} >Добавить в корзину</p>
            </div>     
            
        </div>
         
    )
}
export default CartMenu
