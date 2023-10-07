import PillBtn from "./PillBtn";

function PrintMenu() {
  return (
    <div id="printMenu">
      <h1 id="printMenuTitle">Print Menu</h1>
      <p id="printMenuDesc">
        Meet Chef Dami, our culinary virtuoso with a passion for crafting
        extraordinary specials. With an artful blend of tradition and
        innovation, Chef Dami creates captivating dishes that redefine the
        essence of Nigerian cuisine.
      </p>
      <div className="printMenuBtns">
        <PillBtn text="Full Menu" color="white" bgcolor="#ff5709" btncolor="#ef4f08"/>
      <PillBtn text="catering Menu" color="black" bgcolor="white" btncolor="white"/>
      </div>
      
    </div>
  );
}

export default PrintMenu;
