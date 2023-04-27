import './App.scss';
import Navbar from './components/Navgation';
import Hero from './components/Hero';
import CenteredButton from './components/CenteredButton';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import posts from './data/posts';
import Institutional from './components/Institutional';
import Faq from './components/Faq';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <CreditCard/>
      <CardList posts={posts}/>
      <CenteredButton/>
      <Institutional/>
      <Faq/>
    </div>
  );
}

export default App;
