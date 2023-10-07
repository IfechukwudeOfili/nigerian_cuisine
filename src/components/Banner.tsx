import PillBtn from "./PillBtn";
import woman from "../assets/woman.png"
export default function Banner() {
  return (
    <div id="banner">
      <div className="bannerText">
        <h1>
          Welcome to <br /> Nigerian Cuisine
        </h1>
        <div className="caption">
          <p>Embark on a Culinary Journey Through the Heart of Africa</p>
          <p>Indulge in the Exquisite Flavors of Nigeria's Diverse Cuisine</p>
          <p>
            Explore a Vibrant Tapestry of Spices, Aromas, and Cultural Delights
          </p>
        </div>
        <div className="bannerBtns">
          <PillBtn text="Order Now" bgcolor="#008751" btncolor="green" color="white"/>
          <PillBtn text="Menu" bgcolor="#f9f9f9" btncolor="white" color="black"/>

        </div>
      </div>
      <div className="bannerImg">
          <img src={woman} alt="african woman silhouette" />
      </div>
    </div>
  );
}
