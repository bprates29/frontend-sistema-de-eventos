'use client';
import Botao from "@/components/eventos/botao";
import Formulario from "@/components/eventos/formulario";
import Layout from "@/components/eventos/layout";
import Tabela from "@/components/eventos/tabela";
import Evento from "@/core/Evento";

export default function Eventos() {

  const eventos = Evento.geraEventosMock()

  function eventoSelecionado(evento: Evento) {
    console.log(evento.nome)
  }

  function eventoExcluido(evento: Evento) {
    console.log(evento.nome)
  }

  return (
    <div className={`
     flex justify-center items-center h-screen
     bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900
     text-white`}>
      <Layout titulo="Cadastro de eventos">
        <div className="flex justify-end">
          <Botao className="mb-4" cor="bg-gradient-to-r from-green-500 to-green-700">
            Novo evento
          </Botao>
        </div>
        <Tabela eventos={eventos}
          eventoSelecionado={eventoSelecionado}
          eventoExcluido={eventoExcluido}></Tabela>
          <Formulario evento={eventos[0]}></Formulario>
      </Layout>
    </div>
  )
}
