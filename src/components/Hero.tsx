import heroImg from './img/hero.png';

export default function Hero() {
  return (
    <section className='hero'>
      <img src={heroImg} alt='Hero Image' className='heroImg' />
      <h1 className='heroTitle'>Online Experiences</h1>
      <p className='heroDesc'>
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving
        home
      </p>
    </section>
  );
}
