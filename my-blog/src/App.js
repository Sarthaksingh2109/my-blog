
import React from "react";
import AppRouter from "./Components/AppRouter";
import posts from "./Components/Post";


function App() {
  return (
    <div className="App">
      <AppRouter posts={posts} />
    </div>
  );
}

export default App;
