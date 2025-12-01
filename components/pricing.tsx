export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: "Ksh 15,000",
      description:
        "Perfect for individuals or small teams needing basic automation.",
      features: [
        "3 business process automations",
        "Basic dashboard",
        "Email support",
        "Monthly performance reports",
      ],
    },
    {
      name: "Growth",
      price: "Ksh 45,000",
      highlight: true,
      description: "For growing businesses that want serious efficiency.",
      features: [
        "10+ custom automations",
        "Advanced analytics dashboard",
        "Priority support",
        "AI assistants for staff",
        "API integrations",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Full automation suite for companies operating at scale.",
      features: [
        "Unlimited automation workflows",
        "Dedicated engineering team",
        "On-site & remote support",
        "Private hosting available",
        "Enterprise-grade security",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-6">Pricing</h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Transparent pricing built for teams of all sizes. Pay for what you use
          — scale when youre ready.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`border rounded-2xl p-8 shadow-sm ${
                tier.highlight
                  ? "bg-black text-white shadow-lg scale-105"
                  : "bg-gray-50"
              }`}
            >
              <h3 className="text-3xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-4xl font-bold mb-4">{tier.price}</p>
              <p className={tier.highlight ? "text-gray-300" : "text-gray-600"}>
                {tier.description}
              </p>

              <ul className="mt-6 space-y-3">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2">✔</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-xl font-semibold border ${
                  tier.highlight
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
