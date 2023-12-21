
import '../App.css';
import Header from './Header';
import List from './List';
import Search from './Search';
import UserName from './UserName';

function App() {
  return (
    <div >
        <Header/>
        <div className="container" >
          <div className="row">
            <Search/>
            <List/>
            <UserName/>
          </div>
        </div>
    </div>
       
  );
}

export default App;
