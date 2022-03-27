import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Hero/hero";
import Aboutme from "./Aboutme/Aboutme";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "./Footer/Footer";

function App() {
	return (
		<>
			<Hero></Hero>
			<Aboutme></Aboutme>
			<Skills></Skills>
			<Portfolio></Portfolio>
			<Footer></Footer>
		</>
	);
}

export default App;
