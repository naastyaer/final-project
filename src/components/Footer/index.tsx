import { Link} from 'react-router-dom'
function Footer (){
    return(
        <div className='h-[400px] w-[90%]  m-auto'>
            <div className='flex flex-col items-end'>
                <h1 className='pt-5 text-2xl font-bold my-5' >О компании</h1>
                <div className='flex flex-col gap-4 text-right'>
                    <p className='text-lg'>Пользовательское соглашение</p>
                    <p className='text-lg'>Контакты</p>
                    <p className='text-lg'>Доставка</p>
                    <p className='text-lg'>Стать партнером</p>
                    <p className='text-lg'>Стать курьером</p>
                </div>
            </div>
        </div>
    )
}
export default Footer
