import SubmitButton from "./SubmitButton"

type CardProps = {
  name: string,
  description: string,
  img: string,
  foodDetails: string,
  url: string,
  text: string,
}

function Card({name, description, img, foodDetails, url, text}: CardProps) {
  return (
    <div className="bg-white shadow rounded-xl hover:scale-105 transition-all">
      <a href={foodDetails}>
        <img src={img} className="rounded-t-xl w-full h-48 object-cover"/>
      </a>
      <div className="p-3">
        <h3 className="font-bold">{name}</h3>
        <p className="mb-4">{`${description.slice(0,130)}...`}</p>
        <div className="flex items-center justify-between">
          <SubmitButton url = {url} text = {text}/>
        </div>
      </div>
    </div>
  )
}

export default Card
