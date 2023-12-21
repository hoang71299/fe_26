
import '../App.css';
import Header from './Header';
import Search from './Search';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="container" >
          <div class="row">
            <Search/>
          </div>
        </div>
    </div>
       
  );
}

export default App;
