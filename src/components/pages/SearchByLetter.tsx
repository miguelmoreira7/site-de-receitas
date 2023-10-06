import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ALL_LETTERS } from "../../constants";
import NoItems from "../NoItems";
import Card from "../card/Card";

type Meal = {
  [key: string]: string;
};

const SearchByLetter = () => {
  const { letter } = useParams();
  const [meals, setMeals] = useState<Array<Meal>>([]);

  useEffect(() => {
    if (letter) {
      getMeals(letter);
    }
  }, [letter]);

  async function getMeals(letter: string) {
    await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    )
      .then((data) => data.json())
      .then((data) => {
        setMeals(data.meals);
      });
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="p-8 pb-0">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">
          Receitas por letra
        </h1>
        <p className="text-gray-500 text-lg mb-6">
          Clique em uma letra abaixo para ver as receitas que começam com a letra
          selecionada.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 px-8 mb-6">
        {ALL_LETTERS?.map((letter, index) => {
          return (
            <a
              href={`/by-letter/${letter}`}
              key={index}
              className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
            >
              {letter}
            </a>
          );
        })}
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
      {letter && meals?.length === 0 && <NoItems />}
    </div>
  );
};

export default SearchByLetter;