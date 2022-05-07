import './App.css';
import Header from './/components/Header';
import Navigation from './/components/Navigation';
import Project from './/components/Project';
import Contact from './/components/ContactForm';
import Footer from './/components/Footer';
import Resume from './/components/Resume';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';

function App() {
  
const pages=["About", "Work", "Contact Me", "Resume"]
const [page, setPage] = useState(pages[0])
  return (
    <div className="App">

<Navigation pages={pages} page={page} setPage={setPage} />
{page==="About"? <Header /> :null}
{page==="Work"? <Project /> :null}
{page==="Contact Me"? <Contact /> :null}
{page==="Resume"? <Resume /> :null}
  <div class='light x1'></div>
  <div class='light x2'></div>
  <div class='light x3'></div>
  <div class='light x4'></div>
  <div class='light x5'></div>
  <div class='light x6'></div>
  <div class='light x7'></div>
  <div class='light x8'></div>
  <div class='light x9'></div>
    
    <Footer/></div>
  );
}

export default App;