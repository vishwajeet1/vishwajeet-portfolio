import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Design Systems', level: 90 },
    { name: 'Redux/State Management', level: 85 },
    { name: 'Authentication & Security', level: 85 },
    { name: 'Performance Optimization', level: 90 },
    { name: 'AI Integration', level: 80 },
    { name: 'System Architecture', level: 85 },
  ];

  const experiences: {
    title: string;
    company: string;
    period: string;
    description: string[];
    tags: string[];
  }[] = [
    {
        title: "Senior Software Engineer (SDE-2)",
        company: "Leap Finance | Leap Scholar",
        period: "2021 – Present (3 years)",
        description: [
            "Led the development of a scalable Design System, enhancing UI consistency and accelerating development workflows.",
            "Built a multi-tenant Mock Test Platform (IELTS, SAT, GRE) with AI-driven evaluations, enabling automated assessments.",
            "Onboarded AI for writing & speaking tests, significantly reducing teacher dependency and improving efficiency.",
            "Developed a secure authentication system, allowing seamless onboarding of multiple applications with robust access control.",
            "Optimized web performance by 400%, ensuring faster load times and an improved user experience."
        ],
        tags: ["Design Systems", "AI Integration", "Performance Optimization", "Authentication", "Full Stack Development"]
    },
    {
        title: "Software Engineer",
        company: "MountBlue Technologies",
        period: "2020 – 2021 (1+ year)",
        description: [
            "Developed a dynamic hotel booking platform using React, Redux, and Chakra UI, improving user experience.",
            "Built Task Manager & Todo applications, enhancing task organization and productivity.",
            "Revamped student onboarding, streamlining the process for a smoother and more engaging experience.",
            "Implemented modern UI/UX best practices, ensuring intuitive and responsive designs."
        ],
        tags: ["React", "Redux", "UI/UX", "Full Stack Development"]
    }
  ];

  const achievements = [
    'Built & launched 4 projects and 2 libraries from scratch',
    'Implemented localization & internationalization for multi-nation users',
    'Designed and developed in-house authentication app for secure access',
    'Led UI Design System implementation, boosting team efficiency',
    'Developed Private Equity Workflow system with role management'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-[#334155] mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Skills Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#334155] mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between">
                      <span className="text-[#475569] font-medium">{skill.name}</span>
                      <span className="text-[#6B7280]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#94A3B8] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={itemVariants} className="space-y-6 lg:col-span-2">
              <h3 className="text-2xl font-semibold text-[#334155] mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Work Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l-2 border-[#94A3B8] pb-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="absolute w-4 h-4 bg-[#94A3B8] rounded-full -left-[9px] top-0"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-[#334155]">{exp.title}</h4>
                          <p className="text-[#6B7280] font-medium">{exp.company}</p>
                          <p className="text-[#94A3B8] text-sm">{exp.period}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-[#F1F5F9] text-[#475569] text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ul className="list-disc list-inside text-[#475569] space-y-2">
                        {exp.description.map((item, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="hover:text-[#334155] transition-colors"
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}

                {/* Key Achievements Section */}
                <motion.div
                  className="relative pl-8 border-l-2 border-[#94A3B8]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="absolute w-4 h-4 bg-[#94A3B8] rounded-full -left-[9px] top-0"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-[#334155] mb-4">
                      Key Achievements
                    </h3>
                    <ul className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3 text-[#475569] hover:text-[#334155] transition-colors"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        >
                          <span className="text-[#94A3B8] mt-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 