import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import TapeBreak from '../../../assets/animations/TapeBreak/TapeBreak';
import Styles from './PageNotFound.module.scss'
import Copyrights from '../../../components/shared/Copyrights/Copyrights';


function PageNotFound() {
const navigate = useNavigate();

  return (
  <>
    <main className={Styles['page-not-found']}>
      <h1 className={Styles['page-not-found__title']}>
          Oops... ainda não temos o que você procura.
      </h1>
      <Link to={navigate(-1)} className={Styles['page-not-found__link']}>
        Voltar
        <div className={Styles['page-not-found__link__arrow']}></div>
      </Link>
      <TapeBreak />
    </main>
    <Copyrights />
    
  </>
  )
}

export default PageNotFound