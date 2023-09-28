import RelatorioHorasModel from "@/models/RelatorioHorasModel";
import ItemRelatorioHoras from "./ItemRelatorioHoras";
import {useState} from "react"

interface ListaRelatorioHorasProps {
  relatorios: RelatorioHorasModel[];
}

const ListaRelatorioHoras = (props: ListaRelatorioHorasProps) => {
  return (
    <>
      {props.relatorios.map((item) => {
        return (
          <ItemRelatorioHoras
            key={item.id}
            id={item.id}
            dia={item.dia}
            horas={item.horas}
            possiveis={item.possiveis}
          />
        );
      })}
    </>
  );
};

export default ListaRelatorioHoras;
