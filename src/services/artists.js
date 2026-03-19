export async function fetchArtistById(id) {
  const numId = parseInt(id, 10);

  const artistsMeta = [
    {
      id: 1,
      name: "Cyber Dreams",
      genres: ["Synthwave", "Retrowave", "Electronic"],
      discography: {
        albums: [{ id: 1, albumName: "Neon Horizon", imgSrc: "https://picsum.photos/seed/CyberDreams-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
    {
      id: 2,
      name: "The Void",
      genres: ["Ambient", "Dark Ambient", "Drone"],
      discography: {
        albums: [{ id: 2, albumName: "Echoes of Silence", imgSrc: "https://picsum.photos/seed/TheVoid-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
    {
      id: 3,
      name: "Star Gazers",
      genres: ["Space Rock", "Psychedelic Rock", "Post-Rock"],
      discography: {
        albums: [{ id: 3, albumName: "Solar Flares", imgSrc: "https://picsum.photos/seed/StarGazers-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
    {
      id: 4,
      name: "Concrete Poets",
      genres: ["Hip Hop", "Jazz Rap", "Boom Bap"],
      discography: {
        albums: [{ id: 4, albumName: "Urban Jungle", imgSrc: "https://picsum.photos/seed/ConcretePoets-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
    {
      id: 5,
      name: "Night Owls",
      genres: ["Synthpop", "Dream Pop", "Indie Pop"],
      discography: {
        albums: [{ id: 5, albumName: "Midnight Drive", imgSrc: "https://picsum.photos/seed/NightOwls-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
    {
      id: 6,
      name: "Blue Tides",
      genres: ["Ambient", "Chillout", "Downtempo"],
      discography: {
        albums: [{ id: 6, albumName: "Oceanic Drifts", imgSrc: "https://picsum.photos/seed/BlueTides-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
    {
      id: 7,
      name: "The Mechanics",
      genres: ["Industrial", "Noise", "Experimental"],
      discography: {
        albums: [{ id: 7, albumName: "Rusty Gears", imgSrc: "https://picsum.photos/seed/TheMechanics-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
    {
      id: 8,
      name: "Binary Beats",
      genres: ["Chiptune", "Glitch", "Electronica"],
      discography: {
        albums: [{ id: 8, albumName: "Digital Love", imgSrc: "https://picsum.photos/seed/BinaryBeats-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
    {
      id: 9,
      name: "Green Souls",
      genres: ["Folk", "Neofolk", "Acoustic"],
      discography: {
        albums: [{ id: 9, albumName: "Forest Whispers", imgSrc: "https://picsum.photos/seed/GreenSouls-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
    {
      id: 10,
      name: "Retro Wave",
      genres: ["New Wave", "Synthpop", "80s Pop"],
      discography: {
        albums: [{ id: 10, albumName: "Vintage Vibes", imgSrc: "https://picsum.photos/seed/RetroWave-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
    {
      id: 11,
      name: "Thunder Bolts",
      genres: ["Hard Rock", "Heavy Metal", "Stoner Rock"],
      discography: {
        albums: [{ id: 11, albumName: "Electric Storm", imgSrc: "https://picsum.photos/seed/ThunderBolts-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
    {
      id: 12,
      name: "Coffee Club",
      genres: ["Lo-Fi", "Jazz", "Acoustic"],
      discography: {
        albums: [{ id: 12, albumName: "Quiet Mornings", imgSrc: "https://picsum.photos/seed/CoffeeClub-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
    {
      id: 13,
      name: "The Painters",
      genres: ["IDM", "Avant-Garde", "Experimental"],
      discography: {
        albums: [{ id: 13, albumName: "Abstract Thoughts", imgSrc: "https://picsum.photos/seed/ThePainters-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
    {
      id: 14,
      name: "Sun Chasers",
      genres: ["Indie Rock", "Surf Rock", "Pop Rock"],
      discography: {
        albums: [{ id: 14, albumName: "Golden Hour", imgSrc: "https://picsum.photos/seed/SunChasers-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
    {
      id: 15,
      name: "Chronos",
      genres: ["World Music", "Cinematic", "Classical Crossover"],
      discography: {
        albums: [{ id: 15, albumName: "Lost in Time", imgSrc: "https://picsum.photos/seed/Chronos-alb1/200" }],
        liveAlbums: [],
        eps: [],
        singles: [],
        compilations: [],
      },
    },
  ];

  const meta = artistsMeta.find((a) => a.id === numId);
  if (!meta) return null;

  return {
    id: meta.id,
    name: meta.name,
    imgSrc: `https://picsum.photos/seed/${meta.name.replace(/\s+/g, "")}/400`,
    bio: `${meta.name} is a critically acclaimed act known for blending ${meta.genres.join(", ")} into a unique and recognizable sound. With years of experience and a dedicated fanbase, they continue to push the boundaries of modern music.`,
    genres: meta.genres,
    discography: {
      albums: meta.discography.albums.map((a) => ({ ...a, artistName: meta.name })),
      liveAlbums: meta.discography.liveAlbums.map((a) => ({ ...a, artistName: meta.name })),
      eps: meta.discography.eps.map((a) => ({ ...a, artistName: meta.name })),
      singles: meta.discography.singles.map((a) => ({ ...a, artistName: meta.name })),
      compilations: meta.discography.compilations.map((a) => ({ ...a, artistName: meta.name })),
    },
  };
}
