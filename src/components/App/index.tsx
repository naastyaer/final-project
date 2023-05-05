import { useState, useEffect } from "react";
import "components/App/App.css";
import Modal from "components/Modal";
import Header from "components/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartRest from "components/CartRest";
import RestoranCite from "components/RestoranCite";
import Menu from "components/Menu";
import Footer from "components/Footer";

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
const [listRests, setlistRests] = useState ([])
const [cartItems, setCartItems] = useState<cartItems[]>([]) //массив для хранения товаров, добавленных в корзину
const [idRest, setIdRest] = useState () //переменная для передачи ID ресторана в postзапрос 

useEffect(()=>{ 
  fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants`)
  .then(data => data.json())
  .then(res => {
    if(res.Response === "False"){
      setlistRests([])
    } else{
      setlistRests(res)
    }
  })},[])

  const deleteOder=(itemId:number)=>{
    setCartItems(cartItems.filter(item => item.itemId !== itemId))
  }



  return (
      <BrowserRouter> 
      
        <Header cartItems={cartItems} onDelite={deleteOder} setCartItems={setCartItems}  setShow={setShow} show={show} />
        <Modal show={show} setShow={setShow} cartItems={cartItems} setCartItems={setCartItems} idRest={idRest}/>
        <Routes>
          <Route path="/" element={<div className=" items-center w-[70%] sm:w-[80%] md:w-[90%] m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-[415px]:grid-cols-1 gap-8 items-center pt-10">
            {listRests.length > 0 ? listRests.map((rest:rest) => {return <CartRest restoran={rest} key={rest.id} setOders={setCartItems} setIdRest={setIdRest}  /> }): <h1>Нет ресторанов</h1> }
          </div>}/>
          
          <Route path="/:slug" element={<RestoranCite/>}/>
          <Route path="/:slug/menu" element={<Menu setCartItems={setCartItems} cartItems={cartItems}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}
export default App;
