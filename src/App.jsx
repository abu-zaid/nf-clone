import "./App.css";
import Row from "./components/Row";
import requests from "./configs/requests";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header fetchURL={requests.fetchTrending} />
      <Row
        title="Netflix Top Movies"
        fetchURL={requests.fetchNetflixOriginals}
        posterBoy
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
