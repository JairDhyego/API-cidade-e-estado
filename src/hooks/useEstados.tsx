import { useState, useEffect } from "react";

export interface Regiao {
  id: number;
  sigla: string;
  nome: string;
}

export interface IEstados {
  id: number;
  sigla: string;
  nome: string;
  regiao: Regiao;
}

export const useEstados = () => {
  const [estados, setEstados] = useState<IEstados[]>([]);

  useEffect(() => {
    const API = ` https://brasilapi.com.br/api/ibge/uf/v1`;
    fetch(API)
      .then((response) => response.json())
      .then((data) => setEstados(data));
  }, []);

  return {
    estados,
  };
};
