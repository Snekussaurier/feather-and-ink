function EffectTag(params) {
    return(
        <div className="p-[2px] rounded-sm bg-background">
            <p className="font-medium text-sm bg-gradient-to-br from-yellow to-pink bg-clip-text text-transparent">{params.text}</p>
        </div>
    )
};

export default EffectTag;