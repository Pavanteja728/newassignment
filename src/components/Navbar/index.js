// Write your JS code here
import {Link} from 'react-router-dom'

import {HiOutlineShoppingBag} from 'react-icons/hi2'
import {LuBookmark} from 'react-icons/lu'
import './index.css'

const Navbar = () => (
  <nav className="navBar">
    <h1 className="nothing">hudi</h1>
    <h1 className="mainHead">#Vibe Page</h1>
    <div className="icon-section">
      <ul className="icons">
        <li className="lists">
          <Link to="/wishlist" className="link">
            <LuBookmark />
          </Link>
        </li>
        <li className="lists">
          <Link to="/cart" className="link">
            <HiOutlineShoppingBag />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
