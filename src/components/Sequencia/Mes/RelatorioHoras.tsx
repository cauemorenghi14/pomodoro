import ItemRelatorioHoras from "./ItemRelatorioHoras";
import ListaRelatorioHoras from "./ListaRelatoriosHoras";

const RelatorioHoras = () => {
  const relatorio = [
    {
      id: 1,
      dia: 1,
      horas: 7.5,
      possiveis: 8,
    },
    {
      id: 2,
      dia: 2,
      horas: 7.5,
      possiveis: 8,
    },
    {
      id: 3,
      dia: 3,
      horas: 7.5,
      possiveis: 8,
    },
    {
      id: 4,
      dia: 4,
      horas: 7.5,
      possiveis: 8,
    },
  ];

  return (
    <div className="p-3 bg-cinzaSecundario rounded-lg mr-auto overflow-y-auto h-full w-1/2">
      <table className="w-full">
        <thead>
          <tr>
            <th className=" border-b p-2">Dia</th>
            <th className="border-x border-b p-2">Horas</th>
            <th className="border-l border-b p-2">Horas possíveis</th>
          </tr>
        </thead>
        <ListaRelatorioHoras relatorios={relatorio}/>
      </table>
    </div>
  );
};

export default RelatorioHoras;
