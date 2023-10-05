import React from 'react'

type ButtonProps = {
  url: string;
  text: string;
}

function SubmitButton({url, text}: ButtonProps) {
  return (
    <>
    <a href={url} className="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors">{text}</a>
    </>
  )
}

export default SubmitButton