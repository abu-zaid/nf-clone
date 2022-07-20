import "./App.css";
import Row from "./components/Row";
import requests from "./configs/requests";

function App() {
  return (
    <div className="App">
      <Row
        title="Netflix Top Movies"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Documentaires" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
