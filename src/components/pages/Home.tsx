import { useEffect, useState } from "react";
import Card from '../card/Card'
import { showSuccessToast, showErrorToast, showInfoToast} from "../../utils/toast";
import { ToastContainer } from 'react-toastify';

type Meal = {
  [key: string]: string
}

const Home = () => {
    const [meals, setMeals] = useState<Array<Meal>>([]);

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
      getMeals('');
    }, [])

  return (
    <div className="max-w-[1200px] mx-auto">
        <div className="p-8 pb-0 text-orange-500">
            <h1 className="text-4xl font-bold mb-4">Receitas</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
          {
            meals?.map((meal) => {
              return (
                <Card 
                idMeal={meal.idMeal}
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

export default Home