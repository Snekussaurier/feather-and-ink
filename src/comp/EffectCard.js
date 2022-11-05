import EffectIcon from "../res/concentration-orb.svg"
import { ReactSVG } from "react-svg";

function EffectCard(params) {
    return(                
        <div className="min-w-[270px] flex-grow bg-background-very-dark border border-purple transition-all">
            <div className="bg-purple p-2">
                <h2 className="text-background-very-dark text-2xl">Priesterlicher Schutz</h2> 
            </div>
            <div className="bg-background p-2 flex flex-col relative overflow-hidden">
                <h2>Dauerhafter Effekt</h2> 
                <div className="h-5"/>
                <h3>
                    ARM
                </h3>
                <h2 className='text-4xl'>
                    +1
                </h2>
                <ReactSVG src={EffectIcon} className='fill-purple absolute h-36 w-36 -right-4 -bottom-8'/>
            </div>
            <div className="flex flex-col p-2 w-full">
                <h3 className="italic">
                    Die erhobene, gereckte oder geballte Faust ist ein Symbol verschiedener sozialer Bewegungen und dient als Zeichen von Solidarität, Stärke oder Widerstand.
                </h3>
            </div>
        </div>
    );
}

export default EffectCard;