import { IconCalendarEvent } from "@tabler/icons-react";
import Link from "next/link";

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
            <Link key={mes} href={`/sequencia/${mes}`} className="bg-cinzaSecundario text-textosClaros rounded-lg hover:bg-vermelhoPrincipal hover:text-begeSecundario py-3 w-1/5 flex justify-center">
                <button className="flex flex-col items-center text-xl">
                    <IconCalendarEvent size={40} />
                    {mes}
                </button>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default EscolaMeses;
