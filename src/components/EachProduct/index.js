import {Link} from 'react-router-dom'
import './index.css'

const EachProduct = props => {
  const {productDetails} = props
  const {images, brand, title, MRP, price, discountPercent} = productDetails

  return (
    <Link to="/specificProduct" className="linkss">
      <li>
        {images.map(each => (
          <img src={each.src} alt="de" className="product-image" />
        ))}
        <p className="product-title">{title}</p>
        {brand.map(each => (
          <p className="product-name">{each.name}</p>
        ))}
        <div className="product-prices">
          <p className="product-price">Rs.{price.value}</p>
          <p className="product-cost">Rs.{MRP.value}</p>
          <p className="product-discount">{discountPercent}%</p>
        </div>
      </li>
    </Link>
  )
}

export default EachProduct
