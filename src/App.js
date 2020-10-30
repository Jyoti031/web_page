import './App.css';
import AppHeader from "./components/AppHeader";
import TabsBar from "./components/TabsBar";
import SidePanel from "./components/SidePanel";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <TabsBar />
      <SidePanel />
    </div>
  );
}

export default App;
