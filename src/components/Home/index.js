import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class MainHome extends Component {
  state = {
    isLogin: true,
  }

  clickedBtn = () => {
    const {isLogin} = this.state
    this.setState(pervState => ({isLogin: !pervState.isLogin}))
    console.log(isLogin)
  }

  render() {
    const {isLogin} = this.state
    const isLoginButton = isLogin ? (
      <Login method={this.clickedBtn} />
    ) : (
      <Logout method={this.clickedBtn} />
    )

    const paraText = isLogin ? (
      <Message text="Please Login" />
    ) : (
      <Message text="Welcome User" />
    )
    return (
      <div className="main_container">
        <div className="card_container">
          {paraText}
          {isLoginButton}
        </div>
      </div>
    )
  }
}

export default MainHome
