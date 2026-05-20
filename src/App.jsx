export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 text-center">

        <h1 className="text-6xl font-bold mb-6">
          PRAVEENA
          <span className="text-sky-400"> KORASIKHA</span>
        </h1>

        <p className="text-slate-300 text-xl mb-8">
          B.Tech IT Student • Developer • Cloud Enthusiast
        </p>

      </section>

      {/* Skills */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-4xl font-bold mb-16">
          Technical <span className="text-sky-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-2xl text-sky-400 font-bold mb-6">
              Programming
            </h3>

            <p>Python • Java • C</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-2xl text-sky-400 font-bold mb-6">
              Web Technologies
            </h3>

            <p>HTML • CSS • Responsive Design</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-2xl text-sky-400 font-bold mb-6">
              Tools
            </h3>

            <p>Git • GitHub • VS Code</p>
          </div>

        </div>
      </section>

      {/* Certificates */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-4xl font-bold mb-16">
          My <span className="text-sky-400">Certificates</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="text-5xl mb-6">🏆</div>

            <h3 className="text-2xl font-bold mb-4">
              Python Programming
            </h3>

            <p className="text-slate-400 mb-6">
              Certification in Python fundamentals.
            </p>

            <a
              href="#"
              className="text-sky-400"
            >
              View Certificate →
            </a>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="text-5xl mb-6">☁️</div>

            <h3 className="text-2xl font-bold mb-4">
              Cloud Computing
            </h3>

            <p className="text-slate-400 mb-6">
              Cloud fundamentals and services.
            </p>

            <a
              href="#"
              className="text-sky-400"
            >
              View Certificate →
            </a>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="text-5xl mb-6">💻</div>

            <h3 className="text-2xl font-bold mb-4">
              Java Programming
            </h3>

            <p className="text-slate-400 mb-6">
              Java and OOP certification.
            </p>

            <a
              href="#"
              className="text-sky-400"
            >
              View Certificate →
            </a>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="text-5xl mb-6">🧠</div>

            <h3 className="text-2xl font-bold mb-4">
              Communication Skills
            </h3>

            <p className="text-slate-400 mb-6">
              Professional communication certification.
            </p>

            <a
              href="#"
              className="text-sky-400"
            >
              View Certificate →
            </a>
          </div>

        </div>
      </section>

    </div>
  )
}
