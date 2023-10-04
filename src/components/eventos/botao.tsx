interface BotaoProps {
    children: any
    className?: string
}

export default function Botao(props: BotaoProps) {
    return (
        <button className={` 
            bg-gradient-to-r from-green-500 to-green-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}