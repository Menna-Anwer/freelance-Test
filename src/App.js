import './App.scss';
import 'antd/dist/reset.css';
import Header from './Components/Header';
import Registration from './Components/Registration';

function App() {
  return (
    <div className="App" >
      <Header/>
      <Registration/>
    </div>
  );
}

export default App;
