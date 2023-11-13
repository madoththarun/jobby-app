import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="nav-bar-website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-mobile-btn-container">
            <li className="nav-mobile-list-item">
              <Link to="/">
                <label htmlFor="myButton">Button Label</label>
                <button type="button" id="myButton" className="nav-mobile-btn">
                  {/* Button content */}

                  <AiFillHome className="nav-mobile-icon" />
                </button>
              </Link>
            </li>
            <li className="nav-mobile-list-item">
              <Link to="/jobs">
                <label htmlFor="nav-mobile-btn">Mobile Navigation Button</label>
                <button
                  type="button"
                  id="nav-mobile-btn"
                  className="nav-mobile-btn"
                >
                  Your Button Text
                  <BsBriefcaseFill className="nav-mobile-icon" />
                </button>
              </Link>
            </li>
            <li className="nav-mobile-list-item">
              <label htmlFor="logoutButton">Logout</label>
              <button
                type="button"
                id="logoutButton"
                className="nav-mobile-btn"
                onClick={onClickLogout}
              >
                Logout
                <FiLogOut className="nav-mobile-icon" />
              </button>
            </li>
          </ul>
        </div>
        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="nav-bar-website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/jobs" className="nav-link">
                Jobs
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
