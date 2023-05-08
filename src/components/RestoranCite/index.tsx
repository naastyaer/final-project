import { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom'
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
function RestoranCite (){
    const params= useParams()
    const {slug}= params
    console.log(slug)
    const [infoRests, setInfoRests] = useState<infoRests>([])

    useEffect(()=>{ 
        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`)
        .then(data => data.json())
        .then(res => {
                setInfoRests(res)
                
          })}, [])

    return(
        <div className=" flex flex-col min-[400px]:flex-row mt-5 w-[90%] m-auto mb-20">
            <div className=" w-full sm:w-[25%]">
                <div className="flex flex-row sm:flex-col mb-3 ">
                    <div className="cursor-pointer flex flex-row bg-slate-100 rounded-xl mr-20 sm:mr-0 px-3 md:px-5 py-2 items-center hover:bg-slate-200 ">
                        <img src="icon/arrow_icon.png" alt="" className=" w-[15px] h-[15px] sm:w-[30px] sm:h-[30px]"/>
                        <Link to={'/'} className="text-xs sm:text-base font-bold ml-1">Все рестораны</Link>
                    </div>
                    <div className="hover:bg-slate-200 cursor-pointer bg-slate-100 rounded-xl px-3 md:px-5 py-1 items-center sm:text-left text-center sm:mt-10">
                        <Link to={`/${slug}/menu`} className="text-xs sm:text-lg font-bold ">Меню </Link>
                    </div>
                </div>
               
            </div>
            <div className="w-full sm:ml-10 sm:w-[60%]  static inline-block">

                <div className="absolute inline-block mt-[150px] md:mt-[250px] ml-[7%]">
                    <div className="w-[90%] ">
                        <h1 className="text-3xl md:text-6xl font-bold text-white ">{infoRests.name}</h1> 
                    </div>
                    
                    <div className="flex flex-row mt-5 md:mt-10" >
                        <div>
                            <div className="flex flex-row bg-slate-100 mr-5 opacity-80 rounded-2xl px-2 md:px-5 py-1 items-center">
                                <img src="/icon/courier_icon.png" alt="" className="h-[20px] w-[20px] md:w-[40px] md:h-[40px]" />
                                <div className="flex flex-col">
                                    <p className=" text-xs md:text-sm font-bold ml-1">15-20</p>
                                    <p className="ml-1 text-xs">мин</p>
                                </div>
                                
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-row bg-slate-100 mr-5 opacity-80 rounded-2xl px-2 md:px-5 py-1 items-center">
                                <img src="/icon/star_icon.png" alt="" className="h-[20px] w-[20px] md:w-[40px] md:h-[40px]" />
                                <div className="flex flex-col ml-2">
                                    <p className="text-xs md:text-sm font-bold ml-1">4.7</p>
                                    <p className="text-xs">+200</p>
                                </div>
                                
                            </div>
                        </div>

                        <div>
                            <div>
                                <div className="flex flex-row bg-slate-100 mr-5 opacity-80 rounded-2xl px-2 md:px-5 py-1 items-center">
                                    <img src="/icon/info_icon.png" alt="" className="h-[20px] w-[20px] md:w-[40px] md:h-[40px]" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <img src={infoRests.image} className='w-full m-auto rounded-3xl h-[300px] md:h-[500px] ' />
  
            </div>

            
            

        </div>
    )
}
export default RestoranCite