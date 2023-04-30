import './App.scss';
import Navbar from './components/Navgation';
import Hero from './components/Hero';
import CenteredButton from './components/CenteredButton';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import posts from './data/posts';
import Institutional from './components/Institutional';
import Fac from './components/Fac';
import AccountModal from './components/AccountModal'
import Footer from './components/Footer';
import { useState } from 'react';





function App() {
  const [ShowModal, setSetShowModal] = useState(false);

  return (
    <div className="App">
      <Navbar handleCreateAccount={() => setSetShowModal(true)}/>
      <Hero handleCreateAccount={() => setSetShowModal(true)}/>
      <CreditCard/>
      <CardList posts={posts}/>
      <CenteredButton handleCreateAccount={() => setSetShowModal(true)}/>
      <Institutional/>
      <Fac/>
      <AccountModal show={ShowModal} handleClose={() => setSetShowModal(false)}/>
      <Footer/>
    </div>
  );
}

export default App;
