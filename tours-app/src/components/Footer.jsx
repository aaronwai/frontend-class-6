import PageLinks from "./PageLinks.jsx"
import SocialLinks from "./SocialLinks.jsx"
const Footer = () => {
  return (
     <footer className="section footer">
         <PageLinks groupClass="footer-list" />
    <SocialLinks groupClass="footer-icons" listItemClass="footer-icon" />
<p className="copyright">copyright &copy; backroads travel tours company <span id="date">{new Date().getFullYear()}</span>. all rights reserved</p>
    </footer>
  )
}

export default Footer