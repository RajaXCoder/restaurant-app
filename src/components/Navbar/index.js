import {AiOutlineShoppingCart} from 'react-icons/ai'

import './style.css'

const Navbar = () => (
  <nav className="nav-container">
    <ul>
      <li>
        <h1>UNI Resto Cafe</h1>
      </li>
      <li>
        <p>My Orders</p>
        <AiOutlineShoppingCart size={22} />
      </li>
    </ul>
  </nav>
)

export default Navbar
