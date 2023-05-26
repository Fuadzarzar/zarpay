import imageTransaction from '../assets/transactionIcon.svg'

export function TransactionInformation() {
    return (
        <>
            <div className="flex items-center justify-between w-full px-8 py-4 bg-slate-50 rounded-xl shadow-3xl">
                <div className="flex flex-col gap-2">
                    <span className="block text-gray-400 text-center text-xs font-medium">Você recebe</span>
                    <span className="text-black text-center font-bold">R$ 1.080,76</span>
                </div>
                <div>
                    <img src={imageTransaction} alt="icone transacao" />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="block text-gray-400 text-center text-xs font-medium">Cliente paga</span>
                    <span className="text-black text-center font-bold">R$ 1.208,50</span>
                </div>
            </div>
        </>
    )
}