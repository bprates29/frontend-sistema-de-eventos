import axios from 'axios';
import Evento from '../core/Evento';

interface ApiResponse {
    content: Evento[];
}

const BASE_URL = 'http://localhost:8080';

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