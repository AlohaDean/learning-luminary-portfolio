
const Philosophy = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="section-title">🌟 Professional Philosophy</h2>
          <div className="w-20 h-1 bg-nordic-gold mx-auto mt-4 mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12 bg-nordic-blue bg-opacity-5 p-8 rounded-lg border-l-4 border-nordic-blue">
            <h3 className="text-2xl font-light text-nordic-blue mb-4">Design for People. Deliver with Purpose.</h3>
            <p className="text-gray-700 mb-4">
              Learning is personal. That's why I listen first, design with intention, and always focus on the learner experience. Whether I'm building interactive media or revamping a QA process, my goal is to reduce friction and make learning feel natural.
            </p>
            <p className="text-gray-700">
              I don't just follow trends—I apply what works, tailor it to the team, and make it scalable.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-gradient-to-r from-nordic-blue to-nordic-lightBlue text-white">
            <h3 className="text-2xl font-light mb-4">🎯 Vision Statement</h3>
            <p className="text-xl italic">
              To create accessible, human-centered digital learning experiences that elevate understanding, support career growth, and make lasting impact—across teams, industries, and cultures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
