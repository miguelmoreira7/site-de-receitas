import {useParams, useNavigate} from 'react-router-dom'

function Details() {

    const {id} = useParams();

    const navigate = useNavigate();

    const handleContact = () => {
      console.log('ok');
      return navigate('/');
    }

  return (
    <div>
        {id ? <p>detalhes do id: {id}</p> : <p>nada de id por aqui</p>}
        <button onClick={handleContact}>testar redirect</button>
    </div>
  )
}

export default Details