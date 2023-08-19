import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.page';
import VideoDetail from './pages/VideoDetail.page.js';
import NotFoundPage from './pages/NotFoundPages'; // Import komponen NotFoundPage

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/videos/:videoId" component={VideoDetail} />
          <Route component={NotFoundPage} /> {/* Route untuk halaman tidak ditemukan */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
