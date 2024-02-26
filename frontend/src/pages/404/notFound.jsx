import {Link} from 'react-router-dom'


const NotFound = () => {


    return(
        <div className='flex flex-col justify-center '>
            <p className=' text-gray-700 text-7xl font-bold mb-2 '>Ops seems like this page is uncooked</p>
            <Link className='text-red-600 font-bold' to='/'>Return to homepage</Link>

        </div>
    )
}

export default NotFound