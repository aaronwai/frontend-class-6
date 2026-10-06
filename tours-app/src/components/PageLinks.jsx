import { pageLinks } from '../../data';

const PageLinks = ({ groupClass }) => {
  return (
    <ul className={groupClass}>
        {pageLinks.map((link) => {
            return (
             <li><a key={link.id} href={link.href}>{link.text}</a></li>
        )})}
   
</ul>
  )
}

export default PageLinks;