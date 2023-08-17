import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex bg-gray-100 text-black">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
