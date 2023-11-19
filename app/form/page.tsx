import Nav from '../component/navbar';

export function Form() {
  return (
    <div className="w-full">
      <Nav />
      <main className="max-w-screen-xl mx-auto py-5 px-3">
        <section data-testid="gallery" className="flex flex-wrap -m-2">
          A form to add books
        </section>
      </main>
    </div>
  );
}

export default Form;
