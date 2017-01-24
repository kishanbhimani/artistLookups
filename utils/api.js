export function get(url) {
  return fetch(url)
    .then((response) => response.json());
}

export function searchArtist(searchTerm) {
  const requestUrl = `https://api.spotify.com/v1/search?q=${ searchTerm }&type=artist`;

  return get(requestUrl)
    .then((res) => {
      const artists = res.artists ? res.artists.items : [];
      return artists;
    });
}
