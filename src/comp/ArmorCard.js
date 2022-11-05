import ArmorIcon from "../res/closed-barbute.svg"
import { ReactSVG } from "react-svg";

function ArmorCard(params) {

    const getPrefix = (value) => {
        if(value > 0){
            return '+' + value;
        }    
        else{
            return value;
        }
    }
    return (
        <div className="min-w-[270px] flex-grow bg-background-very-dark border border-green transition-all">
            <div className="bg-green p-2">
                <h2 className="text-background-very-dark text-2xl">{params.armor.name}</h2> 
            </div>
            <div className="bg-background p-2 flex flex-col relative overflow-hidden">
                <h2>{params.armor.armor_group}</h2> 
                <div className="h-5"/>
                <h3>
                    ARM
                </h3>
                <h2 className='text-4xl'>
                    {getPrefix(params.armor.value)}
                </h2>
                <ReactSVG src={ArmorIcon} className='fill-green absolute h-36 w-36 -right-4 -bottom-8'/>
            </div>
            <div className="flex flex-col p-2 w-full">
                <h3 className="italic">
                    {params.armor.description}
                </h3>
            </div>
        </div>
    )
}

export default ArmorCard