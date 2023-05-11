
import Hero from '../components/Hero';
import CenteredButton from '../components/CenteredButton';
import CreditCard from '../components/CreditCard';
import CardList from '../components/CardList';
import posts from '../data/posts';
import Institutional from '../components/Institutional';
import Fac from '../components/Fac';
import PecaModal from '../components/SolicitacaoModal';
import AccountModal from '../components/AccountModal';
import { useState } from 'react';


const Home = () => {
    const [ShowModal, SetShowModal] = useState(false)
    
    const [SolicitaModal, setSolicitaModal] = useState(false);
  return (
    <>
      <Hero handleCreateAccount={() => SetShowModal(true)} />
      <CreditCard />
      <CardList posts={posts} handCreateAccount={() => setSolicitaModal(true)}/>
      <CenteredButton handleCreateAccount={() => SetShowModal(true)} />
      <Institutional handleCreateAccount={() => SetShowModal(true)} />
      <Fac/>
      <AccountModal show={ShowModal} handleClose={() => SetShowModal(false)}/>
      <PecaModal show={SolicitaModal} handClose={() => setSolicitaModal(false)}/>
      </>
  );
};


export default Home;