// Movie Fight Web Application

// Request data from OMDb API
const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "eeec100e",
      s: searchTerm,
    },
  });

  // Check if the fetched data has an 'Error' property present & return an empty array
  if (response.data.Error) {
    return [];
  }

  // Return the fetched array of movies
  return response.data.Search;
};

// Call createAutocomplete() & pass corresponding configuration object
createAutocomplete({
  root: document.querySelector(".autocomplete"),
});

createAutocomplete({
  root: document.querySelector(".autocomplete-two"),
});

createAutocomplete({
  root: document.querySelector(".autocomplete-three"),
});

// Helper function that requests specific movie details by ID (i.e. 'i')
const onMovieSelect = async (movie) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "eeec100e",
      i: movie.imdbID,
    },
  });

  // Target DOM element '#summary' & then render response.data received from API
  document.querySelector("#summary").innerHTML = movieTemplate(response.data);
};

// Helper function that extracts details & renders corresponding HTML code for index.html
const movieTemplate = (movieDetail) => {
  return `
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${movieDetail.Poster}" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movieDetail.Title}</h1>
          <h4>${movieDetail.Genre}</h4>
          <p>${movieDetail.Plot}</p>
        </div>
      </div>
    </article>

    <article class="notification is-primary">
      <p class="title">${movieDetail.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>

    <article class="notification is-primary">
      <p class="title">${movieDetail.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
    </article>

    <article class="notification is-primary">
      <p class="title">${movieDetail.Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>

    <article class="notification is-primary">
      <p class="title">${movieDetail.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
    </article>

    <article class="notification is-primary">
      <p class="title">${movieDetail.imdbVotes}</p>
      <p class="subtitle">IMDB Votes</p>
    </article>
  `;
};
