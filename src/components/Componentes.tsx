import { useEffect, useState } from "react";
import Card from "./card/Card";

type Meal = {
  id: string,

  [key: string]: string
}

function Componentes() {
    const [meals, setMeals] = useState<Array<Meal>>([])
 

    async function getMeals(pesquisa: String) {
      await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${pesquisa}`)
      .then(data => data.json())
      .then(data => {setMeals(data.meals)})
    }

    useEffect(() => {
      setMeals;
    }, [])

  return (
    <div>
        <input type="text" placeholder="digite aí qualquer coisa"
        onChange={(e) => getMeals(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
          {
            meals?.map((meal) => {
              return (
                <Card name={meal.strMeal}
                description={meal.strInstructions}
                img={meal.strMealThumb}
                foodDetails={meal.strMeal}
                url={meal.strYoutube}
                text='YouTube' />
              )
            })
          }
        </div>
    </div>
  )
}

export default Componentes