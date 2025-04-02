
import { Briefcase, Users, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="section-title">👤 About Dean</h2>
          <div className="w-20 h-1 bg-nordic-gold mx-auto mt-4 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="bg-nordic-offWhite p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-light text-nordic-blue mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-4">
              I'm a senior e-learning developer and instructional designer with a deep passion for creating training that actually helps people. Over the past two decades, I've designed and launched over 200 online university courses—transforming learning systems, reducing attrition, and improving engagement at scale.
            </p>
            <p className="text-gray-700">
              My professional journey has taken me from San Francisco to Seoul to Honolulu, all while building agile workflows, mentoring teams, and developing multimedia content that's inclusive and effective.
            </p>
          </div>

          <div className="bg-nordic-offWhite p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-light text-nordic-blue mb-4">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Briefcase className="text-nordic-gold mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-700">Build scalable, interactive learning experiences using Articulate 360, Brightspace (D2L), and Adobe tools</span>
              </li>
              <li className="flex items-start">
                <Code className="text-nordic-gold mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-700">Implement smart, efficient workflows using agile methodology and AI-enhanced tools</span>
              </li>
              <li className="flex items-start">
                <Users className="text-nordic-gold mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-700">Collaborate with cross-functional teams—from SMEs to engineers to healthcare pros—to create training that sticks</span>
              </li>
            </ul>
          </div>

          <div className="bg-nordic-offWhite p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-light text-nordic-blue mb-4">What Drives Me</h3>
            <p className="text-gray-700 mb-4">
              I believe learning should empower people—not overwhelm them. Whether it's healthcare education, university curriculum, or compliance training, I design with clarity, empathy, and purpose.
            </p>
            <p className="text-gray-700">
              My work sits at the intersection of design, communication, and well-being—and I bring all of myself to that work, including a background in anatomy, years of mindfulness practice, and a genuine desire to help people grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
