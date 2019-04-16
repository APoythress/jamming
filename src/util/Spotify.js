const redirectURI = 'http://jamming_react.surge.sh/';
const clientId = 'b5b7ea26855d4e588f9a646668f15cd7';

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatches = window.location.href.match(/access_token=([^&]*)/);
    const tokenExpiresMatch = window.location.href.match(/expires_in=([^&]*)/);
    if(accessTokenMatches && tokenExpiresMatch) {
      accessToken = accessTokenMatches[1];
      const tokenExpires = Number(tokenExpiresMatch[1]);
      window.setTimeout(() => accessToken = '', tokenExpires * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const userRedirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = userRedirect;
    }
  },

  search(term) {
      const accessToken = Spotify.getAccessToken();

      // fetch request converting to JSON
      return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      });
    },

  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    // Setting accessToken to current users access token
    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    // fetch request converting to JSON
    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackUris})
        });
      });
    });
  }


};

export default Spotify;
