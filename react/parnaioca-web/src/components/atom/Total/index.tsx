interface TotalPros {
  frase: string;
}

export default function Total({ frase }: TotalPros) {
  return <div>Total de {frase}</div>;
}
