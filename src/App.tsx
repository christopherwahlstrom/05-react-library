import { useState } from 'react'
import './App.scss'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div id="app">
			<header>
				Bibblan
			</header>
			<main>
				<h1> Våra böcker </h1>
				<div className="book-grid">
					<div className="card">
						<h3> Bokens titel </h3>
						<img alt="bild" />
						<p> Författare </p>
						<button> Låna </button>
					</div>
					<div className="card">
						<h3> Bokens titel </h3>
						<img alt="bild" />
						<p> Författare </p>
						<button className="return"> Återlämna </button>
					</div>
					<div className="card">
						<h3> Bokens titel </h3>
						<img alt="bild" />
						<p> Författare </p>
						<button> Låna </button>
					</div>
					<div className="card">
						<h3> Bokens titel </h3>
						<img alt="bild" />
						<p> Författare </p>
						<button> Låna </button>
					</div>
					<div className="card">
						<h3> Bokens titel </h3>
						<img alt="bild" />
						<p> Författare </p>
						<button> Låna </button>
					</div>
				</div>
			</main>
			<footer>
				Kontakta oss
			</footer>
		</div>
	)
}

export default App
