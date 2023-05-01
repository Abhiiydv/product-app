import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './Components/FunctionalComponent';
import ClassComponent from './Components/ClassComponent';
import PropsComponent from './Components/PropsComponent';
import AddContact from './Components/Phonebook/AddContact';
import ContactList from './Components/Phonebook/ContactList';
import Phonebook from './Components/Phonebook/Phonebook';

import "F:/React-Tutorials/my-app/node_modules/bootstrap/dist/css/bootstrap.css";
import HooksComponent from './Components/HooksComponent';
import Product from './Components/Product';


function App() {
  return (
    <div className='container' style={{backgroundColor: '#300247', color: 'white'}}>
    
    {
    /*
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<FunctionalComponent></FunctionalComponent>
<ClassComponent></ClassComponent>
<PropsComponent name="Abhishek"  age="21"></PropsComponent>
    
   */ }


    <div style={{backgroundColor: '#300247', color: 'white'}} >
      
    <Product></Product>
    </div>
  </div>
  )
}

export default App;


