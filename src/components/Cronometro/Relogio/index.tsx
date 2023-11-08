import { segundosParaTempo } from '../../../common/utils/time'
import style from './Relogio.module.scss'

interface RelogioProps {
  tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: RelogioProps) {
  const tempoFomatado = segundosParaTempo(tempo);

  return (
    <>
      <span className={style.relogioNumero}> {tempoFomatado.minutosFormatado[0]} </span>
      <span className={style.relogioNumero}> {tempoFomatado.minutosFormatado[1]} </span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}> {tempoFomatado.segundosFormatados[0]} </span>
      <span className={style.relogioNumero}> {tempoFomatado.segundosFormatados[1]} </span>
    </>
  )
}