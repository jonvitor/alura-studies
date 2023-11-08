import React, { useState } from "react"
import style from './Lista.module.scss'
import Item from "./Item";
import { Tarefa } from "../../types/Tarefa";

interface ListaProps  {
  tarefas: Tarefa[],
  selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}

function Lista(props: ListaProps) {

  return (
    <div>
      <aside className={style.listaTarefas}>
        <h2 > Estudos do dia</h2>
        <ul>
          {props.tarefas.map((item) => (
            <Item
              key={item.id}
              {...item}
              selecionaTarefa={props.selecionaTarefa}
            />
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default Lista;