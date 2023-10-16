import React from 'react';

interface Music {
  id: number;
  title: string;
  artist: string;
}

interface MusicListProps {
  songs: Music[];
}

const MusicList: React.FC<MusicListProps> = ({ songs }) => (
  <ul>
    {songs.map((song) => (
      <li key={song.id}>
        {song.title} - {song.artist}
      </li>
    ))}
  </ul>
);

export default MusicList;
