import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function PageNotFound() {
const navigate = useNavigate();

  return (
  <>
    <div>
        Oops... ainda não temos o que você procura.
    </div>
    <Link to={navigate(-1)}>Voltar</Link>
  </>
  )
}

export default PageNotFound