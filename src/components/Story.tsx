import egusi from "../assets/bigegusi.png"

export default function Story(){

    return(
        <div id="ourStory" style={{backgroundColor: "rgb(98 21 16)"}}>
            <div id="ourStoryImg">
                <img src={egusi} alt="egusi" />
            </div>
            <div id="ourStoryText">
                <h1>Our Story</h1>
                <p>Our story starts with a deep love for the vibrant and diverse culinary landscape of Nigeria. From the bustling markets of Lagos to the remote villages of the Niger Delta, our founders set out to capture the essence of Nigerian cuisine and share it with the world.</p>
            </div>
        </div>
    )
}