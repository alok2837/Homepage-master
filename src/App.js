import "./App.css";
import Charity from "./components/Charity";
import Footer from './components/Footer';
function App() {
  const title = "CHARITIES";
  const desc =
    " 2% of all transaction on our platform will go to the charities,causes and communitites atheletes care about.";
    const image = {
    food: require("./charity_guest.png"),
  };

  return (
    <div>
      <Charity title_p={title} description={desc} imagesrc={image} />
    <>
	<Footer />
	</>
    </div>
  );
}

export default App;
