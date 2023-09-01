import Card from './components/Card';

const cards = [
  {
    title: 'Cadastrar Nota',
    description: 'Cadastrar Nota',
    imageUrl: 'URL_DA_IMAGEM_1',
    route: 'invoice'
  },
  {
    title: 'Card 2',
    description: 'Descrição do Card 2',
    imageUrl: 'URL_DA_IMAGEM_2',
    route: 'invoice'
  },
  {
    title: 'Card 3',
    description: 'Descrição do Card 3',
    imageUrl: 'URL_DA_IMAGEM_3',
    route: 'invoice'
  },
];

export default function Home() {
  return (
    <>
      <section className="max-width">
        <section className="py-6 lg:py-2">
          <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <div className="flex flex-wrap justify-center">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
            </div>
          </div>
        </section>
      </section>

      <div className="slant"></div>
    </>
  );
}
