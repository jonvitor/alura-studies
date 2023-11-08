import React, { useState, useEffect } from 'react';
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/time";
import { Tarefa } from "../../types/Tarefa";

interface CronometroProps {
  selecionada: Tarefa | undefined,
  finalizarTarefa: () => void
}

export default function Cronometro(props: CronometroProps) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (props.selecionada?.tempo) {
      setTempo(tempoParaSegundos(props.selecionada.tempo));
    }
  }, [props.selecionada]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }

      props.finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>
        Iniciar!
      </Botao>
    </div>
  )
}