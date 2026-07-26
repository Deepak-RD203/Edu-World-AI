"use client";

import { useState } from "react";

const features = [
  {
    title: "Knowledge World Model",
    description:
      "A live map of concepts, confidence, and revision needs that evolves with every session.",
  },
  {
    title: "Adaptive Study Planner",
    description:
      "Daily, weekly, and monthly plans tailor themselves to weak topics, available time, and exam calendars.",
  },
  {
    title: "AI Tutor in English & Tamil",
    description:
      "Explain ideas, simplify problems, and generate notes with a conversational tutor experience.",
  },
];

const roles = [
  { name: "Student", details: "Personalized learning loops, mock tests, and readiness analytics." },
  { name: "Teacher", details: "Performance heatmaps, class insights, and assignment orchestration." },
  { name: "Parent", details: "Attendance, study time, and weekly improvement snapshots." },
  { name: "Admin", details: "Course, exam, report, and notification control from one console." },
];

const faqs = [
  {
    question: "How does the Knowledge World Model help?",
    answer:
      "It turns raw study activity into a structured view of strengths, gaps, and next best actions so learning feels autonomous and adaptive.",
  },
  {
    question: "Can it support competitive exams?",
    answer:
      "Yes. EduWorld AI supports NEET, JEE, GATE, UPSC, TNPSC, SSC, CAT, bank exams, and semester preparation workflows.",
  },
  {
    question: "Does it support both light and dark mode?",
    answer:
      "Yes. The experience is designed for both light and dark environments with a smooth premium aesthetic.",
  },
];

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-[#030815] text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="rounded-full border border-white/10 bg-white/10 px-4 py-3 shadow-[0_0_60px_rgba(59,130,246,0.18)] backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                EduWorld AI
              </p>
              <p className="text-sm text-slate-400">Autonomous Personalized Learning Ecosystem</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#features"
                className="rounded-full border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10"
              >
                Explore Platform
              </a>
              <button
                type="button"
                onClick={() => setIsDark((value) => !value)}
                className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-800"
              >
                {isDark ? "☀️ Light" : "🌙 Dark"}
              </button>
            </div>
          </div>
        </header>

        <main className="pt-6">
          <section className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 p-6 shadow-[0_0_100px_rgba(34,211,238,0.15)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
                Premium AI learning • Hackathon-ready experience
              </div>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Your Personal <span className="text-cyan-300">AI Learning Companion.</span>
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                EduWorld AI continuously maps a student&apos;s knowledge, predicts readiness,
                recommends smarter study paths, and powers exam preparation with a futuristic
                learning experience.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#roles"
                  className="rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  View Dashboards
                </a>
                <a
                  href="#faq"
                  className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Features
                </a>
              </div>
              <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-400">
                <span className="rounded-full border border-white/10 px-3 py-1">Adaptive quizzes</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Competitive exam support</span>
                <span className="rounded-full border border-white/10 px-3 py-1">AI tutor</span>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl">
              <div className="rounded-[1.4rem] border border-cyan-400/20 bg-gradient-to-br from-slate-900 to-slate-800 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-cyan-300">Student Knowledge World Model</p>
                    <p className="text-xl font-semibold">Live Learning Map</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-300">
                    Synced
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    { label: "Student", level: "92%" },
                    { label: "Subjects", level: "7 tracked" },
                    { label: "Units", level: "18 active" },
                    { label: "Topics", level: "63 mastered" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 p-3">
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>{item.label}</span>
                        <span className="font-semibold text-white">{item.level}</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-800">
                        <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" style={{ width: "78%" }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 p-3 text-sm">
                    <p className="text-fuchsia-200">Strong Topics</p>
                    <p className="mt-1 text-xl font-semibold text-white">Algebra • Organic</p>
                  </div>
                  <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-3 text-sm">
                    <p className="text-amber-200">Weak Topics</p>
                    <p className="mt-1 text-xl font-semibold text-white">Vectors • Thermodynamics</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="mt-8 grid gap-4 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/8 p-6 shadow-lg backdrop-blur-xl"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Feature
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{feature.title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{feature.description}</p>
              </article>
            ))}
          </section>

          <section className="mt-8 grid gap-4 rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Why it stands out</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Built for every learner, from classroom to competitive exams.
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
                The platform combines autonomous recommendation, exam readiness analysis, and a
                premium interface that feels as polished as modern AI products.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["AI Quiz Generator", "MCQs, HOTS, case studies, and long answers"],
                ["Smart Revision Engine", "Prioritizes weak concepts and past mistakes"],
                ["AI Mock Tests", "Timer, analytics, negative marking, and rank prediction"],
                ["Career Navigator", "Paths, internships, and roadmap guidance"],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="roles" className="mt-8">
            <div className="mb-4 flex items-end justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Role-based experience</p>
                <h2 className="text-3xl font-semibold text-white">Tailored dashboards for every stakeholder</h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {roles.map((role) => (
                <article key={role.name} className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-xl">
                  <h3 className="text-xl font-semibold text-white">{role.name}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{role.details}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="faq" className="mt-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-6 lg:p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Frequently asked questions</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Everything your hackathon demo needs to impress</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  <summary className="cursor-pointer font-semibold text-white">{faq.question}</summary>
                  <p className="mt-3 leading-7 text-slate-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/8 px-6 py-6 text-sm text-slate-300 backdrop-blur-xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-white">EduWorld AI</p>
              <p>Modern learning, autonomous guidance, and premium digital experience.</p>
            </div>
            <div className="flex gap-4">
              <a href="#features" className="transition hover:text-cyan-300">Features</a>
              <a href="#roles" className="transition hover:text-cyan-300">Roles</a>
              <a href="#faq" className="transition hover:text-cyan-300">FAQ</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
