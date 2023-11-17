// Movie Fight Web Application

// Make a network request to the OMDb API for the movie 'avengers'
// Pass API key and request string (i.e. 's')
const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "eeec100e",
      s: "avengers",
    },
  });

  console.log(response.data);
};

fetchData();
