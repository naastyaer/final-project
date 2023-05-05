import {rest} from 'components/App'
import { useNavigate } from 'react-router-dom';
import { FaWalking} from 'react-icons/fa'


type Props = {
    restoran: rest
    setOders: any
    setIdRest: any //почему нельзя number?
}

function CartRest (props:Props){
    const {restoran, setOders, setIdRest}= props
    const navigate = useNavigate()
    const handelClick = (e: any)=>{
        e.preventDefault()
        setOders([ ])
        setIdRest(`${restoran.id}`)
        navigate(`/${restoran.slug}`)

    }

    return(
        <div className=" text-black w-full h-[250px] hover:scale-110 duration-100 ease-in-out md:transform-none" onClick={handelClick}>
            <img src={restoran.image} className='w-full h-[70%] rounded-lg cursor-pointer' />
            <div className='h-[15%] text-lg'>
                <p className='font-bold cursor-pointer'>{restoran.name}</p>
                <p className='font-light'>{restoran.cuisine}</p>
            </div>
            <div className='w-[200px] flex flex-row items-center mt-5'>
                <div className='bg-green-400 p-2 rounded-full'>
                    <FaWalking />
                </div>
                
                <p className='text-sm font-light bg-slate-100 rounded-xl px-3 py-1 mb-1'>Бесплатная доставка </p>  
            </div>
            
        </div>
         
    )
}
export default CartRest
