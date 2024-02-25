import { useState } from "react"
import { UseRecipeContext } from "../../hooks/useRecipeHook"


const AddRecipe = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState([{ name: '', amount: '' }])
    const [instructions, setInstructions] = useState([{ name: '', step: '' }])
    const [difficulty, setDifficulty] = useState('')
    const [mealType, setMealType] = useState('')
    const [prepTime, setPrepTime] = useState('')
    const [cookTime, setCookTime] = useState('')
    const [servings, setServings] = useState('')
    const [calories, setCalories] = useState('')

    const { dispatch } = UseRecipeContext()

    const [wrongInput, setWrongInput] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`http://localhost:4000/api/recipes/`, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify({ title, description, ingredients, instructions, difficulty, mealType, prepTime, cookTime, servings, calories }),
            credentials: 'include'
        })
        const json = await response.json()
        if (!response.ok) {
            setWrongInput(json.wrongInput)
            console.log(json)

        }
        if (response.ok) {
            setWrongInput([])

            dispatch({ type: 'POST_RECIPE', payload: json })
        }
    }


    const handleIngredientChange = (index, property, value) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index][property] = value;
        setIngredients(updatedIngredients);
    };

    const deleteIngredient = (index) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients.splice(index, 1);
        setIngredients(updatedIngredients);
    }

    const handleInstructionChange = (index, property, value) => {
        const updatedInstructions = [...instructions];
        updatedInstructions[index][property] = value;
        setInstructions(updatedInstructions);
    };
    const deleteInstruction = (index) => {
        const updatedInstructions = [...instructions];
        updatedInstructions.splice(index, 1)
        setInstructions(updatedInstructions);
    }

    const addIngredient = () => {
        setIngredients([...ingredients, { name: '', amount: '' }]);
    };

    const addInstruction = () => {
        setInstructions([...instructions, { name: '', step: instructions.length + 1 }]);
    };


    return (
        <div className="sm:p-5 sm:m-5 flex flex-col sm:w-full ">
            <form className="m-5" onSubmit={handleSubmit}>
                <h1 className=" flex justify-center text-4xl sm:text-7xl text-gray-800 font-bold my-5 sm:mb-20">Add <span className="text-red-600">Recipe:</span></h1>
                <div className="gap-5  md:flex ">
                    <div className="p-2 mb-5 bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:h-full sm:w-full">
                        <label className="text-gray-700 font-bold mb-5">Dish name:</label>
                        <input className={`  sm:mx-5 border-b-2  focus:outline-none ${wrongInput && wrongInput.includes('title') ? 'border-red-600 placeholder:text-red-600 ' : 'border-gray-300'} `} type="text"
                            placeholder={`${wrongInput && wrongInput.includes('title') ? 'Please fill out this field' : 'e.g Meat pie'}`}
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}></input>

                        <label className="text-gray-700 font-bold my-5">description:</label>
                        <textarea className={` h-32 overflow:auto sm:mx-5 border-b-2 text-wrap  focus:outline-none ${wrongInput && wrongInput.includes('description') ? 'border-red-600 placeholder:text-red-600 ' : 'border-gray-300'} `} type="text"
                            placeholder={`${wrongInput && wrongInput.includes('description') ? 'Please fill out this field' : 'e.g A juicy thick Meat pie'}`}
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}></textarea>
                    </div>



                    <div className="p-2 bg-white rounded-lg shadow-lg sm:w-full flex flex-col">
                        <label className="text-gray-700 font-bold mb-3">difficulty:</label>
                        <select
                            className={`sm:mx-5 border-2 rounded-md  focus:outline-none ${wrongInput && wrongInput.includes('difficulty') ? 'border-red-600 placeholder:text-red-600 text-red-600' : 'border-gray-300 text-gray-700'} `}
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                        >
                            <option value=''>{`${wrongInput && wrongInput.includes('difficulty') ? 'Please fill out this field' : 'select difficulty'}`}</option>
                            {['easy', 'medium', 'hard'].map((difficulty) => (

                                <option key={difficulty} value={difficulty}>{difficulty}</option>
                            )
                            )}
                        </select>

                        <label className="text-gray-700 font-bold mb-3">meal Type:</label>
                        <select
                            className={`sm:mx-5 border-2 rounded-md  focus:outline-none ${wrongInput && wrongInput.includes('mealType') ? 'border-red-600 placeholder:text-red-600 text-red-600' : 'border-gray-300 text-gray-700'} `}
                            value={mealType}
                            onChange={(e) => setMealType(e.target.value)}
                        >
                            <option value=''>{`${wrongInput && wrongInput.includes('mealType') ? 'Please fill out this field' : 'select meal type'}`}</option>
                            {['snack', 'breakfast', 'lunch', 'dinner', 'desert'].map((mealType) => (

                                <option key={mealType} value={mealType}>{mealType}</option>
                            )
                            )}
                        </select>

                        <label className="text-gray-700 font-bold mb-3">prepTime:</label>
                        <input className={`sm:mx-5 border-b-2  focus:outline-none ${wrongInput && wrongInput.includes('prepTime') ? 'border-red-600 placeholder:text-red-600 ' : 'border-gray-300'} `} type="text"
                            placeholder={`${wrongInput && wrongInput.includes('prepTime') ? 'Please fill out this field' : 'e.g 20 '}`}
                            onChange={(e) => setPrepTime(e.target.value)}
                            value={prepTime}></input>

                        <label className="text-gray-700 font-bold mb-3">Cook time:</label>
                        <input className={`sm:mx-5 border-b-2  focus:outline-none ${wrongInput && wrongInput.includes('cookTime') ? 'border-red-600 placeholder:text-red-600 ' : 'border-gray-300'} `} type="text"
                            placeholder={`${wrongInput && wrongInput.includes('cookTime') ? 'Please fill out this field' : 'e.g 60'}`}
                            onChange={(e) => setCookTime(e.target.value)}
                            value={cookTime}></input>

                        <label className="text-gray-700 font-bold mb-3">servings:</label>
                        <input className={`sm:mx-5 border-b-2  focus:outline-none ${wrongInput && wrongInput.includes('servings') ? 'border-red-600 placeholder:text-red-600 ' : 'border-gray-300'} `} type="text"
                            placeholder={`${wrongInput && wrongInput.includes('servings') ? 'Please fill out this field' : 'e.g 4'}`}
                            onChange={(e) => setServings(e.target.value)}
                            value={servings}></input>

                        <label className="text-gray-700 font-bold mb-3">calories:</label>
                        <input className={`sm:mx-5 border-b-2  focus:outline-none ${wrongInput && wrongInput.includes('calories') ? 'border-red-600 placeholder:text-red-600 ' : 'border-gray-300'} `} type="text"
                            placeholder={`${wrongInput && wrongInput.includes('calories') ? 'Please fill out this field' : 'e.g 1200'}`}
                            onChange={(e) => setCalories(e.target.value)}
                            value={calories}></input>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg lg:flex  justify-between px-5 lg:px-20 my-10">
                    <div className=''>
                        <p className="text-gray-700 font-bold mb-3">Ingredients:</p>
                        <button className="text-white bg-red-600 border-2 flex items-center justify-center   mb-5 p-2 text-1xl font-bold rounded-lg
                         hover:bg-white hover:text-red-600 border-red-600 transition duration-400 "
                            type="button" onClick={addIngredient}>
                            New Ingredient
                        </button>
                        {ingredients.map((ingredient, index) => (
                            <div className="sm:flex items-center" key={index}>
                                <button className="text-white bg-red-600 border-2 flex items-center justify-center  
                                 mb-5 p-2 text-1xl font-bold rounded-lg hover:bg-white hover:text-red-600 border-red-600 transition duration-400 "
                                    type="button" onClick={() => deleteIngredient(index)}>
                                    -
                                </button>

                                <input

                                    className={`sm:mx-5 border-b-2  focus:outline-none ${wrongInput && wrongInput.includes('ingredients') ? 'border-red-600 placeholder:text-red-600 ' : 'border-gray-300'} `}
                                    type="text"
                                    placeholder={`${wrongInput && wrongInput.includes('ingredients') ? 'Please fill out this field' : 'e.g eggs'}`}
                                    value={ingredient.name}
                                    onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                                />
                                <input
                                    className={`sm:mx-5 border-b-2 w-10 focus:outline-none ${wrongInput && wrongInput.includes('ingredients') ? 'border-red-600 placeholder:text-red-600 ' : 'border-gray-300'} `}
                                    type="number"
                                    placeholder={`${wrongInput && wrongInput.includes('ingredients') ? 'Please fill out this field' : 'e.g 2'}`}
                                    value={ingredient.amount}
                                    onChange={(e) => handleIngredientChange(index, 'amount', e.target.value)}
                                />
                            </div>
                        ))}

                    </div>

                    <div className=''>
                        <p className="text-red-600 font-bold mb-3">Instructions:</p>
                        <button className="  text-white bg-red-600 border-2 flex items-center justify-end   mb-5 p-2 text-1xl font-bold rounded-lg
                         hover:bg-white hover:text-red-600 border-red-600 transition duration-400 " type="button" onClick={addInstruction}>
                            Add Instruction
                        </button>
                        {instructions.map((instruction, index) => (
                            <div className="flex items-center" key={index}>
                                <button className="text-white bg-red-600 border-2 flex items-center justify-center   mb-5 p-2 text-1xl font-bold rounded-lg
                                 hover:bg-white hover:text-red-600 border-red-600 transition duration-400 "
                                    type="button" onClick={() => deleteInstruction(index)}>
                                    -
                                </button>
                                <input
                                    className={`sm:mx-5 border-b-2  focus:outline-none ${wrongInput && wrongInput.includes('instructions') ? 'border-red-600 placeholder:text-red-600 ' : 'border-gray-300'} `}
                                    type="text"
                                    placeholder={`Step ${instruction.step}`}
                                    value={instruction.name}
                                    onChange={(e) => handleInstructionChange(index, 'name', e.target.value)}
                                />
                            </div>
                        ))}
                    </div>

                </div>



                <button  className="flex  text-white bg-red-600 border-2  items-center justify-center mx-auto  mb-5 p-2 text-1xl font-bold rounded-lg hover:bg-white hover:text-red-600 border-red-600 transition duration-400 " type='submit'>Create Recipe</button>


            </form>
        </div>
    )
}

export default AddRecipe