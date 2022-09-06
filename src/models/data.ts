
export interface Book {
	title: string;
	author: string;
	imageUrl: string;
	bookId: number;
}
// jämfört med MongoDB/neDB: Book motsvarar ett dokument i en collection

export interface User {
	name: string;
	borrowId: number;  // string hade också funkat
	email: string;
}

export interface Borrow {
	borrowId: number;
	bookId: number;
}
