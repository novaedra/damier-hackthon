import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import '../../styles/pages/login.scss'

const LoginPage = () => {


 const togglePwdType = () => {

  if (document.getElementById('password_input').attributes[1].value == "password") {
   document.getElementById('password_input').attributes[1].value = "text"
  } else if (document.getElementById('password_input').attributes[1].value == "text") {
   document.getElementById('password_input').attributes[1].value = "password"
  }
 }

 return (
  <>
   <div id='login'>
    <div className='wrap'>
     <div className='left'>
      <div className='title'>
       <h1>Se connecter</h1>
       <div className='separator_title'></div>
      </div>

      <form>
       <input type="text" placeholder='Identifiant(s)' />

       <div className='password_section'>
        <input id='password_input' type="password" placeholder='Mot de passe' />
        <span id='icon_pwd' className='icon_pwd'><FontAwesomeIcon icon={faEye} className="eye_pwd" onClick={togglePwdType} /></span>
       </div>

      </form>
      <a className='forgot_pwd' href=''>Mot de passe oublié ?</a>

      <div className='btn_form'>
       <div className='remember_me'>
        <label className="container">Se souvenir de moi
         <input type="checkbox" />
         <span className="checkmark"></span>
        </label>
       </div>
       <input type="submit" value={'Se Connecter'} onClick={() => { document.location.href = '/' }} />
      </div>
     </div>
     <div className='right'>
      <div className='img'>
       <img src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Transdev_logo_2018.png' alt='Logo Transdev' />
      </div>
     </div>
    </div>

    <footer>
     Transdev &copy; 2021 - <a href='#' target='_blank'>Politique de confidentialité</a>
    </footer>
   </div>
  </>
 )
}

export default LoginPage