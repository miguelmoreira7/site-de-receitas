import SubmitButton from "./SubmitButton"

type CardProps = {
  idMeal: string,
  name: string,
  description: string,
  img: string,
  foodDetails: string,
  url: string,
}

const Card = ({name, description, img, foodDetails, url}: CardProps) => {
  const parsedDescription = description?.slice(0,130)
  return (
    <div className="bg-white shadow rounded-xl hover:scale-105 transition-all">
      <a href={foodDetails}>
        <img src={img} className="rounded-t-xl w-full h-48 object-cover"/>
      </a>
      <div className="p-3">
        <h3 className="font-bold">{name}</h3>
        <p className="mb-4">{parsedDescription}</p>
        <div className="flex items-center justify-between">
          <SubmitButton url={url}/>
        </div>
      </div>
    </div>
  )
}

export default Card
