function Projects() {
  const containerStyle = {
    padding: '90px',
    // backgroundColor: '#f9f9f9',
    minHeight: '80vh',


  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '1rem'
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '2rem'
  };

  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '25px', // Reduced padding slightly
    height: '200px',
    width: '250px', // Made cards slightly narrower to fit 3+ in a row
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'left'
  };

  const projectTitleStyle = {
    fontSize: '1.3rem',
    color: '#007bff',
    marginBottom: '5px'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>My Projects</h1>
      <p style={paragraphStyle}>Here are some awesome projects I've worked on!</p>

      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <h3 style={projectTitleStyle}>📁 Todo App</h3>
          <p>A simple todo app built with React and localStorage.</p>
          <a href="https://github.com/yourname/todo-app" target="_blank" style={linkStyle}>
            View on GitHub
          </a>
        </div>

        <div style={cardStyle}>
          <h3 style={projectTitleStyle}>🎥 Watch Together</h3>
          <p>A group video syncing app built with React and Node.js.</p>
          <a href="https://github.com/yourname/watch-together" target="_blank" style={linkStyle}>
            View on GitHub
          </a>
        </div>

        <div style={cardStyle}>
          <h3 style={projectTitleStyle}>Portfolio website</h3>
          <p>An interactive portfolio website build on React.</p>
          <a href="https://github.com/yourname/data-visualizer" target="_blank" style={linkStyle}>
            View on GitHub
          </a>
        </div>

        <div style={cardStyle}>
          <h3 style={projectTitleStyle}>🛒 Resume website</h3>
          <p>A Resume website build with Express.</p>
          <a href="https://github.com/yourname/ecommerce-store" target="_blank" style={linkStyle}>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;