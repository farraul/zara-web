import { JSX } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import ProductContainer from '@/src/components/product/ProductContainer';
import { request } from '@/src/services/instance';

jest.mock('../../services/instance', () => ({
  request: jest.fn(),
}));

const mockProducts = [
  { id: 1, name: 'Smartphone 1', basePrice: 500 },
  { id: 2, name: 'Smartphone 2', basePrice: 600 },
];

const queryClient = new QueryClient();

const renderWithClient = (ui: JSX.Element) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

describe('ProductContainer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render ProductContainer', async () => {
    renderWithClient(<ProductContainer />);

    expect(screen.getByTestId('filter')).toBeInTheDocument();
  });

  it('should render products when fetch finish success', async () => {
    request.mockResolvedValue(mockProducts);

    renderWithClient(<ProductContainer />);

    await waitFor(() => {
      expect(
        screen.getByText(`${mockProducts.length} results`)
      ).toBeInTheDocument();
    });

    mockProducts.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });
});
