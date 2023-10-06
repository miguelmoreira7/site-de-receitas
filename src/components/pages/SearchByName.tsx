import { KeyboardEvent, useEffect, useState } from "react"
import NoItems from "../NoItems"
import Card from "../card/Card"
import { showSuccessToast, showErrorToast, showInfoToast } from "../../utils/toast";
import { ToastContainer } from 'react-toastify';

type Meal = {
  [key: string]: string
}

const SearchByName = () => {

  const [value, setValue] = useState('')
  const [meals, setMeals] = useState<Array<Meal>>([])

  const handleSubmit = (e:KeyboardEvent) => {
    if (e.key === 'Enter') {
      getMeals(value)
    }
  }
  
  async function getMeals(pesquisa: string) {
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${pesquisa}`)
    .then(data => data.json())
      .then(data => {
        setMeals(data.meals)
        if (data.meals?.length > 0) {
          showSuccessToast('Receitas encontradas!')
        } else {
          showInfoToast('Receitas não encontradas!')
        }
      })
      .catch(() => {showErrorToast('Algo deu errado!')});
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
          handleSubmit(e)
        }}
        className="px-3 py-2 rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
        placeholder="Digite o nome da comida, ex: Sushi"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 pb-8">
          {
            meals?.map((meal, index) => {
              return (
                <Card 
                idMeal = {meal.idMeal}
                key = {meal.idMeal}
                name={meal.strMeal}
                description={meal.strInstructions}
                img={meal.strMealThumb}
                foodDetails={meal.strMeal}
                url={meal.strYoutube}
                />
              )
            })
          }
      </div>
      <ToastContainer/>
    </div>
  )
}

export default SearchByName