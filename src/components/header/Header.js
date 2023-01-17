const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src="https://cdn.dribbble.com/users/7358993/screenshots/15348481/food_court_byswhk.png" />
      </div>
      <div className="nav-container">
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Delivery</li>
          <li>Dine In</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
