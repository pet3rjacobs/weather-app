import Search from './Components/Search/Search';
import './App.css';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log('Hi');
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
