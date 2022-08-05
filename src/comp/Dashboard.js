function Dashboard(params) {
    return (<div className="flex flex-col gap-5 pt-9">
        <div className="border-b-4 w-[195px] border-purple pb-2 ml-9">
            <h1 className=" text-4xl text-foreground font-mono font-semibold">Dashboard</h1>
        </div>
        <h5 className=" text-base text-foreground text-mono ml-9">CHARACTER CARDS</h5>
        <div className="max-w-full overflow-x-auto cursor-grab overflow-cl">
            <div className="flex items-start flex-row gap-4 mx-9">
                <div className="p-[2px] rounded-lg min-w-[260px] h-[370px] bg-gradient-to-br from-purple to-cyan">
                    <div className=" flex flex-col justify-between h-full bg-background-dark text-white rounded-lg p-4">

                    </div>
                </div>
            </div>
        </div>
        <h5 className=" text-base text-foreground text-mono ml-9">ACTIVE GEAR CARDS</h5>
        <div className="max-w-full overflow-x-auto cursor-grab ">
            <div className="flex items-start flex-row gap-4 mx-9">
                <div className="p-[2px] rounded-lg min-w-[260px] h-[370px] bg-gradient-to-br from-orange to-pink ">
                    <div className=" flex flex-col justify-between h-full bg-background-dark text-white rounded-lg p-4">
                
                    </div>
                </div>
                <div className="p-[2px] rounded-lg min-w-[260px] h-[370px] bg-gradient-to-br from-cyan to-green">
                    <div className=" flex flex-col justify-between h-full bg-background-dark text-white rounded-lg p-4">
                
                    </div>
                </div>
            </div>
        </div>
        <h5 className=" text-base text-foreground text-mono ml-9">EFFECT CARDS</h5>
        <div className="max-w-full overflow-x-auto cursor-grab">
            <div className="flex items-start flex-row gap-4 mx-9">
                <div className="p-[2px] rounded-lg min-w-[260px] h-[370px] bg-gradient-to-br from-pink to-purple">
                    <div className=" flex flex-col justify-between h-full bg-background-dark text-white rounded-lg p-4">
                
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Dashboard;