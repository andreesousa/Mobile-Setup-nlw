import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3333/' /* para testar mudar para o ip*/
});