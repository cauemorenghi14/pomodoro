import { IconCalendarEvent } from "@tabler/icons-react";

const EscolaMeses = () => {

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <div className="font-saira p-10 flex items-center justify-center">
      <div className="px-28 flex flex-wrap gap-5 justify-center items-center">
        {meses.map(mes => (
            <button key={mes} className="flex flex-col items-center bg-cinzaSecundario text-textosClaros w-1/5 py-5 rounded-lg text-xl hover:bg-vermelhoPrincipal hover:text-begeSecundario">
                <IconCalendarEvent size={40} />
                {mes}
            </button>
        ))}
      </div>
    </div>
  );
};

export default EscolaMeses;
