function AddWeaponForm(params) {
    return(
        <div className=" fixed w-full h-screen flex items-center justify-center top-0 left-0 backdrop-blur-md pl-[260px]">
            <div className="max-h-[860px] w-96 rounded-md bg-gradient-to-br p-[2px] from-yellow to-pink relative">
                <div className="flex flex-col h-full rounded-md bg-background-dark p-5 items-start gap-5">
                    <div className="border-b-4 border-yellow pb-2">
                        <h1 className=" text-3xl text-foreground font-semibold">Equip weapon</h1>
                    </div>
                    <h3 className=" text-foreground font-medium">WEAPON</h3>
                </div>
            </div>
        </div>
    );
}

export default AddWeaponForm