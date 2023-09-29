import UserContext from "@/data/contexts/UserContext";
import ApexChart2 from "./Graficos/GraficoMediaDiaria";
import { useContext } from "react";

interface MediasDiariasProps {
  mes: string;
}

const MediasDiarias = (props: MediasDiariasProps) => {
  const { relatorios } = useContext(UserContext);

  return (
    <div className="w-full bg-cinzaSecundario rounded-lg h-full p-3 overflow-y-auto">
      {relatorios.map((item: any) => (
        <ApexChart2
          key={item.id}
          dia={item.dia}
          mes={props.mes}
          horas={
            [(item.horas / item.possiveis) * 100]
        }
        />
      ))}
    </div>
  );
};

export default MediasDiarias;
