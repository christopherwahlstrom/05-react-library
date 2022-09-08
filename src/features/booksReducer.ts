import { createAction, createReducer } from '@reduxjs/toolkit'

import { Book } from '../models/data'
import jsonData from '../data/json.json'

// ACTIONS
// Det finns inga actions!

// REDUCER
const initialState: Book[] = jsonData.books

const reducer = createReducer(initialState, {
	// Inga actions - inga reducer-funktioner här
})


export { reducer }
