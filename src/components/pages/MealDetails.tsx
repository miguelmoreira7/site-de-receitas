import { useEffect, useState } from "react";

type Meal = {
  [key: string]: string;
};

const MealDetails = () => {
  const [meal, setMeal] = useState<Meal>();

  async function getMeal() {
    await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52940`)
      .then((data) => data.json())
      .then((data) => {
        setMeal(data.meals[0]);
      });
  }

  useEffect(() => {
    getMeal();
  }, []);

  const ingredientNames = [];
  const ingredientQuantities = [];
  let i = 1;

  while (meal && meal[`strIngredient${i}`]) {
    const ingredientName = meal[`strIngredient${i}`];
    const ingredientMeasure = meal[`strMeasure${i}`];

    if (ingredientName.trim() !== "") {
      ingredientNames.push(ingredientName);
      ingredientQuantities.push(ingredientMeasure);
    }

    i++;
  }

  return (
    <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[800px] mx-auto p-8">
            <h1 className="text-4xl font-bold mb-5 text-orange-500">{meal?.strMeal}</h1>
            <img className="max-w-[100%]" src={meal?.strMealThumb} alt={meal?.strMeal}/>
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
                        {
                            ingredientNames.map((ingredientName) => {
                                return (
                                    <li>{ingredientName}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>

                </div>
                <div></div>
            </div>
        </div>
    </div>
  );
};

export default MealDetails;