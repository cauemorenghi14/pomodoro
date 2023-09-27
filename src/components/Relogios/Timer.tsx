import { useState, useEffect } from "react";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconRotateClockwise,
} from "@tabler/icons-react";

const Timer = () => {
  const [totalSegundos, settotalSegundos] = useState<number>(0);
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  const [contando, setcontando] = useState<boolean>(false);
  const [btnPausa, setbtnPausa] = useState<boolean>(false);
  const [btnPlay, setbtnPlay] = useState<boolean>(false);
  const [btnRestart, setbtnRestart] = useState<boolean>(false);

  const btnsMinutos = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]

  useEffect(() => {
    if (contando) {
      if (totalSegundos === 0) {
        alert("O tempo acabou");
        setcontando(false);
        setbtnPausa(false)
        setbtnRestart(false)
      } else {
        const timeout = setTimeout(() => {
          settotalSegundos(totalSegundos - 1);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [contando, totalSegundos]);

  return (
    <div className="w-full bg-fundoPrincipal h-screen flex items-center justify-center font-saira flex-col">
      <div className="text-textosClaros flex items-center">
        <div className="flex flex-col text-center ">
          h<span className="text-9xl">{horas.toString().padStart(2, "0")}</span>
        </div>
        <span className="text-9xl">:</span>
        <div className="flex flex-col text-center ">
          min
          <span className="text-9xl">
            {minutos.toString().padStart(2, "0")}
          </span>
        </div>
        <span className="text-9xl">:</span>
        <div className="flex flex-col text-center">
          seg
          <span className="text-9xl">
            {segundos.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
      <div className="flex gap-10">
        {btnPlay && (
          <IconPlayerPlayFilled
            size={70}
            className="bg-cinzaSecundario text-textosClaros p-3 rounded-full cursor-pointer"
            onClick={() => {
              setcontando(true);
              setbtnPlay(false);
              setbtnPausa(true);
            }}
          />
        )}
        {btnPausa && (
          <IconPlayerPauseFilled
            size={70}
            className="bg-cinzaSecundario text-textosClaros p-3 rounded-full cursor-pointer"
            onClick={() => {
              setcontando(false);
              setbtnPausa(false);
              setbtnPlay(true);
            }}
          />
        )}
        {btnRestart &&
            <IconRotateClockwise
            size={70}
            className={`bg-cinzaSecundario text-textosClaros p-3 rounded-full ${
                totalSegundos === 0 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => {
                settotalSegundos(0);
                setcontando(false);
                setbtnPausa(false);
                setbtnRestart(false);
                setbtnPlay(false)
            }}
            />
        }
      </div>
      <div className="flex gap-2 mt-5 flex-wrap justify-center w-4/5">
        {btnsMinutos.map(item => (
                <button 
                    key={item} 
                    className="bg-cinzaSecundario text-textosClaros p-2 rounded-lg hover:bg-opacity-80"
                    onClick={() => {
                        settotalSegundos(item * 60)
                        setbtnPausa(true)
                        setbtnRestart(true)
                        setcontando(true)
                    }}
                >
                    {item} minutos
                </button>
            ))}
      </div>
      <div>
      </div>
    </div>
  );
};

export default Timer;
