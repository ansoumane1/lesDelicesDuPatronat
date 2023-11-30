import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
// Import the useFetcher hook

// UpdateOrder function to update an order
function UpdateOrder({ order }) {
  // Fetcher instance to send the PATCH request
  const fetcher = useFetcher();

  // Render the Form with the Make priority button
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// Fetch data for action
export async function action({ request, params }) {
  // Create priority data object
  const data = { priority: true };

  // Update order with priority data
  await updateOrder(params.orderId, data);

  // Return null for response
  return null;
}
