import Nav from "./Nav"
import { useState } from "react"

export default function Footer(props) {
    const [links, setLinks] = useState(["Home","Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About", "Tips"])
    return (<footer>
        <Nav links={links} navClass={'bottom-nav'}/>
          <small>&copy; 2013 Valet Industries, Inc</small>
    </footer>)
}