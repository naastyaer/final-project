
type Props = {
    filterByPrice:any
}
function FilterPrice (props:Props){
    const {filterByPrice}= props
    
    return(
        <div className=" flex flex-col" id="rangeValue">
            <input type="range" id="price" value="0" min="200" max="1000" 
            onChange={(event) => {
                console.log(event.target.value)
                filterByPrice(event.target.value)
                }}/>
                <output  id="price">200 рублей</output>
            
        </div>
         
    )
}
export default FilterPrice
