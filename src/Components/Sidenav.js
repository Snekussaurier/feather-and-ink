
function Sidenav() {
  return (
    <div className="h-screen absolute bg-background-dark w-[260px] px-9 py-6 flex flex-col items-center gap-9">
        <div className="flex flex-row items-start gap-5">
            <div className=" w-[62px] h-[62px] bg-cyan"/>
            <h1 className=" text-2xl font-mono font-bold bg-gradient-to-br from-cyan to-purple bg-clip-text text-transparent">
                Feather and Ink
            </h1>
        </div>
        <hr className="border-1 border-current-line w-full"/>
    </div>
  );
}

export default Sidenav;
