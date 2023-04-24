import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { Cards } from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Cards
        key={1}
        img={"https://picsum.photos/200/300"}
        title={"hola"}
        text={"hola"}
        href={"https://www.picsum.photos/"}
      />
    </div>
  );
}

export default App;
