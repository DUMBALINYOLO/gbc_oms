import axios from 'axios';
import {
        ADD_PRODUCT_CATEGORY,
        GET_PRODUCT_CATEGORIES,
        DELETE_PRODUCT_CATEGORY,
        GET_PRODUCT_CATEGORY,
        EDIT_PRODUCT_CATEGORY
    } from '../types/productTypes';
import { productcategoriesURL } from '../constants';

// Get
export const getProductCategories = () => dispatch => {
    axios.get(productcategoriesURL)
        .then(res => {
            dispatch({
                type: GET_PRODUCT_CATEGORIES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete
export const deleteProduct = (id) => dispatch => {
    axios.delete(productcategoriesURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PRODUCT_CATEGORY,
                payload: id
            });
        }).catch(err => console.log(err))
}

// Add
export const addProductCategory = (productcategory) => dispatch => {
    axios.post(productcategoriesURL, productcategory)
        .then(res => {
            dispatch({
                type: ADD_PRODUCT_CATEGORY,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getProductCategory = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/products/product-categories/${id}`)
        .then(res => {
            dispatch({
                type: GET_PRODUCT_CATEGORY,
                payload: res.data
            });
        }).catch(err => console.log(err))

}

//Edit
export const editProductCategory = (id, productcategory) => dispatch => {
    axios.put(`http://127.0.0.1:8000/api/products/product-categories/${id}`, productcategory)
        .then(res => {
            dispatch({
                type: EDIT_PRODUCT_CATEGORY,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
