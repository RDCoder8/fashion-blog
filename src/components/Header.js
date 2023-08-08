import {useState} from 'react'
import Nav from './Nav'
export default function Header(props) {
    const [links, setLinks] = useState(["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"])
    return (<header>
        <h1>Sarte's List</h1>
        <h2>Better-Dressed People</h2>
        <Nav links={links} navClass="top-nav"/>
      </header>)
}