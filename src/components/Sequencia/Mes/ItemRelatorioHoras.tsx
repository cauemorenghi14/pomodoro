import RelatorioHorasModel from "@/models/RelatorioHorasModel";

const ItemRelatorioHoras = (props: RelatorioHorasModel) => {
  return (
    <tr key={props.id}>
      <td className="border-b p-2">{props.dia}</td>
      <td className="border p-2">{props.horas}</td>
      <td className="border-y p-2">{props.possiveis}</td>
    </tr>
  );
};

export default ItemRelatorioHoras;
