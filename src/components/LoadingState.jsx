function LoadingState() {
    return (
      <div className="app-container">
        <h1 className="title">Company Directory</h1>
        <div className="loading animate-fade-in">
          <div className="loading-spinner"></div>
          <h2>Loading companies...</h2>
          <p>Please wait while we fetch the latest data</p>
        </div>
      </div>
    );
  }
  
  export default LoadingState;