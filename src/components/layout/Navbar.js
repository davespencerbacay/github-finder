import React from "react"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-122 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rouded-btn">
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "Github Searcher"
}

Navbar.propTypes = {
  title: PropTypes.string
}

export default Navbar
