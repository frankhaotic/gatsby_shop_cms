import React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">index</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
