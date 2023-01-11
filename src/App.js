import './App.scss';
import 'antd/dist/reset.css';
import Header from './Components/Header';
import Registration from './Components/Registration';
import NewTable from './Components/NewTable';

function App() {
  return (
    <div className="App" >
      <Header/>
      <Registration/>
      <NewTable/>
    </div>
  );
}

export default App;
