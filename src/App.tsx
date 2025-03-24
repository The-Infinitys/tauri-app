import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <main className="container">
        <div className="left-menu">
          <h1>Menu</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="page-content">
          <MainPage />
        </div>
      </main>
    </>
  );
}

export default App;
