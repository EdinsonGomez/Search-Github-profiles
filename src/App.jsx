import { useReducer } from "react";
import { initialState, reducer } from "./store/store";
import AppContext from "./store/context";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import ListProfiles from "./components/ListProfiles";
import "./styles/app.scss";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Navigation />
        <div className="app-content">
          <SearchBar />
          <ListProfiles />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
