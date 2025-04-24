function About() {
  const containerStyle = {
    padding: "110px 20px",
    textAlign: "center",
    backgroundColor: "#f0f8ff",
    minHeight: "80vh",
  };

  const headingStyle = {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "1rem",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#666",
    maxWidth: "600px",
    margin: "0 auto 2rem",
  };

  const skillsHeadingStyle = {
    fontSize: "1.5rem",
    marginTop: "2rem",
    marginBottom: "1rem",
    color: "#444",
  };

  const skillsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
  };

  const skillStyle = {
    backgroundColor: "#e0f7fa",
    padding: "10px 20px",
    borderRadius: "20px",
    fontSize: "1rem",
    color: "#333",
    border: "1px solid #b2ebf2",
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Tailwind",
    "Figma",
    "Node.js",
    "Express.js",
    "MongoDB",

  ];

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Me</h1>
      <p style={paragraphStyle}>
        I am a frontend developer passionate about web development.
      </p>

      <h2 style={skillsHeadingStyle}>Skills</h2>
      <div style={skillsContainerStyle}>
        {skills.map((skill, index) => (
          <span key={index} style={skillStyle}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default About;
