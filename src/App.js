import { RouterProvider } from "react-router-dom";
import "./App.css";
import route from "./components/Router/Router";

function App() {
  return (
    <main className="App">
      <RouterProvider router={route}></RouterProvider>
    </main>
  );
}

export default App;
