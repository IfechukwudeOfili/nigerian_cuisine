import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Search from "./Search";
import Cart from "./Cart";
function Header() {
  return (
    <div className="header">
      <div className="leftHeader">
        <Logo />
        <NavLinks />
      </div>
      <div className="rightHeader">
        <Search />
        <Cart />
      </div>
    </div>
  );
}

export default Header;
