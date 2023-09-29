import CardComparacaoModel from "@/models/CardComparacaoModel";
import GraficoComparacao from "./Graficos/GraficoComparacao";

interface CardPorcentagem {
  horas: number[]
  possiveis: number[]
  series: CardComparacaoModel[]
}

const CardPorcentagem = (props: CardPorcentagem) => {

  return (
    <div className="w-full bg-cinzaSecundario rounded-lg p-5">
     <GraficoComparacao horas={props.horas} series={props.series}/>
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  );
};

export default CardPorcentagem;

// aproveitamento com porcentagem;
// média de horas;
// média de horas disponíveis;
// gráfico das horas trabalhadas e disponiveis (em cores diferentes)