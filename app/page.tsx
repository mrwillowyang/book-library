import Card from './component/card';
import Navbar from './component/navbar';
import { book } from './data/book';

export default async function Index() {
  return (
    <main className="w-full">
      <Navbar />
      <section className="container max-w-screen-xl mx-auto px-4 py-5">
        <Card {...book} />
      </section>
    </main>
  );
}
