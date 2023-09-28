import ListaRelatorioHoras from "./RelatorioHoras/ListaRelatoriosHoras";
import RelatorioHorasModel from "@/models/RelatorioHorasModel";
import { useState } from "react";
import InputsRelatorioHoras from "./RelatorioHoras/InputsRelatorioHoras";

interface RelatorioHorasProps {
  relatorios: RelatorioHorasModel[];
  novoRelatorio: (relatorio: object) => void;
}

const RelatorioHoras = (props: RelatorioHorasProps) => {

  return (
    <div className="p-3 bg-cinzaSecundario rounded-lg mr-auto overflow-y-auto h-96 w-1/2">
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
    </div>
  );
};

export default RelatorioHoras;
