import {Component} from 'react'
import Navbar from '../Navbar'

import './index.css'

import EachProduct from '../EachProduct'

const products = [
  {
    id: '6349414129b251d1ff817c83',
    shopifyId: 7550934712458,
    title: 'Sivaar Grey Cushion Cover',
    MRP: {
      currency: 'INR',
      value: 599,
    },
    price: {
      value: 539,
      currency: 'INR',
    },
    brand: [
      {
        id: '6303a7ec82ad229d0daf005d',
        name: 'House This',
      },
    ],
    discountPercent: 10,
    images: [
      {
        id: 33943831347338,
        position: 1,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/files/CC1SIVGRYMEDA21_1_jpg.jpg?v=1709197629',
      },
      {
        id: 30982265700490,
        position: 2,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/products/CC1SIVGRYMEDA21_2.jpg?v=1709197629',
      },
      {
        id: 30982265733258,
        position: 3,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/products/CC1SIVGRYMEDA21_3.jpg?v=1709197629',
      },
      {
        id: 30982265667722,
        position: 4,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/products/CC1SIVGRYMEDA21_1.jpg?v=1709197629',
      },
    ],
    vendor: 'housethis',
  },
  {
    id: '645f7c07bd480a8cd4f62c63',
    shopifyId: 7680825688262,
    title: 'White Ceramic House Wax Melt/ Oil Burner / Tea Light Holder - TOH',
    MRP: {
      currency: 'INR',
      value: 1099,
    },
    price: {
      value: 1044,
      currency: 'INR',
    },
    brand: [
      {
        id: '645f783dccad61e8bdb7e7d4',
        name: 'The Orby House',
      },
    ],
    discountPercent: 5,
    images: [
      {
        id: 39779917725980,
        position: 1,
        width: 1933,
        height: 2577,
        src:
          'https://cdn.shopify.com/s/files/1/0558/4830/4838/products/image_5dec3fea-ec89-4afb-b8e4-e3385bc186ec.jpg?v=1678486494',
      },
      {
        id: 39779908092188,
        position: 2,
        width: 2730,
        height: 3413,
        src:
          'https://cdn.shopify.com/s/files/1/0558/4830/4838/products/image_608ac1f8-6032-4a50-ade0-a0f5d370c966.jpg?v=1678486501',
      },
      {
        id: 39779938959644,
        position: 3,
        width: 3456,
        height: 5184,
        src:
          'https://cdn.shopify.com/s/files/1/0558/4830/4838/products/image_3568f6e8-9c80-4e4b-8f9a-cfeddb181f16.jpg?v=1678486513',
      },
    ],
    vendor: 'THE ORBY HOUSE',
  },
  {
    id: '661a2a0b74778a17af44968d',
    shopifyId: 9159087391014,
    title:
      'Polester Floor Lamp - White Pleated Shade, White Stick Lamp, Easy to Assemble',
    MRP: {
      currency: 'INR',
      value: 4000,
    },
    price: {
      value: 3249,
      currency: 'INR',
    },
    brand: [
      {
        id: '65e70826d36584aba6e4e19e',
        name: 'FIG LIVING',
      },
    ],
    discountPercent: 19,
    images: [
      {
        id: 46598907986214,
        position: 1,
        width: 2000,
        height: 2000,
        src:
          'https://cdn.shopify.com/s/files/1/0809/7359/4918/files/DSC08266_1.jpg?v=1714293339',
      },
      {
        id: 46484906967334,
        position: 2,
        width: 3232,
        height: 3232,
        src:
          'https://cdn.shopify.com/s/files/1/0809/7359/4918/files/1D4A3014.jpg?v=1712990721',
      },
      {
        id: 46484907000102,
        position: 3,
        width: 3232,
        height: 3232,
        src:
          'https://cdn.shopify.com/s/files/1/0809/7359/4918/files/1D4A3015.jpg?v=1712990721',
      },
      {
        id: 46484907032870,
        position: 4,
        width: 2964,
        height: 2964,
        src:
          'https://cdn.shopify.com/s/files/1/0809/7359/4918/files/1D4A3021.jpg?v=1712990720',
      },
      {
        id: 46484907065638,
        position: 5,
        width: 2968,
        height: 2968,
        src:
          'https://cdn.shopify.com/s/files/1/0809/7359/4918/files/1D4A3022.jpg?v=1712990721',
      },
      {
        id: 46485101216038,
        position: 6,
        width: 2838,
        height: 2839,
        src:
          'https://cdn.shopify.com/s/files/1/0809/7359/4918/files/1D4A3018.jpg?v=1714293339',
      },
      {
        id: 46639213150502,
        position: 7,
        width: 3375,
        height: 3375,
        src:
          'https://cdn.shopify.com/s/files/1/0809/7359/4918/files/142.jpg?v=1713848528',
      },
      {
        id: 46639228420390,
        position: 8,
        width: 3375,
        height: 3375,
        src:
          'https://cdn.shopify.com/s/files/1/0809/7359/4918/files/138.jpg?v=1713848560',
      },
    ],
    vendor: 'Fig Living',
  },
  {
    id: '652f8237e983495d5454d8af',
    shopifyId: 7797344567434,
    title: 'Kullu Patti Single Dohar',
    MRP: {
      currency: 'INR',
      value: 2599,
    },
    price: {
      value: 2079,
      currency: 'INR',
    },
    brand: [
      {
        id: '6303a7ec82ad229d0daf005d',
        name: 'House This',
      },
    ],
    discountPercent: 20,
    images: [
      {
        id: 32994192949386,
        position: 1,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/files/DH1KLPYEWSNGS23_1.jpg?v=1697618908',
      },
      {
        id: 32994193473674,
        position: 2,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/files/DH1KLPYEWSNGS23_2.jpg?v=1697618910',
      },
      {
        id: 32994193145994,
        position: 3,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/files/DH1KLPYEWSNGS23_3.jpg?v=1697618909',
      },
      {
        id: 32994193047690,
        position: 4,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/files/DH1KLPYEWSNGS23_4.jpg?v=1697618909',
      },
      {
        id: 32994193309834,
        position: 5,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/files/DH1KLPYEWSNGS23_5.jpg?v=1697618909',
      },
      {
        id: 32994193408138,
        position: 6,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/files/DH1KLPYEWSNGS23_7.jpg?v=1697618909',
      },
      {
        id: 32994192982154,
        position: 7,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/files/DH1KLPYEWSNGS23_8.jpg?v=1697618908',
      },
    ],
    vendor: 'housethis',
  },
  {
    id: '65e722e617ecfb3a54e4bbe8',
    shopifyId: 6980686676020,
    title: 'Big Floral Bedsheet with Pillow Covers',
    MRP: {
      currency: 'INR',
      value: 2999,
    },
    price: {
      value: 2400,
      currency: 'INR',
    },
    brand: [
      {
        id: '65e57d913726edcc09f4209f',
        name: 'COTTON CURIO',
      },
    ],
    discountPercent: 20,
    images: [
      {
        id: 29945496895540,
        position: 1,
        width: 768,
        height: 1024,
        src:
          'https://cdn.shopify.com/s/files/1/0597/2023/7108/products/WhatsAppImage2022-11-08at5.40.46PM_2.jpg?v=1667910337',
      },
      {
        id: 29945497354292,
        position: 2,
        width: 768,
        height: 1024,
        src:
          'https://cdn.shopify.com/s/files/1/0597/2023/7108/products/WhatsAppImage2022-11-08at5.40.47PM_2.jpg?v=1667910338',
      },
    ],
    vendor: 'Cotton Curio',
  },
  {
    id: '64466f75eb0e9fcd67a5fb76',
    shopifyId: 8295397753063,
    title:
      'Pastel Yellow Polka Dots Quarter Plate - Hand Painted | Hand Textured |  Set of 1 | Ceramic | Ideal next to the dinner plate or serving snacks, small food items',
    MRP: {
      currency: 'INR',
      value: 580,
    },
    price: {
      value: 551,
      currency: 'INR',
    },
    brand: [
      {
        id: '64465dacdc8be537efd0cc83',
        name: 'PotteryDen',
      },
    ],
    discountPercent: 5,
    images: [
      {
        id: 40724171817191,
        position: 1,
        width: 1080,
        height: 1080,
        src:
          'https://cdn.shopify.com/s/files/1/0666/5535/5111/files/Pastel-Yellow-Polka-Dots-Quarter-Plate-Hand-Painted-Hand-Textured-Set-of-1-Ceramic-Ideal-next-to-the-dinner-plate-or-serving-snacks-small-food-items-PotteryDen-2905.jpg?v=1709507234',
      },
      {
        id: 40724171849959,
        position: 2,
        width: 1080,
        height: 1080,
        src:
          'https://cdn.shopify.com/s/files/1/0666/5535/5111/files/Pastel-Yellow-Polka-Dots-Quarter-Plate-Hand-Painted-Hand-Textured-Set-of-1-Ceramic-Ideal-next-to-the-dinner-plate-or-serving-snacks-small-food-items-PotteryDen-2456.jpg?v=1709507239',
      },
      {
        id: 40724172374247,
        position: 3,
        width: 1080,
        height: 1080,
        src:
          'https://cdn.shopify.com/s/files/1/0666/5535/5111/files/Pastel-Yellow-Polka-Dots-Quarter-Plate-Hand-Painted-Hand-Textured-Set-of-1-Ceramic-Ideal-next-to-the-dinner-plate-or-serving-snacks-small-food-items-PotteryDen-6254.jpg?v=1709507286',
      },
      {
        id: 40724172407015,
        position: 4,
        width: 1080,
        height: 1080,
        src:
          'https://cdn.shopify.com/s/files/1/0666/5535/5111/files/Pastel-Yellow-Polka-Dots-Quarter-Plate-Hand-Painted-Hand-Textured-Set-of-1-Ceramic-Ideal-next-to-the-dinner-plate-or-serving-snacks-small-food-items-PotteryDen-7165.jpg?v=1709507312',
      },
    ],
    vendor: 'PotteryDen',
  },
  {
    id: '6349413c29b251d1ff8165dc',
    shopifyId: 7550934515850,
    title: 'Jacana Pink Cushion Cover',
    MRP: {
      currency: 'INR',
      value: 549,
    },
    price: {
      value: 494,
      currency: 'INR',
    },
    brand: [
      {
        id: '6303a7ec82ad229d0daf005d',
        name: 'House This',
      },
    ],
    discountPercent: 10,
    images: [
      {
        id: 33943833510026,
        position: 1,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/files/CC1JCNPIKMEDA21_1_jpg.jpg?v=1709197660',
      },
      {
        id: 30982250856586,
        position: 2,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/products/CC1JCNPIKMEDA21_2.jpg?v=1709197660',
      },
      {
        id: 30982250889354,
        position: 3,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/products/CC1JCNPIKMEDA21_3.jpg?v=1709197660',
      },
      {
        id: 30982250823818,
        position: 4,
        width: 1080,
        height: 1440,
        src:
          'https://cdn.shopify.com/s/files/1/0334/2781/6586/products/CC1JCNPIKMEDA21_1.jpg?v=1709197660',
      },
    ],
    vendor: 'housethis',
  },
  {
    id: '65e7234817ecfb3a54e4c76e',
    shopifyId: 7239891877940,
    title: 'Aqua Marine Napkins & Placemats',
    MRP: {
      currency: 'INR',
      value: 699,
    },
    price: {
      value: 664,
      currency: 'INR',
    },
    brand: [
      {
        id: '65e57d913726edcc09f4209f',
        name: 'COTTON CURIO',
      },
    ],
    discountPercent: 5,
    images: [
      {
        id: 31302157697076,
        position: 1,
        width: 1500,
        height: 1126,
        src:
          'https://cdn.shopify.com/s/files/1/0597/2023/7108/files/image00003_7c5edeba-6850-4aae-83ca-0fbacc5503a3.jpg?v=1706980661',
      },
      {
        id: 31302157664308,
        position: 2,
        width: 1500,
        height: 1126,
        src:
          'https://cdn.shopify.com/s/files/1/0597/2023/7108/files/image00005_2d5bc4f2-f9c7-47a8-83ea-56f2d199fa0e.jpg?v=1706980661',
      },
      {
        id: 31302157631540,
        position: 3,
        width: 1500,
        height: 1126,
        src:
          'https://cdn.shopify.com/s/files/1/0597/2023/7108/files/image00007_8698faf3-6955-4384-82ba-25a1f7bff7ee.jpg?v=1706980661',
      },
    ],
    vendor: 'Cotton Curio',
  },
  {
    id: '6561d32f54ac6d36fe09b60f',
    shopifyId: 7194654146620,
    title:
      'Decorative Glass Vase for Flowers Home Decor Kitchen Living Room Bedroom Flowers Plants Office Dining Table Centerpiece Birthday Wedding Decoration Items - White Face Vase',
    MRP: {
      currency: 'INR',
      value: 599,
    },
    price: {
      value: 569,
      currency: 'INR',
    },
    brand: [
      {
        id: '655c7257a5281e9d8d3e861d',
        name: 'Gathari',
      },
    ],
    discountPercent: 5,
    images: [
      {
        id: 32976387604540,
        position: 1,
        width: 4446,
        height: 4446,
        src:
          'https://cdn.shopify.com/s/files/1/0586/5684/9980/files/IMG_1829.jpg?v=1699375249',
      },
      {
        id: 32976387571772,
        position: 2,
        width: 4082,
        height: 4082,
        src:
          'https://cdn.shopify.com/s/files/1/0586/5684/9980/files/IMG_1828.jpg?v=1699375249',
      },
      {
        id: 32976387539004,
        position: 3,
        width: 3414,
        height: 3414,
        src:
          'https://cdn.shopify.com/s/files/1/0586/5684/9980/files/IMG_1833.jpg?v=1699375249',
      },
      {
        id: 32976387637308,
        position: 4,
        width: 4460,
        height: 4460,
        src:
          'https://cdn.shopify.com/s/files/1/0586/5684/9980/files/IMG_1830.jpg?v=1699375249',
      },
    ],
    vendor: 'Gathari',
  },
  {
    id: '65f971997fb7195ffac81cf5',
    shopifyId: 6818074755181,
    title: 'The RBG Katran Hand-woven Basket',
    MRP: {
      currency: 'INR',
      value: 1299,
    },
    price: {
      value: 1234,
      currency: 'INR',
    },
    brand: [
      {
        id: '65f92c6b295c4a93ecf70a6a',
        name: 'Itihasikala',
      },
    ],
    discountPercent: 5,
    images: [
      {
        id: 29182321328237,
        position: 1,
        width: 2989,
        height: 2989,
        src:
          'https://cdn.shopify.com/s/files/1/0270/3907/2365/products/redgreenwhitebox_1_-Copy.jpg?v=1654449932',
      },
      {
        id: 29182321492077,
        position: 2,
        width: 4000,
        height: 4000,
        src:
          'https://cdn.shopify.com/s/files/1/0270/3907/2365/products/redgreenwhitebox_3.jpg?v=1654449940',
      },
      {
        id: 29182321393773,
        position: 3,
        width: 4000,
        height: 4000,
        src:
          'https://cdn.shopify.com/s/files/1/0270/3907/2365/products/redgreenwhitebox_2.jpg?v=1654449940',
      },
      {
        id: 29182321459309,
        position: 4,
        width: 4000,
        height: 4000,
        src:
          'https://cdn.shopify.com/s/files/1/0270/3907/2365/products/redgreenwhitebox_4.jpg?v=1654449892',
      },
    ],
    vendor: 'Itihasikala',
  },
]

class ProductsListPage extends Component {
  render() {
    return (
      <div className="productslist-container">
        <Navbar />
        <img
          src="https://cdn.furrl.in/vibes/VibeCard_HomeHunts.jpg"
          alt="homehunts"
          className="homehunts-logo"
        />
        <div className="product-bar">
          <button type="button" className="product-button">
            Products
          </button>
        </div>
        <p className="total-products">192 Products</p>
        <div className="type-buttons">
          <button type="button" className="category-button">
            All
          </button>
          <button type="button" className="category-button2">
            Home
          </button>
          <button type="button" className="category-button2">
            Apparel
          </button>
          <button type="button" className="category-button2">
            Accessories
          </button>
        </div>
        <ul>
          {products.map(each => (
            <EachProduct productDetails={each} key={each.brand.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default ProductsListPage
