import { useRouter } from "next/router";

const PaginaMes = () => {

    const router = useRouter()

    const mes = router.query.mes

    return ( 
        <div className="w-full bg-fundoPrincipal h-screen flex font-saira flex-col text-textosClaros">
            exibindo o mes: {mes}
        </div>
     );
}
 
export default PaginaMes;