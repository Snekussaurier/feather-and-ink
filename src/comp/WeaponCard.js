import WeaponTag from "./WeaponTag";

function WeaponCard(params) {
    return(                
        <div className="h-[370px] min-w-[270px] flex-grow bg-background-very-dark border border-pink transition-all">
            <div className="bg-pink p-2"><h2 className="text-background-very-dark">Test</h2> <h3 className="text-background-very-dark">Belagerungs-/ Kriegswaffe</h3></div>
                <div className="flex flex-col p-2 w-full">
                    <div className="grid grid-cols-2 grid-flow-row-dense justify-between w-full">
                        <h3>Initiative</h3>
                        <h2>+2</h2>
                        <h3>Kampfbonus</h3>
                        <h2>+3</h2>
                        <h3>Angriffsbonus</h3>
                        <h2>+1</h2>
                        <h3>Defensivbonus</h3>
                        <h2>0</h2>
                        <h3>Schaden</h3>
                        <h2>0</h2>
                    </div>
                    <hr className=" border-pink my-2"/>
                    <h2>Info</h2>
                    <h3>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                    </h3>
                </div>
        </div>
    );
}

export default WeaponCard;