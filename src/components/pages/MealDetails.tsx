import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Meal = {
  [key: string]: string;
};

const MealDetails = () => {
    const { mealId } = useParams();
  const [meal, setMeal] = useState<Meal>({});

  async function getMeal(mealId: string) {
    await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((data) => data.json())
      .then((data) => {
        setMeal(data.meals[0]);
      });
  }

  useEffect(() => {
    console.log(mealId);
    if (mealId) {
        getMeal(mealId);
    }
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="max-w-[800px] mx-auto p-8">
        <h1 className="text-4xl font-bold mb-5 text-orange-500">{meal?.strMeal}</h1>
        <img className="max-w-[100%]" src={meal?.strMealThumb} alt={meal?.strMeal} />
        <div className="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
          <div>
            <strong className="font-bold">Categoria: </strong>
            {meal?.strCategory}
          </div>
          <div>
            <strong className="font-bold">Area: </strong>
            {meal?.strArea}
          </div>
          <div>
            <strong className="font-bold">Tags: </strong>
            {meal?.strTags}
          </div>
        </div>
        <div className="my-3">
          <p>{meal?.strInstructions}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Ingredientes</h2>
            <ul>
              {Array(20)
                .fill(0)
                .map((_, index) => {
                  if (
                    Boolean(meal[`strIngredient${index + 1}`]?.trim())
                  ) {
                    return (
                      <li key={index}>
                        {`${index + 1} - `}
                        {meal[`strIngredient${index + 1}`]}
                      </li>
                    );
                  }
                })}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Medidas</h2>
            <ul>
              {Array(20)
                .fill(0)
                .map((_, index) => {
                  if (
                    Boolean(meal[`strMeasure${index + 1}`]?.trim())
                  ) {
                    return (
                      <li key={index}>
                        {`${index + 1} - `}
                        {meal[`strMeasure${index + 1}`]}
                      </li>
                    );
                  }
                })}
            </ul>
          </div>
          <div className="mt-4 col-span-1 sm:col-span-2 w-full flex justify-center gap-8">
            <a href={meal.strYoutube} className="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors">
                YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;