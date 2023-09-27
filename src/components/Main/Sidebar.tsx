import Image from "next/image";
import { IconBrain, IconClockHour10, IconHourglassHigh, IconChecklist, IconLogout } from '@tabler/icons-react';
import {useState} from "react"
import Link from "next/link";


const Sidebar = () => {

  const [btnAtivo, setbtnAtivo] = useState<number>(1);
  
  return (
    <div className="h-screen bg-fundoPrincipal flex flex-col font-saira fixed left-0 top-0 p-11 justify-between border-r border-cinzaSecundario w-1/5">

      <div className="flex flex-col items-center">
        <Image src="https://avatars.githubusercontent.com/u/126644843?v=4" width={60} height={60} alt="Imagem do usuário" className="rounded-full"/>
        <p className="text-textosClaros">Cauê Morenghi</p>
        <p className="text-textosClaros">Developer</p>
      </div>

      <div className="flex flex-col items-left gap-6">
        <Link href="/projetos" onClick={() => {
            setbtnAtivo(1)
          }}>
          <button className={`flex items-center gap-3 text-white font-medium ${btnAtivo === 1 ? 'font-medium text-white': 'font-normal'}`}>
              <div className={`rounded-md p-2 ${btnAtivo === 1 ? 'bg-vermelhoPrincipal text-begeSecundario': 'bg-cinzaSecundario text-textosClaros'}`}>
                  <IconBrain />
              </div>
              Projetos
          </button>
        </Link>

        <Link href="/timer"  onClick={() => {
            setbtnAtivo(2)
          }}>
          <button className={`flex items-center gap-3 text-textosClaros ${btnAtivo === 2 ? 'font-medium text-white': 'font-normal'}`}>
              <div className={`rounded-md p-2 ${btnAtivo === 2 ? 'bg-vermelhoPrincipal text-begeSecundario': 'bg-cinzaSecundario text-textosClaros'}`}>
                  <IconClockHour10 />
              </div>
              Timer
          </button>
        </Link>

        <Link href="/cronometro" onClick={() => {
            setbtnAtivo(3)
          }}>
          <button className={`flex items-center gap-3 text-textosClaros ${btnAtivo === 3 ? 'font-medium text-white': 'font-normal'}`}>
              <div className={`p-2 rounded-md ${btnAtivo === 3 ? 'bg-vermelhoPrincipal text-begeSecundario': 'bg-cinzaSecundario text-textosClaros'}`}>
                  <IconHourglassHigh />
              </div>
              Cronômetro
          </button>
        </Link>

        <Link href="/tarefas" onClick={() => {
            setbtnAtivo(4)
          }}>
          <button className={`flex items-center gap-3 text-textosClaros ${btnAtivo === 4 ? 'font-medium text-white': 'font-normal'}`}>
              <div className={`p-2 rounded-md ${btnAtivo === 4 ? 'bg-vermelhoPrincipal text-begeSecundario': 'bg-cinzaSecundario text-textosClaros'}`}>
                  <IconChecklist />
              </div>
              Tarefas
          </button>
        </Link>

        <Link href="/sequencia" onClick={() => {
            setbtnAtivo(5)
          }}>
          <button className={`flex items-center gap-3 text-textosClaros ${btnAtivo === 5 ? 'font-medium text-white': 'font-normal'}`}>
              <div className={`p-2 rounded-md ${btnAtivo === 5 ? 'bg-vermelhoPrincipal text-begeSecundario': 'bg-cinzaSecundario text-textosClaros'}`}>
                  <IconChecklist />
              </div>
              Sequência
          </button>
        </Link>
      </div>

      <div>
        <span className="flex gap-3 p-2 text-textosClaros">
          <IconLogout />
          Sair
        </span>
      </div>

    </div>
  );
};

export default Sidebar;
