import React from 'react'

export const Navbar = () => {
  return (
    <div className="uk-container">
      <nav className="uk-navbar">
        <div className="uk-navbar-left">
          <a href="#" className="uk-navbar-item uk-logo">
            MyApp
          </a>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-right">
            <li>
              <a href="#" className="">
                <span uk-icon="icon: plus; ratio: 1.2"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
