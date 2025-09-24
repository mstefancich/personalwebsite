export default function ProjectPage() {
  return (
    <main className="space-y-8">
      {/* Hero image */}
      <div className="aspect-[16/7] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        <img
          src="/projects/metal-3d-printing/hero.jpg"
          alt="Electrochemical Metal 3D Printing"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project header */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Electrochemical Metal 3D Printing
        </h1>
        <div className="text-xs uppercase tracking-widest text-zinc-500">
          2022 · Founder & CTO, AthenaTech
        </div>
        <p className="text-zinc-300">
          Developed a stable EC jet process for dense copper AM; launched
          tabletop PCB etcher for makers.
        </p>
      </div>

      {/* Rich content */}
      <article className="prose prose-invert prose-zinc max-w-none">
        <p>
          Here you can describe the background of the project, challenges, and
          milestones. You can also explain the context (e.g., motivation,
          research, or industry demand).
        </p>
        <p>
          Add supporting details: process innovations, results, or collaborations.
        </p>
      </article>

      {/* Extra images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src="/projects/metal-3d-printing/detail1.jpg"
          alt="Close-up of copper print"
          className="rounded-xl border border-zinc-800"
        />
        <img
          src="/projects/metal-3d-printing/detail2.jpg"
          alt="Printing setup"
          className="rounded-xl border border-zinc-800"
        />
      </div>

      {/* Optional video */}
      <div className="aspect-video overflow-hidden rounded-xl border border-zinc-800">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="Project video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </main>
  );
}
