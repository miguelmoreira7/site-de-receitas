import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from '../card/Card'
import { showSuccessToast, showErrorToast, showInfoToast } from "../../utils/toast";
import { ToastContainer } from 'react-toastify';

type Meal = {
    [key: string]: string
}

const MealsByIngredient = () => {

  const { ingredient } = useParams();
  const [meals, setMeals] = useState<Array<Meal>>([]);

  async function getMeals(ingredient: string) {
      await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
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
      if (ingredient) {
        getMeals(ingredient);
      }
    }, [ingredient]);
  

  return (
    <div>
          <div className="max-w-[1200px] mx-auto">
      <div className="p-8 pb-0">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">
          Receitas com {ingredient}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 pb-8">
        {meals?.map((meal) => {
          return (
            <Card
              idMeal={meal.idMeal}
              key={meal.idMeal}
              name={meal.strMeal}
              description={meal.strInstructions}
              img={meal.strMealThumb}
              foodDetails={meal.strMeal}
              url={meal.strYoutube}
            />
          );
        })}
      </div>
    </div>
    <ToastContainer/>
    </div>
  )
}

export default MealsByIngredient