export default async function QuartoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <div>Quarto {id}</div>;
}
