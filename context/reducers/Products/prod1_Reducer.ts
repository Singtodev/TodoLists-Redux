export interface Product {
    id:                 number;
    title:              string;
    description:        string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           string;
    thumbnail:          string;
    images:             string[];
}

export interface ProductOneStateProps {
    data: Product[],
    isLoading: boolean,
    error: any,
}

const initialState: ProductOneStateProps = {
    data: [],
    isLoading: false,
    error: null,
};

export default function ProductOneReducer(state = initialState, action) {
    switch (action.type) {
      case "FETCH_DATA_REQUEST":
        return { ...state, isLoading: true, error: null };
      case "FETCH_DATA_SUCCESS":
        return { ...state, isLoading: false, data: action.data };
      case "FETCH_DATA_FAILURE":
        return { ...state, isLoading: false, error: action.error };
      default:
        return state;
    }
  }