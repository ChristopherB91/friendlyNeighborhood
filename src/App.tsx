import Header from "./components/header";
import TaskList from "./components/lowerHalf";
import "./App.css";
import { DataProvider } from "./context/fetch";

function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <TaskList />
      </DataProvider>
    </>
  );
}

export default App;
