export function Header() {
    return (
        <div className="lg:max-w-2xl lg:bg-red-600 ">

        <div className="text-center mb-4">
            <span className="text-md font-bold text-gray-800 text-center mx-auto">Calculadora de taxas</span>
            </div>
            <div className=" flex flex-col items-center justify-center bg-blue-600 w-full px-8 py-6 rounded-2xl">
                <span className="text-base mb-4">Valor</span>
                <div className="border-b">
                    <p className="text-4xl pb-1"><span className="font-semibold" >R$</span> 1.208,50</p>
                </div>
                <div className="bg-slate-900 rounded-full mt-4 px-6 py-1.5">
                    <span classname="font-bold">Repassar taxa</span>
                </div>
            </div>
        </div>

    )
}