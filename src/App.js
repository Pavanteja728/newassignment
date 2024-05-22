import {Route, Switch} from 'react-router-dom'

import ProductsListPage from './components/ProductsListPage'
import WishList from './components/WishList'
import Cart from './components/Cart'
import Notfound from './components/Notfound'
import SpecificProductDetails from './components/SpecificProductDetails'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={ProductsListPage} />
    <Route exact path="/wishlist" component={WishList} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/specificProduct" component={SpecificProductDetails} />
    <Route component={Notfound} />
  </Switch>
)

export default App
