import CardPorcentagem from "@/components/Sequencia/Mes/Dashboard/Card";
import RelatorioHoras from "@/components/Sequencia/Mes/RelatorioHoras";
import UserContext from "@/data/contexts/UserContext";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import MediaAproveitamento from "@/components/Sequencia/Mes/Dashboard/MediaAproveitamento";
import MediasDiarias from "@/components/Sequencia/Mes/Dashboard/GraficosMediasDiarias";

const PaginaMes = () => {
  const router = useRouter();
  const mes = router.query.mes;


  const { relatorios, setrelatorios } = useContext(UserContext);
  const mesAtual = String(mes)
  useEffect(() => {
    fetchMes(mesAtual)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mesAtual]);

  async function fetchMes(mes: string) {
    const url = `http://localhost:3333/sequencia/${mes}`
    const response = await fetch(url)
    const data = await response.json()
    setrelatorios(data)
  }

  const horasTrabalhadas = relatorios.map((item: any) => item.horas);
  const horasPossiveis = relatorios.map((item: any) => item.possiveis);

  const novoRelatorio = (relatorio: object) => {
    setrelatorios([...relatorios, relatorio]);
  };

  return (
    <div className="w-full bg-fundoPrincipal flex gap-7 font-saira flex-col text-textosClaros p-10 h-screen overflow-y-auto">
      <h1 className="text-5xl uppercase font-medium">{mes}</h1>
      <div className="flex gap-7 h-3/4">
        <RelatorioHoras relatorios={relatorios} novoRelatorio={novoRelatorio} />
        <div className="w-1/2 flex flex-col gap-7 h-full">
          <MediaAproveitamento
            horas={horasTrabalhadas}
            possiveis={horasPossiveis}
          />
          <MediasDiarias mes={mesAtual} />
        </div>
      </div>
      <div>
        <CardPorcentagem horas={horasTrabalhadas} possiveis={horasPossiveis} />
      </div>
    </div>
  );
};

export default PaginaMes;
