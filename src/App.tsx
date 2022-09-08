import { useState } from 'react'
import './App.scss'
import BookGrid from './components/book-grid/BookGrid'
import { Book, Borrow } from './models/data'
import jsonData from './data/json.json'

function App() {
	// books och borrowList har flyttat till Redux state
	// const [books, setBooks] = useState<Book[]>(jsonData.books)
	// const [borrowList, setBorrowList] = useState<Borrow[]>([])

	/*  Detta händer i BookCard i stället
	const handleBorrowClick = (bookId: number) => {
		let borrow: Borrow = {
			borrowId: 1,  // TODO: fixa detta sen!
			bookId: bookId
		}
		let newBorrowList = [ ...borrowList, borrow ]
		setBorrowList(newBorrowList)
		// Tips: immer.js
	}
	const handleReturnClick = (bookId: number) => {
		let newBorrowList = borrowList.filter(borrow => borrow.bookId !== bookId)
		setBorrowList(newBorrowList)
	}*/

	return (
		<div id="app">
			<header>
				Bibblan
			</header>
			<main>
				<h1> Våra böcker </h1>
				<BookGrid />
			</main>
			<footer>
				Kontakta oss
			</footer>
		</div>
	)
}

export default App
