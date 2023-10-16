import React, { useState } from 'react';
import data from './componentes/data.json';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import './App.css';





function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const topSongs = data.topSongs;

  const filteredSongs = topSongs.filter((song) => {
    const title = song.nome.toLowerCase();
    const artist = song.artista.toLowerCase();
    const term = searchTerm.toLowerCase();
    return title.includes(term) || artist.includes(term);
  });

  return (
    <div className="App">
      <Header/>
      
      <input
        type="text"
        placeholder="Pesquisar músicas"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {searchTerm ? (
          filteredSongs.map((song) => (
            <li key={song.id}>
            
              {song.nome} - {song.artista}
            </li>
          ))
        ) : (
          topSongs.map((song) => (
            <li key={song.id}>
              
              {song.nome} - {song.artista}
            </li>
          ))
        )}
      </ul>
      <Footer/>
    </div>
  );
}

export default App;
