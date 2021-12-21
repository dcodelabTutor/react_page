import './css/style.css';
import { Logo, Menu } from './components/Header.js';
import Panel from './components/Panel.js';
import Footer from './components/Footer.js';

//npm install gh-pages --save-dev



function App() {
	return (
		<div className="App">
			{/* 전체 레이아웃 */}
			<figure>
				<Logo />
				<Menu />

				<section>
					<Panel />
				</section>

				<Footer />
			</figure>
		</div>
	);
}

export default App;
