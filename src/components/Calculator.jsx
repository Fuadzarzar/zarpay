export function Calculator() {
    return (
        <>
            <form action="#" className="w-full flex flex-col gap-5 bg-slate-50 rounded-2xl px-5 py-6">

                <div>
                    <label htmlFor="sell-type" className="text-black font-medium text-sm block mb-3">Escolha o tipo de venda
                    </label>
                    <select name="sell-type" id="sell-type" className="px-4 py-3 w-full rounded-lg bg-transparent border-2 text-gray-400 text-sm">
                        <option value="Teste">zarpay Maquininha
                        </option>
                        <option value="Teste">zarpay Link
                        </option>
                        <option value="Teste">Outro
                        </option>
                    </select>
                </div>

                <div>
                    <label htmlFor="tax-options" className="text-black font-medium text-sm block mb-3">Selecione o parcelamento</label>
                    <select name="tax-options" id="tax-options" className="px-4 py-3 w-full rounded-lg bg-transparent border-2 text-gray-400 text-sm">
                        <img src="./assets/" alt="" />
                        <option value="Teste">1x sem juros
                        </option>
                        <option value="Teste">2x R$ 580,25
                        </option>
                        <option value="Teste">Teste
                        </option>
                    </select>
                </div>
                
                <div className="bg-green-200 px-5 py-3 text-sm rounded-lg text-black">
                    <span>Taxa zarpay: 8.5%
                    </span>
                </div>
                <button className="w-full text-white-50 bg-blue-600 px-6 py-4 rounded-xl">Calcular</button>
            </form>
            <div className="flex w-full items-center justify-center">
                <img src="../src/assets/zarpay.svg" alt="zarpay logo" />
            </div>
        </>
    )
}