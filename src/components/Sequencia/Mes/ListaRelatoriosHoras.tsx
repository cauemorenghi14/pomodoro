import RelatorioHorasModel from "@/models/RelatorioHorasModel";
import ItemRelatorioHoras from "./ItemRelatorioHoras";

interface ListaRelatorioHorasProps {
    relatorios: RelatorioHorasModel[]
}

const ListaRelatorioHoras = (props: ListaRelatorioHorasProps) => {
    return ( 
        <tbody className="text-center">
          {props.relatorios.map(item => (
            <ItemRelatorioHoras key={item.id} id={item.id} dia={item.dia} horas={item.horas} possiveis={item.possiveis}/>
          ))}
        </tbody>
    );
}
 
export default ListaRelatorioHoras;