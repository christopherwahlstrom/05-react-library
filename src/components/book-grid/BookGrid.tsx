import { Book, Borrow } from '../../models/data'
import BookCard from './BookCard'
import { useSelector } from 'react-redux'

interface Props {
	// books: Book[];  <- har flyttat till Redux state
	borrowList: Borrow[];
	handleReturnClick: (bookId: number) => void;
	handleBorrowClick: (bookId: number) => void;
}

// Obs! Är också ok att skriva: (props: Props)
const BookGrid = ({ borrowList, handleReturnClick, handleBorrowClick }: Props) => {
	const books = useSelector(state => state.books)
	
	return (
		<div className="book-grid">
			{books.map(book => (
				<BookCard key={book.bookId} book={book} handleReturnClick={handleReturnClick} handleBorrowClick={handleBorrowClick} borrowList={borrowList} />
			))}
		</div>
	)
}



export default BookGrid
