import React, { useState } from "react";
import Styles from "./Best.module.scss";
import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";
import EraSelection from "../../components/ui/EraSelection/EraSelection";
import AlbumListItem from "../../components/ui/AlbumListItem/AlbumListItem";
import PageHeader from "../../components/shared/PageHeader/PageHeader";

function Best() {
  const [eraSelected, setEraSelected] = useState(null);

  const bestAlbumsMock = [
    {
      id: 1,
      order: 1,
      name: "To Pimp a Butterfly",
      artist: "Kendrick Lamar",
      photo: "https://picsum.photos/200?random=1",
      year: "2015",
      stats: {
        likes: 15400,
        spins: 2400000,
        rate: 98,
      },
    },
    {
      id: 2,
      order: 2,
      name: "OK Computer",
      artist: "Radiohead",
      photo: "https://picsum.photos/200?random=2",
      year: "1997",
      stats: {
        likes: 12500,
        spins: 1800000,
        rate: 96,
      },
    },
    {
      id: 3,
      order: 3,
      name: "Abbey Road",
      artist: "The Beatles",
      photo: "https://picsum.photos/200?random=3",
      year: "1969",
      stats: {
        likes: 22000,
        spins: 5000000,
        rate: 95,
      },
    },
    {
      id: 4,
      order: 4,
      name: "The Dark Side of the Moon",
      artist: "Pink Floyd",
      photo: "https://picsum.photos/200?random=4",
      year: "1973",
      stats: {
        likes: 19000,
        spins: 4500000,
        rate: 94,
      },
    },
    {
      id: 5,
      order: 5,
      name: "In Rainbows",
      artist: "Radiohead",
      photo: "https://picsum.photos/200?random=5",
      year: "2007",
      stats: {
        likes: 9800,
        spins: 850000,
        rate: 92,
      },
    },
  ];

  function fetchAlbums(eraSelected) {
    if (eraSelected === null) {
      return bestAlbumsMock;
    } 
    return bestAlbumsMock.filter((album) => album.year === eraSelected.toString());
  }

  function renderAlbums(eraSelected) {
    const albums = fetchAlbums(eraSelected);
    return albums.map((album) => {
        return (
          <AlbumListItem
            key={album.id}
            order={album.order}
            year={album.year}
            name={album.name}
            artist={album.artist}
            photo={album.photo}
            stats={album.stats}
          />
        );
    });
  }

  return (
    <>
      <PageHeader />
      <main className={Styles["main"]}>
        <EraSelection onClick={setEraSelected} />
        <section className={Styles["album-section"]}>
          <SectionTitle width={"50%"} text={"TOP ALBUMS OF ALL TIME"} />
          <ul className={Styles["album-section__album-list"]}>{renderAlbums(eraSelected)}</ul>
          
        </section>
      </main>
    </>
  );
}

export default Best;
