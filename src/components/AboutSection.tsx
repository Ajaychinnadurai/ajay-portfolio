import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import AnimatedText from './AnimatedText';

const ABOUT_TEXT =
  "I'm an M.Sc. Artificial Intelligence student with hands-on experience building end-to-end ML/DL pipelines, interactive BI dashboards, and deployed Flask web applications. Proficient in Python, TensorFlow, PyTorch, and Power BI with a strong foundation in statistical analysis, feature engineering, and model evaluation. I translate data into measurable business impact.";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Corner decorative 3D images */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[60px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-full h-auto"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[55px] sm:w-[140px] md:w-[180px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-full h-auto"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[60px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-full h-auto"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[65px] sm:w-[170px] md:w-[220px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-full h-auto"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20">
          {/* Stylized Portrait */}
          <FadeIn delay={0.08} y={20} className="w-[160px] sm:w-[200px] md:w-[240px] h-[160px] sm:h-[200px] md:h-[240px] rounded-full overflow-hidden border-4 border-[#D7E2EA]/15 shadow-[0_0_50px_rgba(215,226,234,0.08)]">
            <img
              src="/ajay_portrait.png"
              alt="Ajay C Portrait"
              className="w-full h-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="font-medium leading-relaxed text-[#D7E2EA] max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          {/* Skills */}
          <FadeIn delay={0.15} className="w-full max-w-3xl">
            <div className="flex flex-col gap-5 sm:gap-6">
              {[
                {
                  label: 'Programming',
                  items: ['Python', 'SQL', 'R (basic)'],
                },
                {
                  label: 'Machine Learning',
                  items: ['Supervised Learning', 'Unsupervised Learning', 'Feature Engineering', 'Model Evaluation', 'Regression', 'Classification', 'Clustering'],
                },
                {
                  label: 'Deep Learning',
                  items: ['LSTM', 'RNN', 'CNN', 'Neural Networks', 'TensorFlow', 'Keras', 'PyTorch'],
                },
                {
                  label: 'Data & BI',
                  items: ['Power BI', 'DAX', 'MS Excel', 'EDA', 'Data Cleaning', 'Matplotlib', 'Seaborn'],
                },
                {
                  label: 'Databases',
                  items: ['MySQL', 'MongoDB'],
                },
                {
                  label: 'Tools & Platforms',
                  items: ['Jupyter Notebook', 'Google Colab', 'Git', 'GitHub', 'Flask', 'VS Code'],
                },
              ].map((group) => (
                <div
                  key={group.label}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-5"
                >
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 sm:w-44 sm:shrink-0 sm:text-right">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.03] px-3 py-1 text-sm text-[#D7E2EA]/80 hover:border-[#D7E2EA]/40 hover:text-[#D7E2EA] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Education & Certifications */}
          <FadeIn delay={0.2} className="w-full max-w-3xl border-t border-[#D7E2EA]/10 pt-10 mt-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
              {/* Education */}
              <div className="flex flex-col gap-5">
                <h3 className="text-xs uppercase tracking-widest text-[#D7E2EA]/40">
                  Education
                </h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-base font-semibold text-[#D7E2EA]">
                      M.Sc. Artificial Intelligence
                    </h4>
                    <p className="text-sm text-[#D7E2EA]/60 mt-1">
                      Bharathiar University, Coimbatore
                    </p>
                    <p className="text-xs text-[#D7E2EA]/40 mt-0.5">
                      2025 – 2027 (Expected)
                    </p>
                  </div>
                  <div className="border-t border-[#D7E2EA]/5 pt-3">
                    <h4 className="text-base font-semibold text-[#D7E2EA]">
                      B.Sc. Data Science
                    </h4>
                    <p className="text-sm text-[#D7E2EA]/60 mt-1">
                      Nehru Memorial College (Autonomous), Trichy
                    </p>
                    <p className="text-xs text-[#D7E2EA]/40 mt-0.5">
                      2022 – 2025 | CGPA: 8.5 / 10
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications & Achievements */}
              <div className="flex flex-col gap-5">
                <h3 className="text-xs uppercase tracking-widest text-[#D7E2EA]/40">
                  Certifications & Achievements
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    { title: 'AI Fluency: Framework & Foundations', provider: 'Anthropic' },
                    { title: 'Introduction to Data Analytics', provider: 'Simplilearn' },
                    { title: 'Introduction to Applied Data Science with Python', provider: 'Simplilearn' },
                    { title: 'Retail Sales & Growth Analysis Dashboard', provider: 'Novitech' },
                    { title: 'Leadership Experience (Data Vision Day)', provider: 'Organized & led data science event' },
                  ].map((cert, index) => (
                    <li key={index} className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium text-[#D7E2EA]">
                        {cert.title}
                      </span>
                      <span className="text-xs text-[#D7E2EA]/50">
                        {cert.provider}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <ContactButton />
          </FadeIn>
        </div>      </div>
    </section>
  );
};

export default AboutSection;
