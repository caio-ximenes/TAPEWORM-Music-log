export async function fetchAlbumById(id) {
  const albums = [
    {
      id: 1,
      albumName: "Neon Horizon",
      artistName: "Cyber Dreams",
      imgSrc: "https://picsum.photos/200",
      year: "2019",
      description:
        "A futuristic journey through neon-lit cityscapes and digital dreams. This album captures the essence of a world where technology and humanity intertwine. Synthesizers weave complex tapestries of sound, creating an immersive atmosphere that transports the listener to a cyberpunk reality. From the pulsing beats of the opening track to the ethereal fade-out, every moment is a testament to the digital age.",
      tags: ["Synthwave", "Retrowave", "Electronic"],
    },
    {
      id: 2,
      albumName: "Echoes of Silence",
      artistName: "The Void",
      imgSrc: "https://picsum.photos/200",
      year: "2015",
      description:
        "An atmospheric exploration of emptiness and the quiet spaces between sounds. It delves into the depths of solitude, using minimalist arrangements to evoke a sense of vast, open space. The haunting melodies drift like ghosts through a fog, inviting introspection and calm. It is a soundtrack for the lonely hours of the night, where silence speaks louder than words.",
      tags: ["Ambient", "Dark Ambient", "Drone"],
    },
    {
      id: 3,
      albumName: "Solar Flares",
      artistName: "Star Gazers",
      imgSrc: "https://picsum.photos/200",
      year: "2021",
      description:
        "Explosive energy and cosmic melodies that burn as bright as the sun. This collection of tracks is a high-octane voyage across the galaxy, fueled by driving rhythms and soaring guitars. Each song represents a different celestial phenomenon, capturing the raw power and beauty of the universe. It's an anthem for those who look up at the stars and dream of adventure.",
      tags: ["Space Rock", "Psychedelic Rock", "Post-Rock"],
    },
    {
      id: 4,
      albumName: "Urban Jungle",
      artistName: "Concrete Poets",
      imgSrc: "https://picsum.photos/200",
      year: "2018",
      description:
        "Raw, gritty rhymes and beats reflecting the chaos of city life. The concrete jungle comes alive in this album, with samples drawn from the streets themselves. Sirens, footsteps, and distant conversations blend with heavy basslines to create a soundscape that is both oppressive and energizing. It tells the stories of the people who live, love, and struggle in the heart of the metropolis.",
      tags: ["Hip Hop", "Jazz Rap", "Boom Bap"],
    },
    {
      id: 5,
      albumName: "Midnight Drive",
      artistName: "Night Owls",
      imgSrc: "https://picsum.photos/200",
      year: "2022",
      description:
        "Smooth synthwave tracks perfect for a late-night cruise down the highway. The retro-futuristic vibe is palpable, with nostalgic nods to the 80s blended with modern production techniques. It's the perfect companion for a solitary drive under the streetlights, where the road stretches out endlessly before you. The music flows like the wind through an open window, cool and refreshing.",
      tags: ["Synthpop", "Dream Pop", "Indie Pop"],
    },
    {
      id: 6,
      albumName: "Oceanic Drifts",
      artistName: "Blue Tides",
      imgSrc: "https://picsum.photos/200",
      year: "2016",
      description:
        "Calming, fluid compositions that mimic the ebb and flow of the tides. Immerse yourself in the soothing sounds of the ocean, translated into musical form. Gentle piano melodies ripple over layers of ambient textures, creating a sense of weightlessness. It's a sonic escape to a secluded beach, where the only worry is the shifting of the sands.",
      tags: ["Ambient", "Chillout", "Downtempo"],
    },
    {
      id: 7,
      albumName: "Rusty Gears",
      artistName: "The Mechanics",
      imgSrc: "https://picsum.photos/200",
      year: "2014",
      description:
        "Industrial sounds and rhythmic precision, like a well-oiled machine. Clanking metal, hissing steam, and the relentless pounding of pistons define the sound of this album. It celebrates the beauty of engineering and the power of industry. The tracks are constructed with mathematical exactness, yet they possess a raw, mechanical soul that is undeniably compelling.",
      tags: ["Industrial", "Noise", "Experimental"],
    },
    {
      id: 8,
      albumName: "Digital Love",
      artistName: "Binary Beats",
      imgSrc: "https://picsum.photos/200",
      year: "2023",
      description:
        "A synthesized romance told through bleeps, bloops, and heartfelt melodies. In a world of ones and zeros, love still finds a way to bloom. This album explores the concept of emotion in artificial intelligence, blending glitchy electronics with warm, emotive chord progressions. It's a quirky, charming, and ultimately touching story of connection in the digital realm.",
      tags: ["Chiptune", "Glitch", "Electronica"],
    },
    {
      id: 9,
      albumName: "Forest Whispers",
      artistName: "Green Souls",
      imgSrc: "https://picsum.photos/200",
      year: "2017",
      description:
        "Organic sounds and folk influences that transport you to the heart of the woods. Acoustic guitars, flutes, and hand percussion blend seamlessly with field recordings of birdsong and rustling leaves. It's a celebration of nature's tranquility and the ancient wisdom of the forest. Close your eyes and let the music guide you through the dappled sunlight and mossy paths.",
      tags: ["Folk", "Neofolk", "Acoustic"],
    },
    {
      id: 10,
      albumName: "Vintage Vibes",
      artistName: "Retro Wave",
      imgSrc: "https://picsum.photos/200",
      year: "1985",
      description:
        "Nostalgic tunes bringing back the best of the 80s with a modern twist. Dust off your cassette player and get ready to rewind. This album is a love letter to a bygone era, filled with gated reverb drums, shimmering synths, and catchy hooks. It captures the optimism and energy of the decade, updated for a new generation of listeners who crave that vintage aesthetic.",
      tags: ["New Wave", "Synthpop", "80s Pop"],
    },
    {
      id: 11,
      albumName: "Electric Storm",
      artistName: "Thunder Bolts",
      imgSrc: "https://picsum.photos/200",
      year: "2021",
      description:
        "High-voltage rock anthems that strike with the power of lightning. Prepare for a sonic assault as distorted guitars and thundering drums collide. The energy is relentless, building tension until it explodes in a cathartic release of noise and melody. It's the soundtrack to a raging storm, capturing the raw, untamed power of nature's fury.",
      tags: ["Hard Rock", "Heavy Metal", "Stoner Rock"],
    },
    {
      id: 12,
      albumName: "Quiet Mornings",
      artistName: "Coffee Club",
      imgSrc: "https://picsum.photos/200",
      year: "2010",
      description:
        "Soft acoustic tracks to accompany your first cup of coffee. Start your day with a gentle embrace of sound. Delicate fingerpicking and hushed vocals create an intimate atmosphere, perfect for those slow, hazy mornings. It's a reminder to slow down and appreciate the simple moments before the rush of the day begins.",
      tags: ["Lo-Fi", "Jazz", "Acoustic"],
    },
    {
      id: 13,
      albumName: "Abstract Thoughts",
      artistName: "The Painters",
      imgSrc: "https://picsum.photos/200",
      year: "2012",
      description:
        "Experimental soundscapes that challenge the listener's perception of music. Conventional structures are abandoned in favor of free-form expression. Dissonant harmonies, irregular rhythms, and unexpected textures collide to create a sonic canvas that is open to interpretation. It's a journey into the avant-garde, asking questions rather than providing answers.",
      tags: ["IDM", "Avant-Garde", "Experimental"],
    },
    {
      id: 14,
      albumName: "Golden Hour",
      artistName: "Sun Chasers",
      imgSrc: "https://picsum.photos/200",
      year: "2013",
      description:
        "Warm, glowing harmonies that capture the magic of the setting sun. As the day fades into twilight, this album provides the perfect soundtrack. Rich, golden tones and lush arrangements evoke a sense of nostalgia and peace. It captures that fleeting moment when the world is bathed in amber light, suspending time for just a little while longer.",
      tags: ["Indie Rock", "Surf Rock", "Pop Rock"],
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
      year: "2009",
      description:
        "A temporal voyage through history, blending ancient scales with modern production. Instruments from different eras and cultures converge in a unique musical fusion. It feels like wandering through a museum where the exhibits come to life, telling stories of civilizations past and present. The music transcends time, connecting the listener to the universal human experience.",
      tags: ["World Music", "Cinematic", "Classical Crossover"],
    },
  ];
  const album = albums.filter((album) => album.id.toString() === id)[0];

  if (album) {
    album.tracks = [
      { id: 1, title: "Intro", duration: "1:20" },
      { id: 2, title: "Midnight City", duration: "4:03" },
      { id: 3, title: "Reunion", duration: "3:55" },
      { id: 4, title: "Wait", duration: "3:13" },
      { id: 5, title: "Raconte-moi une histoire", duration: "4:04" },{ id: 1, title: "Intro", duration: "1:20" },
      { id: 2, title: "Midnight City", duration: "4:03" },
      { id: 3, title: "Reunion", duration: "3:55" },
      { id: 4, title: "Wait", duration: "3:13" },
      { id: 5, title: "Raconte-moi une histoire", duration: "4:04" },{ id: 1, title: "Intro", duration: "1:20" },
      { id: 2, title: "Midnight City", duration: "4:03" },
      { id: 3, title: "Reunion", duration: "3:55" },
      { id: 4, title: "Wait", duration: "3:13" },
      { id: 5, title: "Raconte-moi une histoire", duration: "4:04" },{ id: 1, title: "Intro", duration: "1:20" },
      { id: 2, title: "Midnight City", duration: "4:03" },
      { id: 3, title: "Reunion", duration: "3:55" },
      { id: 4, title: "Wait", duration: "3:13" },
      { id: 5, title: "Raconte-moi une histoire", duration: "4:04" },{ id: 1, title: "Intro", duration: "1:20" },
      { id: 2, title: "Midnight City", duration: "4:03" },
      { id: 3, title: "Reunion", duration: "3:55" },
      { id: 4, title: "Wait", duration: "3:13" },
      { id: 5, title: "Raconte-moi une histoire", duration: "4:04" },{ id: 1, title: "Intro", duration: "1:20" },
      { id: 2, title: "Midnight City", duration: "4:03" },
      { id: 3, title: "Reunion", duration: "3:55" },
      { id: 4, title: "Wait", duration: "3:13" },
      { id: 5, title: "Raconte-moi une histoire", duration: "4:04" },{ id: 1, title: "Intro", duration: "1:20" },
      { id: 2, title: "Midnight City", duration: "4:03" },
      { id: 3, title: "Reunion", duration: "3:55" },
      { id: 4, title: "Wait", duration: "3:13" },
      { id: 5, title: "Raconte-moi une histoire", duration: "4:04" },{ id: 1, title: "Intro", duration: "1:20" },
      { id: 2, title: "Midnight City", duration: "4:03" },
      { id: 3, title: "Reunion", duration: "3:55" },
      { id: 4, title: "Wait", duration: "3:13" },
      { id: 5, title: "Raconte-moi une histoire", duration: "4:04" },{ id: 1, title: "Intro", duration: "1:20" },
      { id: 2, title: "Midnight City", duration: "4:03" },
      { id: 3, title: "Reunion", duration: "3:55" },
      { id: 4, title: "Wait", duration: "3:13" },
      { id: 5, title: "Raconte-moi une histoire", duration: "4:04" },{ id: 1, title: "Intro", duration: "1:20" },
      { id: 2, title: "Midnight City", duration: "4:03" },
      { id: 3, title: "Reunion", duration: "3:55" },
      { id: 4, title: "Wait", duration: "3:13" },
      { id: 5, title: "Raconte-moi une histoire", duration: "4:04" },{ id: 1, title: "Intro", duration: "1:20" },
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
