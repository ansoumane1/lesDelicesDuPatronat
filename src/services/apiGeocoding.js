export async function getAddress({ latitude, longitude }) {
  // Fetch address from BigDataCloud API
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error('Failed getting address');

  // Parse JSON response
  const data = await res.json();
  return data;
}
