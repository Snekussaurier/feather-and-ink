function CharacterSelect(params) {
    let backgroundImage;
    if(params.character.character_background !== undefined) backgroundImage = require('../res/background-illustration-' + params.character.character_background + '.jpg');
    else backgroundImage = require('../res/background-illustration-' + 1 + '.jpg');

    const levelCalculation = () => {
        if (params.character.current_exp >= 1000) return Math.floor((-1000+Math.sqrt(8000*params.character.current_exp+17000000))/2000);
        return 1;
    }

    return(
        <div>
            <input type="radio" id={params.character.id} name="selected_character" value={params.character.id} className="peer hidden"/>
            <label htmlFor={params.character.id} className="w-full px-4 h-20 peer-checked:h-24 bg-cover flex flex-row items-center gap-4 peer-checked:grayscale-0 peer-hover:grayscale-0 grayscale transition-all cursor-pointer duration-300 overflow-hidden" style={{backgroundImage: `linear-gradient(to bottom, rgba(14, 15, 33, 0), rgba(14, 15, 33, 0.0)), url(${backgroundImage})`}}>
                <div className="h-full object-top aspect-square bg-cover">
                    <img src={`data:image/png;base64,${params.character.character_image}`} className=" scale-150 origin-top" alt=""/>
                </div>
                <div className="flex flex-col">
                    <h1>
                        {params.character.name}
                    </h1>
                    <h3 className="text-foreground">
                        {params.character.profession}
                    </h3>
                </div>
                <div className="flex-1"/>
                <h1 className="text-cyan text-2xl">{levelCalculation()}</h1>
            </label>
        </div>
    );
}
export default CharacterSelect;