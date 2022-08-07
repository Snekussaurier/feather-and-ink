import ScrollContainer from "react-indiana-drag-scroll";

function Dashboard(params) {
    return (
        <div className="flex flex-col gap-5 p-9 items-start">
            <div className="border-b-4 border-purple pb-2">
                <h1 className=" text-4xl text-foreground font-mono font-semibold">Dashboard</h1>
            </div>
            <ScrollContainer className="overflow-x-scroll overflow-y-hidden w-[calc(100%+72px)] flex flex-row items-start gap-4 mx-[-36px] px-9">
                <div className=" h-[370px] min-w-[260px] bg-cyan">

                </div>
                <div className=" h-[370px] min-w-[260px] bg-cyan">

                </div>
                <div className=" h-[370px] min-w-[260px] bg-cyan">

                </div>
                <div className=" h-[370px] min-w-[260px] bg-cyan">

                </div>
                <div className=" h-[370px] min-w-[260px] bg-cyan">

                </div>
            </ScrollContainer>
        </div>
    );
}

export default Dashboard;