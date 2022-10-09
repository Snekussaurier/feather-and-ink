function SidenavButton(params) {
    return(
        <div>
            <input type="radio" id={params.character.id} name="selected_character" value={params.character.id} className="peer hidden"/>
            <label htmlFor={params.character.id} className="w-full px-4 bg-[url('../src/res/background-illustration-1.jpg')] h-20 bg-cover flex flex-row items-center gap-4 border border-foreground-highlight peer-checked:grayscale-0 peer-hover:grayscale-0 grayscale transition-all cursor-pointer duration-300 overflow-hidden">
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