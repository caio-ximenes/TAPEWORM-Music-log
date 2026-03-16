import React, { useRef } from "react";
import Styles from "./Explorer.module.scss";
import AlbumCard from "../../components/albuns/AlbumCard/AlbumCard";
import RollSection from "../../components/ui/RollSection/RollSection";
import PageHeader from "../../components/shared/PageHeader/PageHeader";
import Copyrights from "../../components/shared/Copyrights/Copyrights";
import ArtistCard from "../../components/artists/ArtistCard/ArtistCard";
import PagePartition from "../../components/ui/PagePartition/PagePartition";
import { useAlbums } from "../../hooks/useAlbums";

function Explorer() {
  const { data: albums, isLoading, error } = useAlbums();
  // Ref to track the current index for partition width cycling without re-renders
  const idPart = useRef(0);
  // Array of possible widths for the section partition
  const partitionSizes = ["30%", "40%", "50%", "60%"];

  // Function to determine the width of the next partition
  // It cycles through the 'partitionSizes' array based on 'idPart'
  function partWidth() {
    if (idPart.current % partitionSizes.length >= 0) {
      const index = idPart.current % partitionSizes.length;
      const width = partitionSizes[index];
      // Increment the counter for the next call
      const ultimo = partitionSizes.length - 1;
      if (idPart.current === ultimo) idPart.current = 0;
      else {
        idPart.current += 1;
      }
      return width;
    } else {
      throw new Error("invalid size");
    }
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
      <main>
        {/* Albums Section */}
        <div className={Styles["show-section"]}>
          {/* Partition with dynamic width based on the cycle */}
          <PagePartition width={partWidth()} text="Popular Releases" l={true} />

          <RollSection>
            {albums?.map((album) => (
              <AlbumCard
                albumId={album.id}
                imgSrc={album.imgSrc}
                albumName={album.albumName}
                artistName={album.artistName}
                key={album.id}
              />
            ))}
          </RollSection>
        </div>

        {/* Artists Section */}
        <div className={Styles["show-section"]}>
          <PagePartition
            width={partWidth()} // Gets the next width in the cycle
            text="Popular Artists"
            l={true}
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
    </>
  );
}

export default Explorer;
