function SidenavButton(params) {
    let backgroundImage;
    if(params.character.character_background !== undefined) backgroundImage = require('../res/background-illustration-' + params.character.character_background + '.jpg');
    else backgroundImage = require('../res/background-illustration-' + 1 + '.jpg');
    return(
        <div>
            <input type="radio" id={params.character.id} name="selected_character" value={params.character.id} className="peer hidden"/>
            <label htmlFor={params.character.id} className="w-full px-4 h-20 bg-cover flex flex-row items-center gap-4 border border-foreground-highlight peer-checked:grayscale-0 peer-hover:grayscale-0 grayscale transition-all cursor-pointer duration-300 overflow-hidden" style={{backgroundImage: `linear-gradient(to right, rgba(14, 15, 33, 0), rgba(14, 15, 33, 0.75)), url(${backgroundImage})`}}>
                <div className="h-full object-top aspect-square bg-cover">
                    <img src={`data:image/png;base64,${params.character.character_image}`} className=" scale-150 origin-top"/>
                </div>
                <h1>
                    {params.character.name}
                </h1>
            </label>
        </div>
    );
}
export default SidenavButton;