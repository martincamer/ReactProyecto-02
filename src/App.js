import Header from "./components/header/header";
import Seccion from "./components/main/main";
import "./tailwind/index.css";
import "./sass/style.scss";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Seccion></Seccion>
    </div>
  );
}

export default App;
