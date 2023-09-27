import { useState, useEffect } from "react";
import {IconPlayerPauseFilled, IconPlayerPlayFilled, IconRotateClockwise} from "@tabler/icons-react"

const PaginaCronometro = () => {
  const [totalSegundos, settotalSegundos] = useState<number>(0);
  const horas = Math.floor(totalSegundos / 3600)
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  const [contando, setcontando] = useState<boolean>(false);
  const [btnPausa, setbtnPausa] = useState<boolean>(false);
  const [btnPlay, setbtnPlay] = useState<boolean>(true);

  useEffect(() => {
    if (contando) {
        if (totalSegundos === 10) {
            alert("O tempo acabou")
            setcontando(false)
        } else {
            const timeout = setTimeout(() => {
                    settotalSegundos(totalSegundos + 1)
                }, 1000);
                return () => clearTimeout(timeout)
        }
    }
  }, [contando, totalSegundos]);

  return (
    <div className="w-full bg-fundoPrincipal h-screen flex items-center justify-center font-saira flex-col">
      <div className="text-textosClaros flex items-center">
      <div className="flex flex-col text-center ">
            h
            <span className="text-9xl">{horas.toString().padStart(2, "0")}</span>
        </div>
        <span className="text-9xl">:</span>
        <div className="flex flex-col text-center ">
            min
            <span className="text-9xl">{minutos.toString().padStart(2, "0")}</span>
        </div>
        <span className="text-9xl">:</span>
        <div className="flex flex-col text-center">
            seg
            <span className="text-9xl">{segundos.toString().padStart(2, "0")}</span>
        </div>
      </div>
      <div className="flex gap-10">
        {btnPlay &&
            <IconPlayerPlayFilled size={70} className="bg-cinzaSecundario text-textosClaros p-3 rounded-full cursor-pointer" onClick={() => {
                setcontando(true)
                setbtnPlay(false)
                setbtnPausa(true)
            }}/>
        }
        {btnPausa &&
            <IconPlayerPauseFilled size={70} className="bg-cinzaSecundario text-textosClaros p-3 rounded-full cursor-pointer" onClick={() => {
                setcontando(false)
                setbtnPausa(false)
                setbtnPlay(true)
            }}/>
        }
        <IconRotateClockwise size={70} className={`bg-cinzaSecundario text-textosClaros p-3 rounded-full ${totalSegundos === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => {
            settotalSegundos(0)
            setcontando(false)
        }}/>
      </div>
    </div>
  );
};

export default PaginaCronometro;
