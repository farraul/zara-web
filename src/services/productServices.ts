import { Product, ProductSummary } from '../models/Product';
import { getParamsPaginate } from '../utils/paginate';
import { request } from './instance';

class ProductService {
  getProducts = (
    search: string = '',
    limit: number = 10,
    offset: number = 1
  ): Promise<ProductSummary[]> => {
    const params = getParamsPaginate(offset, limit, search);

    return request({
      method: 'get',
      endpoint: `/products/?${params}`,
    });
  };

  getProduct = (id: string): Promise<Product> => {
    return request({
      method: 'get',
      endpoint: `/products/${id}`,
    });
  };
}

export default ProductService;
