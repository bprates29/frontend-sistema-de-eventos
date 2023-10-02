import Evento from "@/core/Evento"

interface TabelaProps {
    eventos: Evento[]
}

export default function Tabela(props: TabelaProps) {
    //...
    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-3">id</th>
                <th className="text-left p-3">nome</th>
                <th className="text-left p-3">data</th>
                <th className="text-left p-3">descricao</th>
                <th className="text-left p-3">status</th>
            </tr>
        )
    }

    function renderDados() {
        return props.eventos?.map((evento, i) => {
            return (
                <tr key={evento.id}
                className={`${i % 2 === 0 ? 'bg-indigo-200' : 'bg-indigo-100'} `}>
                    <td className="text-left p-3">{evento.id}</td>
                    <td className="text-left p-3">{evento.nome}</td>
                    <td className="text-left p-3">{evento.data}</td>
                    <td className="text-left p-3">{evento.descricao}</td>
                    <td className="text-left p-3">{evento.status}</td>
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`text-gray-100
            bg-gradient-to-r from-indigo-500 to-indigo-800`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}