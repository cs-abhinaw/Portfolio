function Home() {
  const containerStyle = {
    display: "flex",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
    // backgroundColor: "#f9f9f9",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "3rem",
    color: "#333",
    marginBottom: "20px",
    fontWeight: "600",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#666",
    maxWidth: "600px",
    margin: "0 auto",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Hello, I'm Abhinaw 👋</h1>
      <p style={paragraphStyle}>
        I'm a frontend developer passionate about creating clean UI.
      </p>
    </div>
  );
}

export default Home;
