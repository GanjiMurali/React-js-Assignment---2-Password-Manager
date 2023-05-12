import './index.css'
import {v4} from 'uuid'

import {Component} from 'react'
import PasswordContainer from '../PasswordContainer'

class PasswordInput extends Component {
  state = {
    passwordList: [],
    webSiteName: '',
    userName: '',
    password: '',
    searchInput: '',
    isActiveToggle: false,
    passwordListLength: 0,
  }

  isActiveToggle = () => {
    const {isActiveToggle} = this.state

    this.setState({isActiveToggle: !isActiveToggle})
  }

  deletePassword = deleteId => {
    const {passwordList} = this.state
    // console.log(deleteId)

    this.setState({
      passwordList: passwordList.filter(comment => comment.id !== deleteId),
    })
  }

  renderPasswordList = () => {
    const {passwordList, searchInput, isActiveToggle} = this.state

    const filteredPasswordList = passwordList.filter(eachPassword =>
      eachPassword.webSiteName
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    // console.log(filteredPasswordList.length)

    return filteredPasswordList.map(eachPassword => (
      <PasswordContainer
        eachPasswordDetails={eachPassword}
        key={eachPassword.id}
        deletePassword={this.deletePassword}
        isActive={isActiveToggle}
      />
    ))
  }

  addPasswordList = event => {
    event.preventDefault()

    const {webSiteName, userName, password} = this.state

    const newPasswordDetails = {
      id: v4(),
      webSiteName,
      userName,
      password,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPasswordDetails],
      webSiteName: '',
      userName: '',
      password: '',
    }))
  }

  onChangeUrlInput = event => {
    this.setState({webSiteName: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      webSiteName,
      userName,
      password,
      passwordList,
      searchInput,
      isActiveToggle,
      passwordListLength,
    } = this.state

    console.log(passwordListLength)

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-img"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-img-2"
          />
          <form className="input-card" onSubmit={this.addPasswordList}>
            <h1 className="input-card-heading">Add New Password</h1>
            <div className="web-site-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website-img"
              />
              <input
                type="text"
                value={webSiteName}
                className="website-input"
                placeholder="Enter Website"
                onChange={this.onChangeUrlInput}
              />
            </div>
            <div className="web-site-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website-img"
              />
              <input
                type="text"
                value={userName}
                className="website-input"
                placeholder="Enter Username"
                onChange={this.onChangeUserName}
              />
            </div>
            <div className="web-site-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website-img"
              />
              <input
                type="password"
                value={password}
                className="website-input"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
              />
            </div>
            <button data-testid="delete" className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>

        <div className="password-container">
          <div className="nav-container">
            <div className="count-password-list">
              <h1 className="password-heading">Your Passwords</h1>
              <p className="length-of-passwords">{passwordList.length}</p>
            </div>

            <div className="password-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="website-img "
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeInputValue}
              />
            </div>
          </div>
          <hr />
          <div className="checkbox-container">
            <input
              className="checkbox-input"
              id="searchPassword"
              type="checkbox"
              value={isActiveToggle}
              onChange={this.isActiveToggle}
            />
            <label className="checkbox-label" htmlFor="searchPassword">
              Show Passwords
            </label>
          </div>
          {passwordList.length === 0 ? (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords"
              />
              <p className="no-password-para">No Passwords</p>
            </div>
          ) : (
            <ul className="comments-list">{this.renderPasswordList()}</ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordInput
