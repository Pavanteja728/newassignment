import {Link} from 'react-router-dom'
import {BsBookmarkPlus} from 'react-icons/bs'
import Navbar from '../Navbar'
import './index.css'

const WishList = () => (
  <div>
    <Navbar />
    <div className="wishListContainer">
      <BsBookmarkPlus className="empty-bookmark" />
      <h1 className="wishlistHead">Lokks like your wishlist is empty</h1>
    </div>
    <div className="wishList-button-sec">
      <Link to="/">
        <button type="button" className="wishlistButton">
          Menu
        </button>
      </Link>

      <button type="button" className="wishlistButton">
        Login
      </button>
    </div>
  </div>
)

export default WishList
