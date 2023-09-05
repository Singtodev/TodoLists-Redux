
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess  } from "../../../context/actions/Products/prod1_action";


export const ProductFetching = async (Dispatch: any) => {
    await Dispatch(fetchDataRequest())
    try{
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        Dispatch(fetchDataSuccess(data.products));
      } catch (error) {
        Dispatch(fetchDataFailure(error.message));
      }
    }catch(err){
        Dispatch(fetchDataFailure(err.message));
    }
}