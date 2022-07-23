import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/aboutme"> About Me</Link>
        <Link to="/contactme"> Contact Me </Link>
      </nav>
    </header>
  )
}
export default Header
