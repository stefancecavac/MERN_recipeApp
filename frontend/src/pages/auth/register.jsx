import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { UseUserContext } from '../../hooks/useUserHook'

const Register = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error , setError] = useState(null)
    const [loading , setLoading] = useState(false)

    const navigate = useNavigate()

    const { dispatch } = UseUserContext()


    const handleRegister = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch(`http://localhost:4000/api/user/register`, {
                method: 'POST',
                body: JSON.stringify({userName, email, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',

            })
            const json = await response.json()
    
            if(!response.ok){
                setError(json.error)
            }
    
            if (response.ok) {
                localStorage.setItem('User', JSON.stringify(json))
                navigate('/')
                setLoading(true)
                dispatch({ type: 'LOGIN', payload: json })
                setError(null)
            }
        }
        catch(error){
            console.log(error)
        }
       
    }


    return (
        <div className="flex justify-center items-center w-full h-full sm:m-10 ">
            <form className=" p-5 flex flex-col border-2 border-red-600 rounded-lg" onSubmit={handleRegister}>
                <h1 className="text-red-600 font-bold text-6xl mb-20">Register</h1>

                <label className="text-gray-600 ml-5 font-bold text-1xl">Username:</label>
                <input className=" border-2 border-gray-200 rounded-full p-2 outline-red-300 " type="text" onChange={(e) => setUserName(e.target.value)}
                    value={userName}></input>

                <label className="text-gray-600 ml-5 font-bold text-1xl">Email:</label>
                <input className=" border-2 border-gray-200 rounded-full p-2 outline-red-300 " type="email" onChange={(e) => setEmail(e.target.value)}
                    value={email}></input>

                <label className="text-gray-600 ml-5 font-bold text-1xl">Password:</label>
                <input className=" border-2 border-gray-200 rounded-full p-2 outline-red-300 " type="password" onChange={(e) => setPassword(e.target.value)}
                    value={password}></input>

                <button className="bg-red-600 text-white rounded-lg border-2 border-red-600 my-10 p-2 flex justify-center mx-10 hover:cursor-pointer hover:bg-white hover:text-red-600" disabled={loading}  type='submit'>Register</button>

                {error && <div className="text-red-500">{error}</div>}

                <p>Already have a account?<Link to='/user/login' className="text-red-600">Login</Link> here</p>
            </form>
        </div>
    )
}

export default Register