

const LoadingSkeleton = () => {

    return (
        <>
          <div className="shadow-md rounded-xl overflow-hidden text-sm relative animate-pulse">
            <div className="bg-gray-200 w-full object-cover h-44 sm:h-52"></div>
            <div className="bg-gray-200 p-1 rounded-xl flex flex-col m-2 justify-between absolute bottom-0">
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
            <div className="h-4 w-16 bg-gray-200 rounded-full p-1 absolute top-0 m-2"></div>
            <div className="h-4 w-16 bg-gray-200 rounded-full p-1 absolute top-0 right-0 m-2"></div>
        </div>
        </>
      
    )
}

export default LoadingSkeleton 

