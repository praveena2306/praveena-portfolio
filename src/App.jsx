

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

        <div className="flex justify-center gap-4 flex-wrap">

          <button className="bg-sky-500 px-8 py-3 rounded-2xl text-black font-semibold hover:bg-sky-400 transition">
            View Projects
          </button>

          <button className="border border-slate-600 px-8 py-3 rounded-2xl hover:border-sky-400 hover:text-sky-400 transition">
            Download Resume
          </button>

        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-slate-900/40 text-center">

        <h2 className="text-4xl font-bold mb-10">
          About <span className="text-sky-400">Me</span>
        </h2>

        <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
          Motivated Information Technology student passionate about
          software development, cloud computing, Java, Python,
          UI/UX design, and modern web technologies.
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

      {/* Projects */}
      <section className="py-24 px-6 bg-slate-900/40 text-center">

        <h2 className="text-4xl font-bold mb-16">
          Featured <span className="text-sky-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              DSA Problem Tracker
            </h3>

            <p className="text-slate-400">
              Java application to track and manage DSA problems
              using OOP concepts.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              E-Commerce Order Management
            </h3>

            <p className="text-slate-400">
              Inventory and order management system for e-commerce workflows.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Let's Work <span className="text-sky-400">Together</span>
        </h2>

        <p className="text-slate-400 text-lg mb-12">
          Open to internships and collaborations.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-sky-400 text-xl font-semibold mb-3">
              Email
            </h3>

            <p className="text-slate-300">
              korasikhapraveena5@gmail.com
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-sky-400 text-xl font-semibold mb-3">
              GitHub
            </h3>

            <p className="text-slate-300">
              github.com/praveena2306
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-sky-400 text-xl font-semibold mb-3">
              LinkedIn
            </h3>

            <p className="text-slate-300">
              linkedin.com/in/korasikha-praveena
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}
