import Link from "next/link";
import { Weight, Pill, Leaf, Activity, ArrowUpRight } from "lucide-react";

const tools = [
  {
    icon: Weight,
    title: "Weight Estimator",
    desc: "Estimate your horse's weight using body measurements. Essential before medicating or feeding.",
    href: "/tools/weight-calculator",
    color: "var(--gold)",
  },
  {
    icon: Pill,
    title: "Dosage Calculator",
    desc: "Calculate medication dosages based on horse weight. Always confirm with your vet.",
    href: "/tools/dosage-calculator",
    color: "var(--forest)",
  },
  {
    icon: Leaf,
    title: "Nutrition Planner",
    desc: "Get tailored feeding guidance based on your horse's type, age, weight, and workload.",
    href: "/tools/nutrition-planner",
    color: "var(--forest)",
  },
  {
    icon: Activity,
    title: "Lameness Tracker",
    desc: "Log and track lameness symptoms over time. Spot worsening trends and know when to call.",
    href: "/tools/lameness-tracker",
    color: "var(--gold)",
  },
];

export default function ToolsSection() {
  return (
    <section className="section-light section border-y border-[var(--border)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Text */}
          <div className="lg:col-span-2">
            <div className="pill-badge">
              <span className="dot" />
              Smart Tools
            </div>
            <h2 className="text-[var(--text-primary)] mb-6 leading-[1.1] text-4xl lg:text-[56px] font-bold">
              Smart <span className="italic font-display font-medium text-[var(--gold)]">Veterinary Tools</span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Practical tools designed for horse owners. Use them to better understand your horse&apos;s health — 
              and to know when to call the vet.
            </p>
            <p className="text-[var(--text-subtle)] text-sm leading-relaxed mb-8">
              ⚠️ All tools include medical disclaimers. They are for informational purposes only 
              and do not replace professional veterinary advice.
            </p>
            <Link
              href="/tools"
              className="btn btn-primary"
            >
              Explore All Tools
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* Right: Tool Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="group block bg-[var(--bg-primary)] border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--gold)]/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: `${tool.color}18`,
                      border: `1px solid ${tool.color}25`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: tool.color }} />
                  </div>
                  <h3
                    className="text-[var(--text-primary)] font-semibold text-base mb-2 group-hover:text-[var(--gold)] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {tool.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{tool.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
