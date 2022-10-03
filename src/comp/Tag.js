function Tag(params) {
    return(
        <div className="p-[2px] rounded-sm bg-background w-fit">
            <p className="text-foreground px-2 py-1">{params.text}</p>
        </div>
    )
};

export default Tag;