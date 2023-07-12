import logo from './img/logo.svg';

export default function NavBar() {
  return (
    <nav className='nav-bar'>
      <img src={logo} alt='airbnb logo' className='nav-logo' />
    </nav>
  );
}
