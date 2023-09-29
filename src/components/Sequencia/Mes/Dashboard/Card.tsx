import GraficoComparacao from "./Graficos/GraficoComparacao";
import ApexChart from "./OutroGrafico";

interface CardPorcentagem {
  horas: number[]
  possiveis: number[]
}

const CardPorcentagem = (props: CardPorcentagem) => {

  return (
    <div className="w-full bg-cinzaSecundario rounded-lg p-5">
     <GraficoComparacao horas={props.horas}/>
    </div>
  );
};

export default CardPorcentagem;

// aproveitamento com porcentagem;
// média de horas;
// média de horas disponíveis;
// gráfico das horas trabalhadas e disponiveis (em cores diferentes)