export const API_ENDPOINTS = {
  api: 'http://localhost:9090',
  login: '/authenticate',
  logout: '/logout',
  register: '/customer/register',
  getCustomers: '/customer/all',
  getCustomerById: (customerId: number) => `/customer/${customerId}`,
  deleteCustomer: (customerId: number) => `/customer/${customerId}`,
  updateCustomer: (customerId: number) => `/customer/${customerId}`,

  createProduct: '/product',
  getProducts: '/product/all',
  getProductById: (productId: number) => `/product/${productId}`,
  deleteProduct: (productId: number) => `/product/${productId}`,
  updateProduct: (productId: number) => `/product/${productId}`,

  createOrder: '/order',
  getOrders: '/order/all',
  getOrderById: (orderId: number) => `/order/${orderId}`,
  deleteOrder: (orderId: number) => `/order/${orderId}`,
  updateOrder: (orderId: number) => `/order/${orderId}`,

};
