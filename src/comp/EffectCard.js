import EffectTag from "./EffectTag";

function EffectCard(params) {
    return(                
        <div className="h-[300px] min-w-[270px] flex-grow bg-background-very-dark border border-purple">
            <div className="bg-purple p-2">
                <h2 className="text-background-very-dark">Priesterlicher Schutz</h2>
            </div>
            <div className="flex flex-col p-2 w-full">
                <div className="grid grid-cols-2 grid-flow-row-dense justify-between w-full">
                    <h3>Rüstungswert</h3>
                    <h2 className="text-right">+1</h2>
                </div>
                <hr className=" border-purple my-2"/>
                <h2>Info</h2>
                <h3>
                    Test
                </h3>
            </div>
        </div>
    );
}

export default EffectCard;