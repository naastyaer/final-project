import { useState, useEffect } from "react";
import "components/App/App.css";
import Modal from "components/Modal";
import Header from "components/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartRest from "components/CartRest";
import RestoranCite from "components/RestoranCite";
import Menu from "components/Menu";
import Footer from "components/Footer";
import Loader from "components/Loader";
import Category from "components/Category";
import ModalSentOder from "components/ModalSentOder";

export type rest={
  id: number,
  name: string,
  slug: string,
  phone: string,
  email: string,
  cuisine: string,
  address: string,
  image: string,
  openAt: string,
  closeAt: string,
  description: string

}
export type cartItems={
  itemId: number,
  name: string,
  price: number,
  quantity: number,
  image: string
}
const App=() =>{
const [show, setShow] = useState (false) //переменная для состояния мод. окна
const [showSentOder, setShowSentOder] = useState (false) //переменная для состояния мод. окна
const [listRests, setlistRests] = useState ([])
let [currentListRests, setCurrentListRests] = useState([...listRests]); //масиив для категорий
const [cartItems, setCartItems] = useState<cartItems[]>([]) //массив для хранения товаров, добавленных в корзину
const [idRest, setIdRest] = useState () //переменная для передачи ID ресторана в postзапрос
const [isLoading, setIsLoading] = useState(false)

useEffect(()=>{ 
  fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants`)
  .then(data => data.json())
  .then(res => {
    if(res.Response === "False"){
      setlistRests([])
    } else{
      setlistRests(res)
      setIsLoading(true)
    }
  })},[])

  const deleteOder=(itemId:number)=>{
    setCartItems(cartItems.filter(item => item.itemId !== itemId))
  }
  const choiceCategory = (category: string) => {
    console.log(category)
    let arr = listRests.filter((el) => {  
      if (category === "all") {
        return true;
      }
      return el.cuisine === category
    })
    setCurrentListRests(arr)
  }
  return (
      <BrowserRouter> 
      
        <Header cartItems={cartItems} onDelite={deleteOder} setCartItems={setCartItems}  setShow={setShow} show={show} />
        <ModalSentOder showSentOder={showSentOder} setShowSentOder={setShowSentOder} />
        <Modal show={show} setShow={setShow} cartItems={cartItems} setCartItems={setCartItems} idRest={idRest} showSentOder={showSentOder} setShowSentOder={setShowSentOder}/>
        <Routes >
          <Route path="/" element={
          <div className="w-[70%] sm:w-[80%] md:w-[90%]  m-auto">
           <Category choiceCategory={choiceCategory} />
            <div className="    grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-[415px]:grid-cols-1 gap-8 items-center pt-10">
              {isLoading
              ?currentListRests.length>0?
                currentListRests.map((rest:rest) => {return <CartRest restoran={rest} key={rest.id} setOders={setCartItems} setIdRest={setIdRest}  /> }):
                listRests.map((rest:rest) => {return <CartRest restoran={rest} key={rest.id} setOders={setCartItems} setIdRest={setIdRest}  /> })
              : <Loader/> }
            </div>
          </div>}/>
          
          <Route path="/:slug" element={<RestoranCite/>}/>
          <Route path="/:slug/menu" element={<Menu setCartItems={setCartItems} cartItems={cartItems} />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}
export default App;
