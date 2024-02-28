import axios from "axios";

const YOUR_ACCESS_KEY = "irEfdu0P_DhxyNxjlI-dYb5RJInsIwZKwWego8ISNwc";

export const fetchImages = async (query) => {
  axios.defaults.baseURL = "https://api.unsplash.com";

  const response = await axios.get("/search/photos", {
    params: {
      query,
      client_id: YOUR_ACCESS_KEY,
      page: 1,
      per_page: 10,
    },
  });
  return response;
};
fetchImages("cat");
