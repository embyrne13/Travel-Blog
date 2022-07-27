import { Link } from 'react-router-dom'
const url = require('../components/TravelBlogLogo.jpg')
const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src={url} alt=""></img>
      </Link>
    </footer>
  )
}
export default Footer
