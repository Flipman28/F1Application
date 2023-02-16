import './mainPage.css';
import Header from './header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeaturedF1 from './featured-f1';
import SearchResults from '../search-results';
import F1Filter from './f1-filter';
import F1FromQuery from '../f1/F1FromQuery';
import useF1s from '../hooks/useF1s';
import useFeaturedF1 from '../hooks/useFeaturedF1';
import F1sContext from '../context/f1sContext';

function App() {

  //Exécution des hooks dans d'autres fichiers
  const allF1s = useF1s();
  const featuredF1 = useFeaturedF1(allF1s);

  return (
    <Router>
      <F1sContext.Provider value={allF1s}>
        <div className="container"> 
          <Header subtitle="Formula 1 Cars around the world !"/>
          <F1Filter />
          <Switch>
            <Route path="/searchresults/:country">
              <SearchResults />
            </Route>

            <Route path="/f1/:id">
             <F1FromQuery />
            </Route>

            <Route path="/">
              <FeaturedF1 f1={featuredF1}></FeaturedF1>
            </Route>
          </Switch>
        </div>
      </F1sContext.Provider>
    </Router>
  );
}

export default App;
