import "./App.css";
import Row from "./components/Row";
import requests from "./configs/requests";

function App() {
  return (
    <div className="App">
      <Row
        title="Netflix Top Movies"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" />
      <Row title="Action Movies" />
    </div>
  );
}

export default App;
