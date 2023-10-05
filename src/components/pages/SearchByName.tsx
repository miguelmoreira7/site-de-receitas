import { KeyboardEvent, useEffect } from "react"
import { useState } from "react"
import Card from "../card/Card"

type Meal = {
  [key: string]: string
}

function SearchByName() {

  const submit = (e:KeyboardEvent) => {
    if (e.key === 'Enter') {
      getMeals(value)
    }
  }
  
  const [value, setValue] = useState('')
  const [meals, setMeals] = useState<Array<Meal>>([])

  async function getMeals(pesquisa: String) {
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${pesquisa}`)
    .then(data => data.json())
    .then(data => {setMeals(data.meals)})
  }
  
  useEffect(() => {
    getMeals('')
  }, [])

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="p-8 pb-0">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">Procurar comida pelo nome</h1>
      </div>
      <div className="px-8 pb-3">
        <input type="text" onChange={(e) => setValue(e.target.value)} onKeyUp={(e) => {
          submit(e)
        }}
        className="px-3 py-2 rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
        placeholder="Procure alguma comida"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
          {
            meals?.map((meal, index) => {
              return (
                <Card key = {index}
                name={meal.strMeal}
                description={meal.strInstructions}
                img={meal.strMealThumb}
                foodDetails={meal.strMeal}
                url={meal.strYoutube}
                text='YouTube' />
              )
            })
          }
      </div>
      {
        meals?.length == 0 && (
          <div className="flex justify-center text-gray-600 p-8">
            <p>Receitas não encontradas</p>
          </div>
        )
      }
    </div>
  )
}

export default SearchByName