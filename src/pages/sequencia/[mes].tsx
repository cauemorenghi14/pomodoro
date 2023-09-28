import RelatorioHoras from "@/components/Sequencia/Mes/RelatorioHoras";
import UserContext from "@/data/contexts/UserContext";
import RelatorioHorasModel from "@/models/RelatorioHorasModel";
import { useRouter } from "next/router";
import {useContext} from "react"

const PaginaMes = () => {

    const router = useRouter()

    const mes = router.query.mes

    const {relatorios, setrelatorios} = useContext(UserContext)

    const novoRelatorio = (relatorio: object) => {
        setrelatorios([...relatorios, relatorio])
    }

    return ( 
        <div className="w-full bg-fundoPrincipal h-screen flex font-saira flex-col text-textosClaros p-10">
            <h1 className="text-5xl uppercase font-medium">{mes}</h1>
            <RelatorioHoras relatorios={relatorios} novoRelatorio={novoRelatorio}/>
        </div>
     );
}
 
export default PaginaMes;