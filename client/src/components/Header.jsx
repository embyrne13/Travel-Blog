import { Link } from 'react-router-dom'
// const url = require('../components/Travel.jpg')

const Header = () => {
  return (
    <header>
      <Link to="/">
        {<h1 className="title"> hi ✈️ EMILY'S TRAVEL TIPS ✈️</h1>}
      </Link>
      <nav>
        <Link className="yo" to="/aboutme">
          About Me
        </Link>
        <Link to="/contactme"> Contact Me </Link>
      </nav>
    </header>
  )
}
export default Header
