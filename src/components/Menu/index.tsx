import { Link} from 'react-router-dom'
import { useState, useEffect } from "react";

type Props = {
    slug: string
}
type infoMenu={
    id: number,
    restaurantId: number,
    name: string,
    image : string,
    description: string,
    price: string
}
function Menu (props: Props){
    const {slug}= props
    const [infoMenu, setInfoMenu] = useState<infoMenu>({})
    {console.log(slug)}
    
    useEffect(()=>{ 
        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`)
        .then(data => data.json())
        .then(res => {
                setInfoMenu(res)
                console.log(infoMenu)
                console.log('запрос')
          })},[])
    return(
        <div>
            это меню 
            {console.log(infoMenu)}
        </div>
         
    )
}
export default  Menu

