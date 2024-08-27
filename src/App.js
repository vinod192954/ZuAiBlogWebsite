import './App.css';
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import Header from './components/Header';
import HomePage from './components/HomePage';
import BlogItemDetailed from './components/BlogItemDetailed';
import NewBlog from './components/NewBlog';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
          <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/blogs/addBlog" component={NewBlog} />
              <Route exact path="/blogs/:id" component={BlogItemDetailed} />
          </Switch>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
