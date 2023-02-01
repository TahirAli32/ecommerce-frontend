import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'


const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
)

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
    ]
  }
])

export default function App() {
  return (
    <RouterProvider  router={router} />
  )
}
