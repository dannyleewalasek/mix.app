import { proxy } from "./constants"
import { getRequest } from "./utils"
import { MUSIXMATCHKEY } from "./privateKeys"

export async function getArtistID (artist)  {
    const result = await getRequest(`${proxy}/artist.search?apikey=${MUSIXMATCHKEY}&q_artist=${artist}&page_size=1`)
    return result.message.body.artist_list[0].artist.artist_id
}

export async function getAlbums(artist) {
    const artistID = await getArtistID(artist)
    const response = await getRequest(`${proxy}/artist.albums.get?apikey=${MUSIXMATCHKEY}&artist_id=${artistID}&s_release_date=desc&g_album_name=1`)
    return response.message.body.album_list
}

//Supply an albums object from getalbums
export async function getAlbumArt(album) {
    const response = await getRequest(`${proxy}/album.get?apikey=${MUSIXMATCHKEY}&album_id=${album.album.album_id}`)
    return response
}

export async function getDummyTracks() {
    try{
        const response = await getRequest(`${proxy}/chart.tracks.get?apikey=${MUSIXMATCHKEY}&chart_name=top&page=1&page_size=200&country=it&f_has_lyrics=1`)
        let results = response.message.body.track_list.map((track) => {
            return {
                artist: track.track.artist_name,
                track: track.track.track_name,
                album: track.track.album_name,
                length: 100
            }
        })
        alert(results)
        return results
    }
    catch(err){
        alert(err)
    }
}