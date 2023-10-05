import {Link} from 'react-router-dom'

function Contacts() {
  return (
    <div>
        <h1>pagina de contatos</h1>
        <p>
            <Link to='/contacts/1'> forma de contato 1</Link>  
        </p>
        <p>
            <Link to='/contacts/2'> forma de contato 2</Link>  
        </p>
        <p>
            <Link to='/contacts/3'> forma de contato 3</Link>  
        </p>
    </div>
  )
}

export default Contacts