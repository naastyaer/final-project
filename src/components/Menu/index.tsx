import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom'
import CartMenu from "components/CartMenu";
import{cartItems} from "components/App"

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
    const {setCartItems, cartItems}= props
    
    const params= useParams()
    const {slug}= params
    const [infoMenu, setInfoMenu] = useState<infoMenu[]>([])

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
          })},[])
    return(
        <div className=" justify-items: center w-[90%]  m-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center mt-10">
             {infoMenu.length > 0 ? infoMenu.map((item:infoMenu) => {return <CartMenu item={item} key={item.id}  onAdd={addToOder} /> }): <h1>Нет товаров</h1> }

        </div>
         
    )
}
export default  Menu

