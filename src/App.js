import "./App.css";
import Body from "./components/body/Body";
import Sidebar from "./components/sidebar/Sidebar";
import SliderState from "./contexts/SliderState";
function App() {
  return (
    <SliderState>
      <div className="p-3 h-screen">
        <div className="h-full rounded-xl flex">
          <Sidebar />
          <Body />
        </div>
      </div>
    </SliderState>
  );
}

export default App;
