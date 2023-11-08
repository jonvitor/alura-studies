export function tempoParaSegundos(tempo: string) {
  const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");

  const horasEmSegundos = Number(horas) * 3600;
  const minutosEmSegundos = Number(minutos) * 60;

  return horasEmSegundos + minutosEmSegundos + Number(segundos);
}

export function segundosParaTempo(segundos: number) {
  const minutosTempo = Math.floor(segundos / 60);
  const segundosTempo = segundos % 60;

  const minutosFormatado = String(minutosTempo).padStart(2, "0");
  const segundosFormatados = String(segundosTempo).padStart(2, "0");

  return { minutosFormatado, segundosFormatados };
}
