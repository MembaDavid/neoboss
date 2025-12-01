export default function CareersPage() {
  const openings = [
    {
      title: "AI Automation Engineer",
      type: "Full-time · Remote",
      description:
        "Build intelligent automation systems that help clients operate at scale. Work with LLMs, workflow engines, and client integrations.",
    },
    {
      title: "Frontend Developer (Next.js)",
      type: "Full-time · Remote",
      description:
        "Create stunning UI experiences for dashboards, analytics tools, and enterprise SaaS products.",
    },
    {
      title: "Operations Associate",
      type: "Part-time · Hybrid",
      description:
        "Coordinate client onboarding, manage internal workflows, and help streamline daily operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6">Careers at NeoBoss Concepts</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Join a futuristic software company building AI-powered solutions for
          businesses around the world. If you’re passionate about automation,
          clean design, and building powerful systems — we’d love to work with
          you.
        </p>

        <div className="space-y-8">
          {openings.map((job, i) => (
            <div
              key={i}
              className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition cursor-pointer bg-gray-50"
            >
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="text-blue-600 mt-1">{job.type}</p>
              <p className="text-gray-600 mt-4">{job.description}</p>
              <button className="mt-6 px-5 py-2 rounded-xl bg-black text-white font-medium hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
