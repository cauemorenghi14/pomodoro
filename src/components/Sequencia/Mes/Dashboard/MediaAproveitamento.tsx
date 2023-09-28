interface  MediaAproveitamentoProps {
    horas: number[]
    possiveis: number[]
}

const MediaAproveitamento = (props: MediaAproveitamentoProps) => {

    const HorasTrabalhadas = props.horas.reduce((horaAtual, proximaHora) => {
        return horaAtual + proximaHora
    }, 0)
    const mediaHorasTrabalhadas = HorasTrabalhadas / props.horas.length
    const mediaHorasTrabalhadasFinal = parseFloat(mediaHorasTrabalhadas.toFixed(2))

    const HorasPossiveis = props.possiveis.reduce((horaAtual, proximaHora) => {
        return horaAtual + proximaHora
    }, 0)
    const mediaHorasPossiveis = HorasPossiveis / props.horas.length
    const mediaHorasPossiveisFinal = parseFloat(mediaHorasPossiveis.toFixed(2))

    const indiceAproveitamento = (mediaHorasTrabalhadasFinal / mediaHorasPossiveisFinal) * 100
    const indiceFinal = parseFloat(indiceAproveitamento.toFixed(2))

    return ( 
        <div className="bg-cinzaSecundario w-1/2 h-1/3 rounded-lg p-3 flex flex-col justify-around">
            <h1 className="uppercase font-semibold bg-fundoPrincipal text-center rounded-md py-1 mb-1">Média de horários</h1>
            <p>Média de <strong className="underline font-semibold">horas trabalhadas</strong> no mês: <strong>{mediaHorasTrabalhadasFinal}</strong></p>
            <p>Média de <strong className="underline font-semibold">horas possíveis</strong> no mês: <strong>{mediaHorasPossiveisFinal}</strong></p>
            <p>Índice de aproveitamento: <span className={`px-2 rounded-md ${indiceFinal < 85 ? 'bg-yellow-600' : 'bg-green-600'}`}>{indiceFinal} %</span></p>
        </div>
     );
}
 
export default MediaAproveitamento;

// aproveitamento com porcentagem;
// média de horas;
// média de horas disponíveis;
// gráfico das horas trabalhadas e disponiveis (em cores diferentes)