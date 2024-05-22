import {Link} from 'react-router-dom'
import {BsBagPlus} from 'react-icons/bs'
import Navbar from '../Navbar'
import './index.css'

const Cart = () => (
  <div>
    <Navbar />
    <div className="wishListContainer">
      <BsBagPlus className="empty-bookmark" />
      <h1 className="wishlistHead">Lokks like your shopping bag is empty</h1>
    </div>
    <div className="wishList-button-sec">
      <Link to="/">
        <button type="button" className="wishlistButton1">
          Continue Shopping
        </button>
      </Link>

      <button type="button" className="wishlistButton">
        Login
      </button>
    </div>
  </div>
)

export default Cart
