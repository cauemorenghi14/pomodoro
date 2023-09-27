import RelatorioHoras from "@/components/Sequencia/Mes/RelatorioHoras";
import { useRouter } from "next/router";

const PaginaMes = () => {

    const router = useRouter()

    const mes = router.query.mes

    return ( 
        <div className="w-full bg-fundoPrincipal h-screen flex font-saira flex-col text-textosClaros p-10">
            <h1 className="text-5xl uppercase font-medium">{mes}</h1>
            <RelatorioHoras />
        </div>
     );
}
 
export default PaginaMes;