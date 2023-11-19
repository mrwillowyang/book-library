import { Suspense } from 'react';
import Gallery from './component/gallery';
import Navbar from './component/navbar';
import GalleryPlaceholder from './component/gallery/placeholder';

export default async function Index() {
  return (
    <main className="w-full">
      <Navbar />
      <section className="container max-w-screen-xl mx-auto px-4 py-5">
        <Suspense fallback={<GalleryPlaceholder />}>
          <Gallery />
        </Suspense>
      </section>
    </main>
  );
}
