
type Props = {
    choiceCategory:any
}
function Category (props: Props){
    const {choiceCategory}= props
    const category=[
        {
            key: 'all',
            name: 'Все'
        },
        {
            key: 'pasta',
            name: 'Паста'
        },
        {
            key: 'burger',
            name: 'Бургеры'
        },
        {
            key: 'pizza',
            name: 'Пицца'
        }


    ]
    return(
        <nav className="mx-auto mt-5 flex  md:flex-row flex-col items-center hover:cursor-pointer md:justify-between md:text-lg">
            {category.map((c) => (<div key={c.key} onClick={() => {choiceCategory(c.key)}}>{c.name}</div>)  )}
        </nav>  
    )
}
export default  Category
