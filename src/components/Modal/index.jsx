const Modal = ({show, onClose,infoFilm}) =>{
    if(!show){
        return null
    }
   
    return (  
    <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 z-10">
        <div className="bg-white rounded shadow-lg   h-[520px]">
            <div class="border-b px-4 py-2 flex justify-between items-center">
                <h3 class="font-semibold text-lg">{infoFilm.Title}</h3>
                
            </div>
            <div class="p-3 flex flex-row">
                <img src={infoFilm.Poster} className="w-1/2 pr-10 h-[400px]"/>
                <div>
                    <p>Actors</p>
                    <p className="border-b-2">{infoFilm.Actors}</p>  
                    <p>Country</p>
                    <p className="border-b-2">{infoFilm.Country}</p>
                    <p>Year</p>
                    <p className="border-b-2">{infoFilm.Year}</p>
                    <p>Raiting</p>
                    {/* <p className="border-b-2">{infoFilm.Raiting.Source}</p> 
                    как отобразить рейтинг?
                    */}

                </div>
                

            </div>
            <div class="flex justify-end items-center w-100 border-t p-3">
                <button class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal" onClick={onClose}>Cancel</button>
                
            </div>
          
           
            

        </div>
    </div>
    )
}
export default Modal