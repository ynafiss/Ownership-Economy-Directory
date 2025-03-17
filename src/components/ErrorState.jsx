function ErrorState({ error }) {
    return (
      <div className="app-container">
        <h1 className="title">Company Directory</h1>
        <div className="error animate-fade-in">
          <div className="error-icon">⚠️</div>
          <h2>Error Loading Data</h2>
          <p>We encountered a problem: {error}</p>
          <button className="card-btn btn-primary" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  export default ErrorState;