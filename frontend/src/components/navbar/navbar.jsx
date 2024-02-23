import { Link } from "react-router-dom"


const Navbar = () => {

    return (
        <div className=" bg-red-600 shadow md:left-0 sm:h-screen md:w-80 sm:sticky sm:top-0 ">
            <div className="p-5 hidden md:flex sm:justify-center ">
                <h1 className=" text-white text-4xl font-bold ">Cook Me</h1>
            </div>

            <div className=" flex justify-center items-center">
                <ul className=" flex sm:flex-col text-white sm:m-5 text-center">
                    <Link to='/' className=""> 
                    <li className=" flex items-center justify-end  mb-5 p-2 text-1xl font-bold rounded-lg hover:bg-white hover:text-red-600 transition duration-400 ">
                       <p className="hidden md:flex">Home</p>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:ml-5 w-8 h-8 inline-block">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>

                    </li></Link>

                    <Link to='/' className="">
                         <li className=" flex items-center justify-end  mb-5 p-2 text-1xl font-bold rounded-lg hover:bg-white hover:text-red-600 transition duration-400 ">
                         <p className="hidden md:flex">Add recipe</p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:ml-5 w-8 h-8 inline-block">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                        </svg>


                    </li></Link>

                    <Link to='/' className="">
                         <li className=" flex items-center justify-end  mb-5 p-2 text-1xl font-bold rounded-lg hover:bg-white hover:text-red-600 transition duration-400 ">
                         <p className="hidden md:flex">Liked Recipes</p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:ml-3 w-8 h-8 inline-block">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>


                    </li></Link>

                    <Link to='/' className="">
                         <li className=" flex items-center justify-end   mb-5 p-2 text-1xl font-bold rounded-lg hover:bg-white hover:text-red-600 transition duration-400 ">
                         <p className="hidden md:flex">About</p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:ml-5 w-8 h-8 inline-block">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>

                    </li></Link>

                </ul>
            </div>
        </div>
    )
}

export default Navbar