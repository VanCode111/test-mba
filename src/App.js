import "./styles/index.scss";
import { Programms, OtherCards } from "./components";

function App() {
  return (
    <div className="main-page">
      <div className="main-page__container">
        <h1 className="main-page__title">Специализированные дисциплины</h1>
        <Programms />
        <OtherCards className="main-page__other-cards" />
      </div>
    </div>
  );
}

export default App;
