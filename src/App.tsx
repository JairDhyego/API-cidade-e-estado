import { useEstados } from "./hooks/useEstados";
import { useCidade } from "./hooks/useCidade";
import { SetStateAction, useState } from "react";

function App() {
  const { estados } = useEstados();
  const [selectedeEstado, setSelectedeEstado] = useState("");
  const { cidades, loading } = useCidade({ uf: selectedeEstado });

  const handleEstadoUpdate = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedeEstado(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <select value={selectedeEstado} onChange={handleEstadoUpdate}>
          {estados.map((estado) => (
            <option key={estado.id} value={estado.sigla}>
              {estado.nome}
            </option>
          ))}
        </select>

        {loading ? (
          <p>Carregando cidades...</p>
        ) : (
          <select>
            {cidades.map((cidade) => (
              <option key={cidade.nome}>{cidade.nome}</option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}

export default App;
