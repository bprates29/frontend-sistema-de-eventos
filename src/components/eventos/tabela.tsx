import Evento from "@/core/Evento"

interface TabelaProps {
    eventos: Evento[]
}

export default function Tabela(props: TabelaProps) {
//...
    function renderHeader() {
        return (
            <tr>
                <th>id</th>
                <th>nome</th>
                <th>data</th>
                <th>descricao</th>
                <th>status</th>
            </tr>
        )
    }

    function renderDados() {
        return props.eventos?.map((evento, i) => {
            return (
                <tr key={evento.id}>
                    <td>{evento.id}</td>
                    <td>{evento.nome}</td>
                    <td>{evento.data}</td>
                    <td>{evento.descricao}</td>
                    <td>{evento.status}</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>
                {renderHeader()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}