import {rest} from 'components/App'
import Button from 'components/Button'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

type Props = {
    Restoran: rest,
    setinfoRest: string
    
}

function CartRest (props:Props){
    const {Restoran}= props

    const handelClick = (e: any)=>{
        e.preventDefault()
        console.log(Restoran.slug)
        // fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${Restoran.slug}`)
        // .then(data => data.json())
        // .then(res => {console.log(res)})
}
    return(
        <Link to={'/slug'} className=" text-black w-full h-[250px]" handelClick={handelClick}  >
            <img src={Restoran.image} className='w-full h-[70%] rounded-lg'/>
            <div className='h-[23%] text-base'>
                <p className='font-bold '>{Restoran.name} </p>
                <p className='font-light'>{Restoran.cuisine}</p>
            </div>     
            <p className='text-sm font-light bg-slate-100 rounded-xl pl-1 w-full'>Бесплатная доставка </p>
            <Button title={'подробнее'}/>
        </Link>
         
    )
}
export default CartRest
