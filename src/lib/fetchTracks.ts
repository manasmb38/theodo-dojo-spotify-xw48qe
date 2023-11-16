const apiToken = 'BQCmnRlftrNF62ddKCphdcRUxvPA_N07wEB4Y6wDUPI-9Ykr-ntFAKJlsJ0ICq1-R-afVYFoBvNz1c0m3ti8cZBISxUr21zcG7avxPq52nNmPB9fwiI9CZ1AJ0YIfdV-X4d9JHAdzxUEb_HHtNXBKqXv5sR4cjfqRpxI6ovh8a7v_LherPfYUlisu-Ue1IutCwyjIlooaISqdetGe8yk1tjUzw';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};

