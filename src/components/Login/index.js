import './index.css'

const Login = props => {
  const {method} = props
  return (
    <button type="button" onClick={method}>
      Login
    </button>
  )
}

export default Login
