import { useState, useEffect } from "react";
import "components/App/App.css";
import Notification from "components/Notification";
// import Modal from "components/Modal";
import Header from "components/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartRest from "components/CartRest";
import RestoranCite from "components/RestoranCite";

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

const App=() =>{
const [word, setWord] = useState<string>('')
const [show, setShow] = useState (false)
const [listRests, setlistRests] = useState ([])
const [infoRest, setinfoRest] = useState ({})

useEffect(()=>{ 
  fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants`)
  .then(data => data.json())
  .then(res => {
    if(res.Response === "False"){
      setlistRests([])
    } else{
      setlistRests(res)
      
      {console.log(listRests)}
     
    }
  })},[])
  return (
    
   
      <BrowserRouter> 
        <Header/>
        <Routes>
          <Route path="/" element={<div className="h-[1000px]  justify-items: center w-[97%]  m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-[391px]:grid-cols-1 gap-8 items-center pt-10">
            {listRests.length > 0 ? listRests.map((rest:rest) => {return <CartRest Restoran={rest} key={rest.id} infoRest={infoRest}/> }): <Notification/> }
          </div>}/>
          <Route path="/account" element={<div>Личный кабинет</div>}/>
          <Route path="/slug" element={<RestoranCite/>}/>
        </Routes>


        
      </BrowserRouter>
      
      
      /* <div className="w-full h-full">
        <div className=" m-auto bg-black h-full">
          
          <Modal show={show} onClose={()=>setShow(false)}/>
          <div className=" justify-items: center w-[90%]  m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-[391px]:grid-cols-1 gap-4 items-center bg-black pt-10">
             {listFilms.length > 0 ? listFilms.map((film) => {return <Film Film={film} key={film.imdbID} setShow={setShow} setinfoFilm={setinfoFilm} infoFilm={infoFilm}/>}): <Notification/> } 
          </div>
        </div>
      </div>  */
     
    
     
    
  )
}
export default App;
