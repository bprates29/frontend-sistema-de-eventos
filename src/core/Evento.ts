export default class Evento {
    id: number | null;
    nome: string;
    data: string;
    dataInicioInsc: string;
    dataFimInsc: string;
    descricao: string;
    status: string;

    constructor(id: number | null, nome: string, data: string,
        dataInicioInsc: string, dataFimInsc: string,
        descricao: string, status: string) {
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.dataInicioInsc = dataInicioInsc;
        this.dataFimInsc = dataFimInsc;
        this.descricao = descricao;
        this.status = status;
    }

    static geraEventosMock() {
        return [
            new Evento(1, "UPF em Dança",
            "10/11/2024",
            "10/11/2024 17:00",
            "10/11/2024 17:00",
            "Evento de dança",
            "PREVISTO",
          ),
          new Evento(2, "UPF na feitech",
            "10/11/2024",
            "10/11/2024 17:00",
            "10/11/2024 17:00",
            "Evento de tecnologia",
            "PREVISTO",
          )
        ]
      }
}