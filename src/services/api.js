const API_URL = 'https://fakestoreapi.com/products'

export async function fetchProducts() {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error(`Ошибка API: ${response.status} ${response.statusText}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Ошибка при загрузке продуктов:', error)
    return []
  }
}
