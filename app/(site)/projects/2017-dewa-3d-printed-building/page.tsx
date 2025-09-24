
import Image from "next/image";

const images = [
  "image3.jpg","image4.png","image5.jpg","image6.png","image7.png",
  "image8.jpg","image10.jpg","image11.png","image18.jpg","image19.png"
];

export default function DewaBuildingProject() {
  return (
    <main className="space-y-10">
      {/* Cinematic hero */}
      <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black">
        <div className="aspect-[16/7] w-full relative">
          {/* Replace with your favorite hero */}
          {/* Using plain <img> because images are unoptimized in static export */}
          <img src="/projects/dewa-building/hero.jpg" alt="DEWA 3D-printed lab" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-3xl text-center px-6">
              <h1 className="text-3xl md:text-5xl font-semibold">First 3D‑Printed Building in the UAE (DEWA)</h1>
              <p className="mt-4 text-zinc-300">Guinness World Record award‑winning project — fully approved functional laboratory, printed on site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating text on dark center panel */}
      <section className="relative">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-zinc-800 bg-[#0A0B0C] p-6 md:p-10">
            <p className="text-zinc-200 text-base md:text-lg leading-relaxed">
              We led the design and realization of a fully certified 3D‑printed research laboratory for Dubai Electricity & Water Authority (DEWA).
              The lab (≈168 m², 5.2 m height) was printed on-site in ~44 hours of net printing time across 27 unique wall elements—demonstrating
              the viability of cementitious additive manufacturing for functional, code‑compliant buildings.
            </p>
            <ul className="mt-6 grid md:grid-cols-2 gap-3 text-sm text-zinc-400">
              <li><span className="text-zinc-500">Printing time:</span> ~43h 54m net</li>
              <li><span className="text-zinc-500">Elements:</span> 27 unique wall elements</li>
              <li><span className="text-zinc-500">Team:</span> 2–3 engineers on site</li>
              <li><span className="text-zinc-500">Standards:</span> Dubai codes + EN 1990/91/92/93/97/98</li>
              <li><span className="text-zinc-500">Goal:</span> functional, fully certified daily‑use structure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Video embed */}
      <section className="rounded-2xl border border-zinc-800 overflow-hidden">
        <div className="aspect-video bg-black">
          {/* Replace the src with your YouTube/Vimeo link */}
          <iframe
            className="w-full aspect-video rounded-xl border border-zinc-800"
            src="https://www.youtube.com/embed/myfshsfAcUg"
            title="Cement 3D printing — DEWA project"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      {/* Image gallery */}
      <section className="grid md:grid-cols-2 gap-4">
        {images.map((img) => (
          <div key={img} className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            <img src={`/projects/dewa-building/${img}`} alt={img} className="w-full h-full object-cover" />
          </div>
        ))}
      </section>
    </main>
  );
}
