import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../card/Card"

type Meal = {
  [key: string]: string
}

function SearchByLetter() {

  let {letter} = useParams()
  const [meals, setMeals] = useState<Array<Meal>>([])

  useEffect(() => {
    if (letter) {
      getMeals(letter)
    }
  },[])
  
  async function getMeals(letter: String) {
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    .then(data => data.json())
    .then(data => {setMeals(data.meals)})
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="p-8 pb-0">
        <h1 className="text-4xl font-bold mb-4 text-orange-500">Receitas por letra</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-3 px-8 mb-6">
        <a href="/by-letter/A" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">A</a>
        <a href="/by-letter/B" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">B</a>
        <a href="/by-letter/C" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">C</a>
        <a href="/by-letter/D" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">D</a>
        <a href="/by-letter/E" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">E</a>
        <a href="/by-letter/F" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">F</a>
        <a href="/by-letter/G" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">G</a>
        <a href="/by-letter/H" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">H</a>
        <a href="/by-letter/I" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">I</a>
        <a href="/by-letter/J" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">J</a>
        <a href="/by-letter/K" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">K</a>
        <a href="/by-letter/L" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">L</a>
        <a href="/by-letter/M" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">M</a>
        <a href="/by-letter/N" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">N</a>
        <a href="/by-letter/O" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">O</a>
        <a href="/by-letter/P" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">P</a>
        <a href="/by-letter/Q" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">Q</a>
        <a href="/by-letter/R" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">R</a>
        <a href="/by-letter/S" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">S</a>
        <a href="/by-letter/T" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">T</a>
        <a href="/by-letter/U" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">U</a>
        <a href="/by-letter/V" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">V</a>
        <a href="/by-letter/W" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">W</a>
        <a href="/by-letter/X" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">X</a>
        <a href="/by-letter/Y" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">Y</a>
        <a href="/by-letter/Z" className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">Z</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
          {
            meals?.map((meal, index) => {
              return (
                <Card key={index} 
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

export default SearchByLetter