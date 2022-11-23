import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./MoviesApp.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/reviews"><Trending/></Route>
            <Route exact path="/reviews/movies"><Movies/></Route>
            <Route exact path="/reviews/series"><Series/></Route>
            <Route exact path="/reviews/search"><Search/></Route>
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
