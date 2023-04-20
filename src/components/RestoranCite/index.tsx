import { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom'

type Props = {
    slug: string
}
type infoRests={
    address:string,
    closeAt: string,
    cuisine:string,
    description:string,
    email:string,
    id:string,
    image:string,
    name:string,
    openAt:string,
    phone:string,
    slug:string,
}
function RestoranCite (props: Props){
    const params= useParams()
    const {slug}= props
    const [infoRests, setInfoRests] = useState<infoRests>([])

    useEffect(()=>{ 
        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`)
        .then(data => data.json())
        .then(res => {
                setInfoRests(res)
          })}, [])

    return(
        <div className=" flex flex-row mt-5">
            <div className=" flex  flex-col w-[25%] ">
                <div className="w-[65%]  flex flex-col ">
                    <div className="flex flex-row bg-slate-100   rounded-xl px-5 py-1 items-center mb-10">
                        <img src="icon/arrow_icon.png" alt="" className="w-[30px] h-[30px]"/>
                        <Link to={'/'} className="text-lg font-bold ml-1">Все рестораны</Link>
                    </div>
                    <div className=" bg-slate-100  rounded-xl px-5 py-1 items-center h-[50px] mb-10 ">
                        <Link to={'/menu'} className="text-base font-bold ">Меню </Link>
                    </div>
                    <div className=" bg-slate-100 rounded-xl px-5 py-1 items-center  h-[50px]">
                        <p className="text-base font-bold ">Информация о ресторане</p>
                    </div>

                    
                    
                </div>
               
            </div>
            <div className="w-[50%]  static inline-block">

                <div className="absolute inline-block mt-[200px] ml-[100px]">
                    <div className=" w-[550px]">
                        <h1 className="text-6xl font-bold text-white ">{infoRests.name}</h1> 
                    </div>
                    
                    <div className="flex flex-row mt-10" >
                        <div>
                            <div className="flex flex-row bg-slate-100 mr-5 opacity-80 rounded-2xl px-5 py-1 items-center">
                                <img src="/icon/courier_icon.png" alt="" className="w-[40px] h-[40px]" />
                                <div className="flex flex-col">
                                    <p className="text-sm font-bold ml-1">15-20</p>
                                    <p className="text-xs">мин</p>
                                </div>
                                
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-row bg-slate-100 mr-5 opacity-80 rounded-2xl px-5 py-1 items-center">
                                <img src="/icon/star_icon.png" alt="" className="w-[40px] h-[40px]" />
                                <div className="flex flex-col ml-2">
                                    <p className="text-sm font-bold ml-1">4.7</p>
                                    <p className="text-xs">+200</p>
                                </div>
                                
                            </div>
                        </div>

                        <div>
                            <div>
                                <div className="flex flex-row bg-slate-100 mr-5 opacity-80 rounded-2xl px-5 py-1 items-center">
                                    <img src="/icon/info_icon.png" alt="" className="w-[40px] h-[40px]" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <img src={infoRests.image} className='w-[600px] h-[450px] m-auto rounded-3xl ' />
  
            </div>
            <div className="w-[25%]   ">
                <div className="bg-slate-200 rounded-2xl w-[85%] h-[450px]">
                  <h1 className=" pl-5 pt-5 text-xl font-bold ">Корзина</h1>  
                  <div>
                  <p className="pl-5 pt-40 text-xl font-bold ">В вашей корзине пока пусто</p>
                  </div>
                </div>
                
            </div>

            
            

        </div>
    )
}
export default RestoranCite