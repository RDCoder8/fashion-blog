import './App.css';
import { useState } from 'react';
import Articles from './components/Articles';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [articleData, setArticleData] = useState([{
    datetime:"2020-11-12",
    date:"11/12/20",
    title:"On the Street in Brooklyn",
    image:"./images/blog-image-1.jpg",
    alt:"Photo of woman leaning against a wall on the sidewalk",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sapiente, harum quod deleniti nobis vitae amet, sed reprehenderit minima cupiditate tempore, porro impedit. Nesciunt corporis tempora voluptate, ex possimus explicabo."
  },
  {
    datetime:"2020-11-11",
    date:"11/11/20",
    title:"Vintage in Vogue",
    image:"./images/blog-image-2.jpg",
    alt:"Three people shown from the shoulders up looking in different directions",
    text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, accusamus necessitatibus veritatis praesentium possimus voluptates. Eum provident aperiam, minima in, voluptatem eligendi totam perspiciatis inventore culpa, dignissimos magni iure ad."
  }
])
  return (
    <div className="App">
      <Header />
      <main><Articles articleData={articleData} /></main>
      <Footer />
    </div>
  );
}

export default App;
