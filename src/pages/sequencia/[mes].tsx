import CardPorcentagem from "@/components/Sequencia/Mes/Dashboard/Card";
import RelatorioHoras from "@/components/Sequencia/Mes/RelatorioHoras";
import UserContext from "@/data/contexts/UserContext";
import RelatorioHorasModel from "@/models/RelatorioHorasModel";
import { useRouter } from "next/router";
import {useContext} from "react"
import {IconArrowBackUp} from "@tabler/icons-react"
import Link from "next/link";

const PaginaMes = () => {

    const router = useRouter()

    const mes = router.query.mes

    const {relatorios, setrelatorios} = useContext(UserContext)

    const horasTrabalhadas = relatorios.map((item: any) => item.horas)
    const horasPossiveis = relatorios.map((item: any) => item.possiveis)

    const novoRelatorio = (relatorio: object) => {
        setrelatorios([...relatorios, relatorio])
    }

    return ( 
        <div className="w-full bg-fundoPrincipal flex font-saira flex-col text-textosClaros p-10 h-screen overflow-y-auto">
            <h1 className="text-5xl uppercase font-medium">{mes}</h1>
            <div className="flex flex-col gap-10">
                <RelatorioHoras relatorios={relatorios} novoRelatorio={novoRelatorio}/>
                <CardPorcentagem horas={horasTrabalhadas} possiveis={horasPossiveis}/>
            </div>
        </div>
     );
}
 
export default PaginaMes;



// teste github
//segundo teste github