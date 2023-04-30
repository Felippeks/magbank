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
import PecaModal from './components/SolicitacaoModal';
import { useState } from 'react';





function App() {
  const [ShowModal, SetShowModal] = useState(false);

  const [SolicitaModal, setSolicitaModal] = useState(false);

  return (
    <div className="App">
      <Navbar handleCreateAccount={() => SetShowModal(true)}/>
      <Hero handleCreateAccount={() => SetShowModal(true)}/>
      <CreditCard/>
      <CardList posts={posts} handCreateAccount={() => setSolicitaModal(true)}/>
      <PecaModal show={SolicitaModal} handClose={() => setSolicitaModal(false)}/>
      <CenteredButton handleCreateAccount={() => SetShowModal(true)}/>
      <Institutional handleCreateAccount={() => SetShowModal(true)}/>
      <Fac/>
      <AccountModal show={ShowModal} handleClose={() => SetShowModal(false)}/>
      <Footer/>
    </div>
  );
}

export default App;
