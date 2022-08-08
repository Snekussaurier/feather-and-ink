function Tag(params) {
    return(
        <div className="p-[2px] rounded-sm bg-background">
            <p className="font-medium text-sm font-mono bg-gradient-to-br from-purple to-cyan bg-clip-text text-transparent">{params.text}</p>
        </div>
    )
};

export default Tag;