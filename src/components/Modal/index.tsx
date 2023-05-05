import { useState  } from "react"

const Modal = ({show, setShow, cartItems, setCartItems, idRest}) =>{
    const [name, setName] = useState ('')
    const [number, setNumber] = useState ('')
    const [mail, setMail] = useState ('')
    
    if(!show){
        return null
    }
    async function sentOder(){
        try{
            let response = await fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/order`, {
			method: "POST",
			body: JSON.stringify({
				customerName: name, 
				phone: number,
				email: mail,
				restaurantId: idRest,
				cartItems: cartItems
			})
            
		})
        setShow(!show)
        alert('запрос отправлен')
        setName('')
        setNumber('')
        setMail('')
        setCartItems([])
        }catch(err) {
            alert(err); // TypeError: failed to fetch
        }
    }
    return (  
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 z-100 ">
        <div className="bg-white rounded shadow-lg px-10 py-5  ">
        <div className=" gap-4 flex flex-col"> 
                    <div className="flex flex-col">
                        <label className="">Имя</label>
                        <input 
                            onChange={(e) =>{ setName(e.target.value)}}
                           
                            value={name}
                            name="name" 
                            type="text" 
                            className="mb-2  text-black  w-full  rounded-sm bg-slate-100 p-1"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="">Телефон</label>
                        <input 
                            onChange={(e) =>{ setNumber(e.target.value)}}
                            
                            value={number}
                            name="number" 
                            type="text" 
                            className="mb-2  text-black  w-full  rounded-sm bg-slate-100 p-1"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="">Почта</label>
                        <input 
                            onChange={(order) =>{ setMail(order.target.value)}}
                            
                            value={mail}
                            name="number" 
                            type="text" 
                            className="mb-2  text-black  w-full  rounded-sm bg-slate-100 p-1"
                        />
                    </div>

                    
        </div> 
            
            <div className="flex justify-end items-center w-100 border-t p-3">
                <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white " onClick={sentOder} >Заказать</button>
                
            </div>
          
           
            

        </div>
    </div>
    )
}
export default Modal