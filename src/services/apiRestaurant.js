const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error('Failed getting menu');

  const { data } = await res.json();
  return data;
}

export async function getOrder(id) {
  // Fetch order details from API
  const res = await fetch(`${API_URL}/order/${id}`);

  // Check if response is successful
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  // Extract data from response
  const { data } = await res.json();

  // Return extracted data
  return data;
}

// POST new order to server
export async function createOrder(newOrder) {
  try {
    // Fetch API request
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if request is successful
    if (!res.ok) throw Error();

    // Get order data from response
    const { data } = await res.json();
    return data;
  } catch {
    // Throw error if request fails
    throw Error('Failed creating your order');
  }
}

// Updates order using PATCH request
export async function updateOrder(id, updateObj) {
  try {
    // Fetch order details with ID
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error('Failed updating your order');
  }
}
