import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './features/rootReducer'

const store = configureStore({
	reducer: rootReducer
})

// Nytt med TypeScript
// TODO: exportera store-objektets datatyp

export { store }
