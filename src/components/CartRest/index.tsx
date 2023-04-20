import {rest} from 'components/App'
import { Link} from 'react-router-dom'

type Props = {
    Restoran: rest,
    setSlug: any
    
    
}

function CartRest (props:Props){
    const {Restoran, setSlug}= props

    const handelClick = (e: any)=>{
    e.preventDefault()
    setSlug(Restoran.slug)
    }

    return(
        <div className=" text-black w-full h-[250px]" onClick={handelClick}  >
            <img src={Restoran.image} className='w-full h-[70%] rounded-lg' />
            <div className='h-[23%] text-base'>
                <p className='font-bold '>{Restoran.name}</p>
                <p className='font-light'>{Restoran.cuisine}</p>
            </div>     
            <p className='text-sm font-light bg-slate-100 rounded-xl pl-1 w-full'>Бесплатная доставка </p>
             <Link to={'/${Restoran.slug'} >подробнее</Link>  
             {/* не работает params */}
        </div>
         
    )
}
export default CartRest
