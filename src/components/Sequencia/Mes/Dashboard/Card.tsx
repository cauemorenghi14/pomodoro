import ApexChart from "./OutroGrafico";

interface CardPorcentagem {
  horas: number[]
  possiveis: number[]
}

const CardPorcentagem = (props: CardPorcentagem) => {

  return (
    <div className="w-full bg-cinzaSecundario rounded-lg p-5">
      <ApexChart horas={props.horas} possiveis={props.possiveis}/>
    </div>
  );
};

export default CardPorcentagem;

// aproveitamento com porcentagem;
// média de horas;
// média de horas disponíveis;
// gráfico das horas trabalhadas e disponiveis (em cores diferentes)