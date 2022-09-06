import { Book, Borrow } from '../../models/data'
import BookCard from './BookCard'

interface Props {
	books: Book[];
	borrowList: Borrow[];
	handleReturnClick: (bookId: number) => void;
	handleBorrowClick: (bookId: number) => void;
}

// Obs! Är också ok att skriva: (props: Props)
const BookGrid = ({ books, borrowList, handleReturnClick, handleBorrowClick }: Props) => (
	<div className="book-grid">
		{books.map(book => (
			<BookCard key={book.bookId} book={book} handleReturnClick={handleReturnClick} handleBorrowClick={handleBorrowClick} borrowList={borrowList} />
		))}
	</div>
)



export default BookGrid
