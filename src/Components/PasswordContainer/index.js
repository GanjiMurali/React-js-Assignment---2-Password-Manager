import './index.css'

const PasswordContainer = props => {
  const {eachPasswordDetails, deletePassword, isActive} = props
  const {id, webSiteName, userName, password} = eachPasswordDetails

  const deleteElement = () => {
    deletePassword(id)
  }

  const passwordToggle = isActive ? (
    <p className="last-para">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="password-stars"
    />
  )

  // console.log(isActive)

  return (
    <li className="list-item">
      <div className="card-container">
        <div className="alpha-letter">{webSiteName[0].toUpperCase()}</div>
        <div>
          <p className="card-para">{webSiteName}</p>
          <p className="card-para">{userName}</p>
          {passwordToggle}
        </div>
      </div>

      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        alt="delete"
        className="card-img"
        onClick={deleteElement}
      />
    </li>
  )
}

export default PasswordContainer
