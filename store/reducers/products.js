import PRODUCTS from  '../../data/dummy-data';

const initialState ={
  availableProducts:PRODUCTS,
  userProduct:PRODUCTS.filter(prod => prod.owerIs==='u1')
};

export default (state = initialState, action) =>{
    return state;
}