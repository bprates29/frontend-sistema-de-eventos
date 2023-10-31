import axios from 'axios';
import Evento from '../core/Evento';

interface ApiResponse {
    content: Evento[];
}

const BASE_URL = 'https://www.eventos.bprates.com.br/';

export const fetchEventos = async (): Promise<Evento[]> => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}/eventos`);
    return response.data.content;
  } catch (error) {
    throw new Error('Erro ao buscar eventos');
  }
};

export const cadastrarEvento = async (evento: Evento): Promise<Evento> => {
    try {
      const response = await axios.post<Evento>(`${BASE_URL}/eventos`, evento);
      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar evento:", error);
      throw error;
    }
  };

  export const atualizarEvento = async (evento: Evento): Promise<Evento> => {
    try {
      const response = await axios.put<Evento>(`${BASE_URL}/eventos/${evento.id}`, evento);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar evento:", error);
      throw error;
    }
  };

  export const excluirEvento = async (id: number): Promise<void> => {
    try {
      await axios.delete(`${BASE_URL}/eventos/${id}`);
    } catch (error) {
      console.error("Erro ao excluir evento:", error);
      throw error;
    }
  };