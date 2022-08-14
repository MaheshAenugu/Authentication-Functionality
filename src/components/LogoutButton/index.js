import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const LogoutButton = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button className="about-btn" type="button" onClick={onClickLogout}>
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
