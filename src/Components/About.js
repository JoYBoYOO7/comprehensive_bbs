const About = () => {
  return (
    <div className="w-full h-screen flex bg-[#FCFAEE] overflow-hidden">
      <div className="outline-dashed outline-2 outline-offset-2 w-4/5 h-4/5 m-4 mx-auto flex flex-col flex-wrap overflow-y-auto">
        <div>
          <h1 className="text-xl font-bold font-mono p-4">
            The Story Behind This Quiz Site❓
          </h1>
          <h4 className="p-2">
            Let's go back to my 7th semester… Placement season was around the
            corner, and suddenly, the one-credit Comprehensive Exam was on the
            radar too. The question bank? 1600 questions with zero answers. Yep,
            none. What followed was a long, exhausting hunt to figure out each
            answer and try to prepare without losing it. That's when I thought,
            “Why not build something to make this easier for every VITian?”
          </h4>
        </div>
        <div>
          <h1 className="text-xl font-bold font-mono p-4">The Idea 💡</h1>
          <h4 className="p-2">
            I realized I couldn’t be the only one struggling, so I set out to
            create a site to bridge the gap—a study and revision tool for all
            future VIT B.Tech students facing the comprehensive exam challenge!
          </h4>
        </div>
        <div>
          <h1 className="text-xl font-bold font-mono p-4">
            Why This Site Exists 📣
          </h1>
          <h4 className="p-2">
            The idea was simple: create a website where all 1600 questions come
            with their correct answers, giving you a way to quiz yourself,
            revise, and know if you’re on the right track. Think of it as a
            study buddy for your comprehensive exam who doesn’t judge if you’ve
            forgotten one core or elective subject from your first year.
          </h4>
        </div>
        <div>
          <h1 className="text-xl font-bold font-mono p-4">
            How It Works? (Without the Boring Stuff) ⚙️
          </h1>
          <h4 className="p-2">
            No complex algorithms or convoluted study plans here. Just open the
            website, read the instructions of the examination, click on the
            "Begin Quiz" and start answering the questions to see where you
            stand. It’s designed to be easy, stress-free, and—dare I say—almost
            fun?
          </h4>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap"
      />
    </div>
  );
};

export default About;
