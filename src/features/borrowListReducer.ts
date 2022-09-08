import { createAction, createReducer } from '@reduxjs/toolkit'

import { Borrow } from '../models/data'
import jsonData from '../data/json.json'

// ACTIONS
// Låna och återlämna
const doBorrow = createAction<number>('Borrow a book')
const doReturn = createAction<number>('Return a book')

const actions = { doBorrow, doReturn }


// REDUCER
const initialState: Borrow[] = jsonData.borrows

const reducer = createReducer(initialState, {
	[doBorrow.toString()]: (state, action) => {
		let borrow: Borrow = { borrowId: 1, bookId: action.payload }
		// Next version: unique borrow id's
		let newBorrowList = [ ...state, borrow ]
		return newBorrowList
	},

	[doReturn.toString()]: (state, action) => state.filter(b => b.bookId !== action.payload)
})

export { actions, reducer }
