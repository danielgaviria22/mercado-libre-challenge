export const API_URL = 'https://api.mercadolibre.com';
export const queryURL = (search) => `/sites/MLA/search?q=${search}`;
export const itemURL = (itemId) => `/items/${itemId}`;
export const descriptionURL = (itemId) => `/items/${itemId}/description`;