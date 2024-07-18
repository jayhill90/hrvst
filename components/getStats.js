export default async function getStats() {
    const artistID = '4laUZIDTrzWHmMQS1QGcIC';
    const url = 'https://api.songstats.com/enterprise/v1/artists/stats?'+ new URLSearchParams({ spotify_artist_id:  artistID }).toString();
    const options = {
        method: 'GET',
        headers: {'Accept-Encoding': '', Accept: 'application/json', apikey: process.env.API_KEY },
    };

    const res = await fetch( url, options )

    if ( !res.ok ) throw new Error( 'Failed fetching stats' )
    
    return res.json();
}