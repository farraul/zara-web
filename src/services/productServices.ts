import { Product, ProductSummary } from "../models/Product";
import { getParamsPaginate } from "../utils/paginate";
import { request } from "./instance";

class ProductService {
  getProducts = async (
    offset: number = 1,
    limit: number = 20,
    search: string = ""
  ): Promise<ProductSummary[]> => {
    const params = getParamsPaginate(offset, limit, search);
    return request({
      method: "get",
      endpoint: `/products/?${params}`,
    });
  };

  getProduct = async (id: string): Promise<Product> => {
    return request({
      method: "get",
      endpoint: `/products/${id}`,
    });
  };
}

export default ProductService;
