// import { defineStore } from "pinia"

// //Define interfaces
// export interface Product {
// 	_id: string,
// 	productName: string,
// 	productPrice: number
// 	productCategory: string,
// 	productImage: string
// }

// export interface ProductState {
// 	products: Product[] | undefined
// }

// export interface NewProduct {
// 	productName: string,
// 	productPrice: number
// 	productCategory: string,
// 	productImage: string
// }

// // Define state
// const state = (): ProductState => ({
// 	products: [],
// })

// // Define store Getters
// const getters = {
// 	getProductById: (state: ProductState) => (id: string) => {
// 		return state.products.find(product => product._id === id)
// 	}
// };

// // Define store Actions
// const actions = {
// 	async getProducts() {
// 		const { data: products } = await useFetch("localhost:3030/products")
// 		this.state.products = products
// 	},
// 	async addProduct(newProduct: NewProduct) {

// 	}
// }

// export const useProducts = defineStore("productsStore", {
// })
