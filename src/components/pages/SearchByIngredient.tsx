import { useEffect, useState } from "react"

type Ingredient = {
  [key: string]: string
}

const SearchByIngredient = () => {
  const [search, setSearch] = useState('')
  const [ingredients, setIngredients] = useState<Array<Ingredient>>([])

  async function getIngredients() {
    await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    .then(data => data.json())
    .then(data => {setIngredients(data.meals)})
  }
  
  useEffect(() => {
    getIngredients()
  }, [])

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="p-8 pb-0">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">Ingredientes</h1>
      </div>
      <div className="px-8 pb-3">
        <input type="text" onChange={(e) => setSearch(e.target.value)}
        className="mb-3 px-3 py-2 rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
        placeholder="Digite o nome do ingrediente, ex: Sushi"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {
              ingredients?.map((ingredient, id) => {
                const parsedIngredientToLowerCase = ingredient.strIngredient.toLowerCase()
                if (parsedIngredientToLowerCase.includes(search)) {
                  return (
                    <a href={`/by-ingredient/${ingredient.strIngredient}`} key={id} className="block bg-white rounded p-3 mb-3 shadow">
                      <h3 className="text-2xl font-bold mb-2">{ingredient.strIngredient}</h3>
                    </a>
                  )
                }
              })
            }
        </div>
      </div>
    </div>
  )
}

export default SearchByIngredient