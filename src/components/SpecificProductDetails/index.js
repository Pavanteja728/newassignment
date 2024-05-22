import {FcViewDetails} from 'react-icons/fc'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'

const SpecificProductDetails = props => {
  const {product} = props
  console.log(product)
  return (
    <>
      <Navbar />
      <div className="specific-product">
        <FcViewDetails className="details" />
        <p className="product-price">Details will be here soon...</p>
        <Link to="/">
          <button type="button" className="wishlistButton">
            Back
          </button>
        </Link>
      </div>
    </>
  )
}

export default SpecificProductDetails
