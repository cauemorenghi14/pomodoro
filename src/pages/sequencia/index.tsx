import {IconCalendarEvent} from "@tabler/icons-react"
import EscolaMeses from "@/components/Sequencia/EscolhaMeses";

const PaginaSequencia = () => {
    return ( 
        <div className="w-full bg-fundoPrincipal h-screen flex items-center justify-center font-saira flex-col">
            <h1 className="text-textosClaros text-5xl font-medium uppercase border-vermelhoPrincipal border-b-4 inline-block">
                Selecione o mês
            </h1>
            <div className="">
                <EscolaMeses />
            </div>
        </div>
    );
}
 
export default PaginaSequencia;