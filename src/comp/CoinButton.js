import CollapseIcon from "../res/caret-left.svg"
import { ReactSVG } from "react-svg";

const CoinButton = (props) => {

    const incrementFunction = (currency) => {
        props.setCharacter({ ...props.character, [currency]: props.character[currency] + 1 });
    }
    const decrementFunction = (currency) => {
        if(props.character[currency] > 0)
            props.setCharacter({ ...props.character, [currency]: props.character[currency] - 1 });
    }

    return (
        <div className="backdrop-blur-md border border-foreground-highlight p-5 flex flex-row items-center w-full justify-between">
            <div className="flex-col items-center justify-center">
                <h3>{props.name}</h3>
                <h1 className=" text-foreground font-sans text-5xl">{props.character[props.currency]}</h1>
            </div>
            <div className="flex flex-col gap-2">
                <button className="h-7 w-7 bg-background-very-dark border border-current-line" onClick={() => incrementFunction(props.currency)}>
                    <ReactSVG src={CollapseIcon} className='fill-foreground rotate-90'/>
                </button>
                <hr className=" w-full border-foreground-highlight"/>
                <button className="h-7 w-7 bg-background-very-dark border border-current-line" onClick={() => decrementFunction(props.currency)}>
                    <ReactSVG src={CollapseIcon} className='fill-foreground -rotate-90'/>
                </button>
            </div>
        </div>
    );
};


export default CoinButton;