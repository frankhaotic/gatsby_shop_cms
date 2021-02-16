import React from "react"
import { Link } from "gatsby"

// Custom Imports
import styles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link className={styles.link} to="/">
            index
          </Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
      </ul>
    </>
  )
}

export default Navbar
