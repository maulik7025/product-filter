import { Route, Routes } from 'react-router'
import './App.css'
import Product from './Product'
import RootLayout from './layout/RootLayout'
import ProductLayout from './layout/ProductLayout'
// import About from './About'
import Home from './Home'
import ProductDetail from './component/ProductDetail'
import appStore from './utils/appStore'
import { Provider } from 'react-redux'
import Cart from './Cart'
// import ProductLayout from './layout/ProductLayout'


function App() {

  return ( 
    <Provider store={appStore}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          <Route path='/cart' element={<Cart/>}></Route>
        </Route>
        
      </Routes>
      </Provider>
  )
}

export default App
