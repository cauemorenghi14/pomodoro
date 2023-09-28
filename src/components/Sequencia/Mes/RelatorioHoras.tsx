import ListaRelatorioHoras from "./ListaRelatoriosHoras";
import RelatorioHorasModel from "@/models/RelatorioHorasModel";
import { useState } from "react";
import InputsRelatorioHoras from "./InputsRelatorioHoras";

interface RelatorioHorasProps {
  relatorios: RelatorioHorasModel[];
  novoRelatorio: (relatorio: object) => void;
}

const RelatorioHoras = (props: RelatorioHorasProps) => {
  const [dia, setdia] = useState<number>();
  const [horas, sethoras] = useState<number>();
  const [possiveis, setpossiveis] = useState<number>();
  const [id, setid] = useState<number>();

  return (
    <div className="p-3 bg-cinzaSecundario rounded-lg mr-auto overflow-y-auto h-full w-1/3">
      <table className="w-full">

        <thead>
          <tr>
            <th className=" border-b p-2">Dia</th>
            <th className="border-x border-b p-2">Horas</th>
            <th className="border-l border-b p-2">Horas possíveis</th>
          </tr>
        </thead>

        <tbody className="text-center">
          <ListaRelatorioHoras relatorios={props.relatorios} />
          <InputsRelatorioHoras />
        </tbody>

      </table>
      <button
        className="bg-fundoPrincipal p-2 mt-2 uppercase hover:bg-vermelhoPrincipal hover:text-begeSecundario hover:font-medium"
        onClick={() =>
          props.novoRelatorio({
            id: id,
            dia: dia,
            possiveis: possiveis,
            horas: horas,
          })
        }
      >
        Enviar
      </button>
    </div>
  );
};

export default RelatorioHoras;
