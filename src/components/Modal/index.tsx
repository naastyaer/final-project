import { useState  } from "react"
import { Form, Field } from 'react-final-form'
import ModalSentOder from "components/ModalSentOder"

const Modal = ({show, setShow, cartItems, setCartItems, idRest, setShowSentOder}) =>{
    const [name, setName] = useState ('')
    const [number, setNumber] = useState ('')
    const [mail, setMail] = useState ('')
    const onSubmit= (e)=>{
        debugger

    }
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
        setShowSentOder(true)
        setName('')
        setNumber('')
        setMail('')
        setCartItems([])
        }catch(err) {
            alert(err)
        }
    }
    return (  
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 z-100 ">
        <div className="bg-white rounded shadow-lg px-10 py-5  ">
        <div className=" gap-4 flex flex-col"> 
        <Form
            onSubmit={onSubmit}
            validate={values => {
                const errors = {}
                if (!values.phone) {
                    errors.phone = 'Заполните поле'
                }
                if(isNaN(values.phone)){
                    errors.phone = 'Вводите только числа'
                }
                if(!isNaN(values.name)){
                    errors.name = 'Вводите только буквы'
                }
                return errors
                }}
                render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                
                <Field name="name">
                {({ input, meta }) => (
              <div>
                <label>Имя</label>
                <input {...input}  component="input" placeholder="Анастасия" onChange={(e) =>{ setName(e.target.value)}} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
                </Field>
            </div>
            <div className="flex flex-col">
                
                <Field name="phone">
                {({ input, meta }) => (
              <div>
                <label>Телефон</label>
                <input {...input}  component="input" placeholder="+79-277-52-77-45" onChange={(e) =>{ setNumber(e.target.value)}}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
                </Field>
            </div>
            
            <div className="flex flex-col">
                
                <Field name="mail">
                {({ input, meta }) => (
              <div>
                <label>Почта</label>
                <input {...input}  component="input" placeholder="bla@mail.com" onChange={(order) =>{ setMail(order.target.value)}}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
                </Field>
            </div>

           
            </form>
        )}
        />
        </div> 
            
            <div className="flex justify-end items-center w-100 border-t p-3">
                <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white "  type="submit" onClick={sentOder} >Заказать</button>
                
            </div> 
          
           
            

         </div>
    </div> 
    )
}
export default Modal