import Image from "next/image";

const team = [
  {
    name: "David Memba",
    role: "Founder & Lead Engineer",
    bio: "Drives product vision, software architecture, and AI automation with a strong focus on scalable, high-impact solutions.",
    image: "/team/david.jpg"
  },
  {
    name: "AI Systems",
    role: "Automation & Intelligence",
    bio: "Powering workflows, integrations, and smart decision-making across all NeoBoss products.",
    image: "/team/ai.jpg"
  },
  {
    name: "Design Studio",
    role: "UI/UX & Branding",
    bio: "Focused on clean interfaces, intuitive experiences, and visually compelling digital products.",
    image: "/team/design.jpg"
  }
];

export default function OurTeam() {
  return (
    <section className="w-full bg-neutral-50 dark:bg-neutral-950 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-white">
          Our Team
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-neutral-600 dark:text-neutral-400">
          A lean, high-impact team combining human expertise and AI to deliver exceptional digital solutions.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-neutral-900 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-72 rounded-t-3xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {member.role}
                </p>
                <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
