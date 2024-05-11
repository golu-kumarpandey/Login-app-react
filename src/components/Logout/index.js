import './index.css'

const Logout = props => {
  const {method} = props
  return (
    <button type="button" onClick={method}>
      Logout
    </button>
  )
}

export default Logout
