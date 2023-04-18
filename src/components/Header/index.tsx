
function Header (){
    return(
        <header className="md:h-[150px] h-[150px] text-black font-semibold flex justify-between text-xl  border-gray-300 border-b-2 ">
            <div className=" justify-start items-center pt-5 md:pt-10 flex mx-auto  flex-col md:flex-row  w-[90%]  md:justify-between">
                <div className="flex flex-row items-center">
                    <h1 className="text-3xl mr-5 ">Заказ еды</h1>
                    <p>"поисковая строка"</p>
                </div>
                <p>личный кабинет</p>
                
            </div>
           
        </header>
    )
}
export default Header
