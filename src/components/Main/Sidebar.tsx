import Image from "next/image";
import { IconBrain, IconClockHour10, IconHourglassHigh, IconChecklist, IconLogout } from '@tabler/icons-react';


const Sidebar = () => {
  return (
    <div className="h-screen bg-fundoPrincipal flex flex-col font-saira fixed left-0 top-0 p-10 justify-between">

      <div className="flex flex-col items-center">
        <Image src="https://avatars.githubusercontent.com/u/126644843?v=4" width={60} height={60} alt="Imagem do usuário" className="rounded-full"/>
        <p className="text-textosClaros">Cauê Morenghi</p>
        <p className="text-textosClaros">Developer</p>
      </div>

      <div className="flex flex-col items-left gap-10">
        <span className="flex items-center gap-3 text-white font-medium">
            <div className="bg-vermelhoPrincipal rounded-md text-begeSecundario p-2">
                <IconBrain />
            </div>
            Projetos
        </span>

        <span className="flex items-center gap-3 text-textosClaros">
            <div className="p-2 bg-cinzaSecundario rounded-md text-textosClaros">
                <IconClockHour10 />
            </div>
            Timer
        </span>

        <span className="flex items-center gap-3 text-textosClaros">
            <div className="p-2 bg-cinzaSecundario rounded-md text-textosClaros">
                <IconHourglassHigh />
            </div>
            Cronômetro
        </span>

        <span className="flex items-center gap-3 text-textosClaros">
            <div className="p-2 bg-cinzaSecundario rounded-md text-textosClaros">
                <IconChecklist />
            </div>
            Tarefas
        </span>
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
