import './App.css';
import Body from './components/body/Body';
import Sidebar from './components/sidebar/Sidebar';
function App() {
  return (
    <div className='p-3 h-screen'>
      <div className="h-full rounded-xl flex">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
