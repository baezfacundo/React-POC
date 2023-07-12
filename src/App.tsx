import './App.css';
import CardComp from './components/Card.tsx';
import Hero from './components/Hero.tsx';
import NavBar from './components/NavBar';
import Cards from '../public/data.ts';
import { Card } from './models/Card.tsx';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <section className='card-list'>
        {Cards.map((card: Card) => (
          <CardComp card={card} key={card.id} />
        ))}
      </section>
    </div>
  );
}

export default App;
