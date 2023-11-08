import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { Tarefa } from '../types/Tarefa';

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [selecionada, setSelecionada] = useState<Tarefa>();

  function selecionaTarefa(tarefaSelecionada: Tarefa) {
    setSelecionada(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefaSelecionada.id === tarefa.id
    })));
  }

  function finalizarTarefa() {
    if (selecionada) {
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionada.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
        selecionada={selecionada} 
        finalizarTarefa = {finalizarTarefa}
      />
    </div>
  );
}

export default App;
