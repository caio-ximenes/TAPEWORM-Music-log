import React, { useRef } from "react";
import Styles from "./Explorer.module.scss";
import AlbumCard from "../../components/albuns/AlbumCard/AlbumCard";
import RollSection from "../../components/ui/RollSection/RollSection";
import PageHeader from "../../components/shared/PageHeader/PageHeader";
import Copyrights from "../../components/shared/Copyrights/Copyrights";
import ArtistCard from "../../components/artists/ArtistCard/ArtistCard";
import SectionPartition from "../../components/ui/SectionPartition/SectionPartition";

function Explorer() {
  // Ref to track the current index for partition width cycling without re-renders
  const idPart = useRef(0);
  // Array of possible widths for the section partition
  const partitionSizes = ["10%", "20%", "30%", "40%"];

  // Function to determine the width of the next partition
  // It cycles through the 'partitionSizes' array based on 'idPart'
  function partWidth() {
    if (idPart.current % partitionSizes.length >= 0) {
      const index = idPart.current % partitionSizes.length;
      const width = partitionSizes[index];
      // Increment the counter for the next call
      idPart.current += 1;
      return width;
    } else {
      throw new Error("invalid size");
    }
  }

  // Mock data function for albums
  function getAlbums() {
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

  // Mock data function for artists
  function getArtists() {
    const artists = [
      {
        id: 1,
        artistName: "Cyber Dreams",
        srcImage: "https://picsum.photos/200",
      },
      { id: 2, artistName: "The Void", srcImage: "https://picsum.photos/200" },
      {
        id: 3,
        artistName: "Star Gazers",
        srcImage: "https://picsum.photos/200",
      },
      {
        id: 4,
        artistName: "Concrete Poets",
        srcImage: "https://picsum.photos/200",
      },
      {
        id: 5,
        artistName: "Night Owls",
        srcImage: "https://picsum.photos/200",
      },
      {
        id: 6,
        artistName: "Blue Tides",
        srcImage: "https://picsum.photos/200",
      },
      {
        id: 7,
        artistName: "The Mechanics",
        srcImage: "https://picsum.photos/200",
      },
      {
        id: 8,
        artistName: "Binary Beats",
        srcImage: "https://picsum.photos/200",
      },
      {
        id: 9,
        artistName: "Green Souls",
        srcImage: "https://picsum.photos/200",
      },
      {
        id: 10,
        artistName: "Retro Wave",
        srcImage: "https://picsum.photos/200",
      },
      {
        id: 11,
        artistName: "Thunder Bolts",
        srcImage: "https://picsum.photos/200",
      },
      {
        id: 12,
        artistName: "Coffee Club",
        srcImage: "https://picsum.photos/200",
      },
      {
        id: 13,
        artistName: "The Painters",
        srcImage: "https://picsum.photos/200",
      },
      {
        id: 14,
        artistName: "Sun Chasers",
        srcImage: "https://picsum.photos/200",
      },
      { id: 15, artistName: "Chronos", srcImage: "https://picsum.photos/200" },
    ];
    return artists;
  }

  return (
    <>
      <PageHeader />
      <main>
        {/* Albums Section */}
        <div className={Styles["show-section"]}>
          {/* Partition with dynamic width based on the cycle */}
          <SectionPartition
            width={partWidth()}
            text="Popular Releases"
            labelBool={true}
          />

          <RollSection>
            {getAlbums().map((album) => (
              <AlbumCard
                key={album.id}
                imgSrc={album.imgSrc}
                albumName={album.albumName}
                artistName={album.artistName}
              />
            ))}
          </RollSection>
        </div>

        {/* Artists Section */}
        <div className={Styles["show-section"]}>
          <SectionPartition
            width={partWidth()} // Gets the next width in the cycle
            text="Popular Artists"
            labelBool={true}
          />
          <RollSection>
            {getArtists().map((artist) => (
              <ArtistCard
                key={artist.id}
                srcImage={artist.srcImage}
                artistName={artist.artistName}
              />
            ))}
          </RollSection>
        </div>
      </main>

      <Copyrights />
    </>
  );
}

export default Explorer;
