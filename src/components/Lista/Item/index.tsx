import { Tarefa } from '../../../types/Tarefa'
import style from './Item.module.scss'

interface ItemProps extends Tarefa {
  selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}

export default function Item({tarefa, tempo, selecionado, completado, selecionaTarefa, id}: ItemProps) {
  return (
    <li 
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
      onClick={() => !completado && selecionaTarefa(
        {
          tarefa,
          tempo,
          selecionado,
          completado,
          id
        }
      )}
      >
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
      {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
    </li>
  )
}