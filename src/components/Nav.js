
export default function Nav(props) {
  const links = props.links
    return (<nav role="navigation" aria-label="Main Navigation">
      <ul className={`nav-list ${props.navClass}`}>
                {links.map(link => <li><a href="#">{link}</a></li>)}
            </ul>
  </nav>)
}