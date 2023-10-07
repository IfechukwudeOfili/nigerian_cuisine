
interface PillBtnProps {
  text: string;
  bgcolor: string;
  btncolor: string;
  color: string;
}

function PillBtn(props: PillBtnProps){
    return(
        <div className="pillButton" style={{backgroundColor: props.bgcolor, color: props.color}}>
            <p>{props.text}</p>
            <button className="roundButton" style={{backgroundColor: props.btncolor, color: props.color}}><i className="fa-solid fa-arrow-right" ></i></button>
        </div>
    )
}

export default PillBtn