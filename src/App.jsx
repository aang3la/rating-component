import './App.css';
import logo from "./assets/VASS_logo.png";
import StarRating from './StarRating/StarRating';

function App() {
  return (
    <section>
      <h1 id="main-heading">Please rate</h1>
      <StarRating />
      <p id="paragraph">Your Feedback Is Very Important To Us.</p>
      <img src={logo} id="logo" alt="logo" />
    </section>
  )
};

export default App;
