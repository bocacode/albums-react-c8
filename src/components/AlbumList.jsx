import { useState, useEffect } from 'react'

export default function AlbumList() {
  const [albums, setAlbums] = useState()
  useEffect(() => {
    fetch('https://albums-api-c8.web.app/albums')
      .then(response => response.json())
      .then(setAlbums)
      .catch(alert)
  }, [])
  return (
    <main className='album-list'>
      {!albums
        ? <p>Loading...</p>
        : albums.map(thisAlbum => (
          <div className='album' key={thisAlbum.albumId}>
            <h3>{thisAlbum.album}</h3>
            <p>{thisAlbum.year}, {thisAlbum.artist}</p>
          </div>
        ))
      }
    </main>
  )
}