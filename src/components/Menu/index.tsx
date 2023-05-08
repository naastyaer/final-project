import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom'
import CartMenu from "components/CartMenu";
import{cartItems} from "components/App"
import Loader from "components/Loader";
import FilterPrice from "components/FilterPrice";

export type infoMenu={
    id: string,
    restaurantId: string,
    name: string,
    image : string,
    description: string,
    price: string
}
type Props = {
    cartItems:cartItems[]
    setCartItems:cartItems[]
}

function Menu (props:Props){
    const [isLoading, setIsLoading] = useState(false)
    const [infoMenu, setInfoMenu] = useState<infoMenu[]>([])
    const [currentinfoMenu, setCurrentInfoMenu] = useState<infoMenu[]>([...infoMenu])
    const {setCartItems, cartItems}= props
    const params= useParams()
    const {slug}= params
    

    const filterByPrice = (price: number) => {
        const filteredMenu = infoMenu.filter((item) =>{
                return parseInt(item.price) <=price
            })
            console.log(filteredMenu)
            setCurrentInfoMenu(filteredMenu)
            //как добавить сюда, чтобы фу-ия возвращала html в компонент FilterPrice
            }
    
    

    const addToOder=(item:infoMenu)=>{
        // проверим, есть ли такой item, отфильтровав по name (или id)
         const isAdded = cartItems.find(function(i) {
              return i.name === item.name
         })
         //console.log(isAdded)
 
        // если уже такой существует, то изменим количество
        if (isAdded) {
           // создадим новый массив, в котором увеличим количество у существующего item
          // map создает новый массив из возвращаемых значений (тех, что у него в return)
          const result = cartItems.map(function(i) {
            console.log(i) //то, что уже есть в корзине с кол-вом
            console.log(item) //то, что добавляем без кол-ва
            //console.log(item)
               if (i.name ===  item.name) {
               console.log('повтор')
                 // возвращаем {}, в который через ... копируем все ключи и переписываем ключ quantity
                  return {...i, quantity: ++i.quantity }
                } else {
                    // возвращаем тот же item
                    return i 
                }
          })
          console.log(result) //кол-во не увеличивается
 
          // устанавливаем новый стейт
          setCartItems(result)
 
        } else { // иначе просто добавим новый
             let newItem ={
                itemId: item.id,
                name: item.name,
                price: parseInt(item.price),
                quantity: 1,
                image: item.image
             }
             setCartItems([...cartItems, newItem])
        }
    }
    useEffect(()=>{ 
        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`)
        .then(data => data.json())
        .then(res => {
                setInfoMenu(res)
                setIsLoading(true)
                 
          })},[])
    return(
        <div>
             <FilterPrice filterByPrice={filterByPrice}/> 
          <div className="justify-items: center w-[90%]  m-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center mt-10">
          {isLoading
              ?currentinfoMenu.length>0?
              currentinfoMenu.map((item:infoMenu) => {return <CartMenu item={item} key={item.id}  onAdd={addToOder} /> }):
                infoMenu.map((item:infoMenu) => {return <CartMenu item={item} key={item.id}  onAdd={addToOder} /> })
              : <Loader/> }
            

        </div>  
        </div>
        
         
    )

}
export default  Menu

