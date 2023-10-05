
type ButtonProps = {
  url: string;
}

const SubmitButton = ({ url }: ButtonProps) => {
  return (
    <a href={url} className="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors">{'YouTube'}</a>
  )
}

export default SubmitButton