export async function fetchAlbumById(id) {
  const albums = [
    {
      id: 1,
      albumName: "Neon Horizon",
      artistName: "Cyber Dreams",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 2,
      albumName: "Echoes of Silence",
      artistName: "The Void",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 3,
      albumName: "Solar Flares",
      artistName: "Star Gazers",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 4,
      albumName: "Urban Jungle",
      artistName: "Concrete Poets",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 5,
      albumName: "Midnight Drive",
      artistName: "Night Owls",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 6,
      albumName: "Oceanic Drifts",
      artistName: "Blue Tides",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 7,
      albumName: "Rusty Gears",
      artistName: "The Mechanics",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 8,
      albumName: "Digital Love",
      artistName: "Binary Beats",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 9,
      albumName: "Forest Whispers",
      artistName: "Green Souls",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 10,
      albumName: "Vintage Vibes",
      artistName: "Retro Wave",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 11,
      albumName: "Electric Storm",
      artistName: "Thunder Bolts",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 12,
      albumName: "Quiet Mornings",
      artistName: "Coffee Club",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 13,
      albumName: "Abstract Thoughts",
      artistName: "The Painters",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 14,
      albumName: "Golden Hour",
      artistName: "Sun Chasers",
      imgSrc: "https://picsum.photos/200",
      stats: {
        likes: 15000,
        spins: 3000000,
        rate: 90,
      },
    },
    {
      id: 15,
      albumName: "Lost in Time",
      artistName: "Chronos",
      imgSrc: "https://picsum.photos/200",
    },
  ];
  const album = albums.filter((album) => album.id.toString() === id)[0];

  if (album) {
    album.tracks = [
      { id: 1, title: "Intro", duration: "1:20" },
      { id: 2, title: "Midnight City", duration: "4:03" },
      { id: 3, title: "Reunion", duration: "3:55" },
      { id: 4, title: "Wait", duration: "3:13" },
      { id: 5, title: "Raconte-moi une histoire", duration: "4:04" },
    ];
  }

  return album;
}

export async function fetchAlbums() {
  const albums = [
    {
      id: 1,
      albumName: "Neon Horizon",
      artistName: "Cyber Dreams",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 2,
      albumName: "Echoes of Silence",
      artistName: "The Void",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 3,
      albumName: "Solar Flares",
      artistName: "Star Gazers",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 4,
      albumName: "Urban Jungle",
      artistName: "Concrete Poets",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 5,
      albumName: "Midnight Drive",
      artistName: "Night Owls",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 6,
      albumName: "Oceanic Drifts",
      artistName: "Blue Tides",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 7,
      albumName: "Rusty Gears",
      artistName: "The Mechanics",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 8,
      albumName: "Digital Love",
      artistName: "Binary Beats",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 9,
      albumName: "Forest Whispers",
      artistName: "Green Souls",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 10,
      albumName: "Vintage Vibes",
      artistName: "Retro Wave",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 11,
      albumName: "Electric Storm",
      artistName: "Thunder Bolts",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 12,
      albumName: "Quiet Mornings",
      artistName: "Coffee Club",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 13,
      albumName: "Abstract Thoughts",
      artistName: "The Painters",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 14,
      albumName: "Golden Hour",
      artistName: "Sun Chasers",
      imgSrc: "https://picsum.photos/200",
    },
    {
      id: 15,
      albumName: "Lost in Time",
      artistName: "Chronos",
      imgSrc: "https://picsum.photos/200",
    },
  ];
  return albums;
}

export async function saveAlbumUserStats(album, listName) {
  console.log(`album ${album} adicionado à lista ${listName} com sucesso`);
}
