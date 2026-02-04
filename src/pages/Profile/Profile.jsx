import React, { useRef, useEffect, useState } from "react";
import ProfileSection from "../../components/ui/ProfileSection/ProfileSection";
import Styles from "./Profile.module.scss";
import PageHeader from "../../components/shared/PageHeader/PageHeader";
import TextArea from "../../components/ui/TextArea/TextArea";
import SectionPartition from "../../components/ui/SectionPartition/SectionPartition";
import RollSection from "../../components/ui/RollSection/RollSection";
import AlbumCard from "../../components/albuns/AlbumCard/AlbumCard";
import ArtistCard from "../../components/artists/ArtistCard/ArtistCard";
import UserData from "../../components/ui/UserData/UserData";
import ButtonsHeader from "../../components/ui/ButtonsHeader/ButtonsHeader";
import RealeaseIcon from "../../components/albuns/RealeaseIcon/RealeaseIcon";

function Profile() {
  const [userLists,setUserLists] = useState([]);
  const [list, setList] = useState([]);

  const buttons = [
    { id: 0, name: "spun", onclick: filterLists },
    { id: 1, name: "liked", onclick: filterLists },
    { id: 2, name: "essays", onclick: filterLists },
    { id: 3, name: "spin list", onclick: filterLists },
  ];

  // Exemplo de dados dinâmicos
  const userStats = [
    { name: "Seguidores", value: 12000 },
    { name: "Seguindo", value: 450 },
    { name: "Playlists", value: 12 },
  ];

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
    ];
    return artists;
  }

  // Mock data function for albums
  function getReleases() {
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
    ];
    return albums;
  }

  function getUserLists() {
    const mockData = [
      {
        id: "spun",
        list: [
          {
            img: "https://picsum.photos/200?random=1",
            name: "Spun Album 1",
            rate: 85,
          },
          {
            img: "https://picsum.photos/200?random=2",
            name: "Spun Album 2",
            rate: 92,
          },
        ],
      },
      {
        id: "liked",
        list: [
          {
            img: "https://picsum.photos/200?random=3",
            name: "Liked Song 1",
            rate: 100,
          },
          {
            img: "https://picsum.photos/200?random=4",
            name: "Liked Song 2",
            rate: 95,
          },
        ],
      },
      {
        id: "essays",
        list: [
          {
            img: "https://picsum.photos/200?random=5",
            name: "Essay Title 1",
            rate: 88,
          },
          {
            img: "https://picsum.photos/200?random=6",
            name: "Essay Title 2",
            rate: 75,
          },
        ],
      },
      {
        id: "spinlist",
        list: [
          {
            img: "https://picsum.photos/200?random=7",
            name: "Spin List Item 1",
            rate: 0,
          },
          {
            img: "https://picsum.photos/200?random=8",
            name: "Spin List Item 2",
            rate: 0,
          },{
            img: "https://picsum.photos/200?random=7",
            name: "Spin List Item 1",
            rate: 0,
          },
          {
            img: "https://picsum.photos/200?random=8",
            name: "Spin List Item 2",
            rate: 0,
          },{
            img: "https://picsum.photos/200?random=7",
            name: "Spin List Item 1",
            rate: 0,
          },
          {
            img: "https://picsum.photos/200?random=8",
            name: "Spin List Item 2",
            rate: 0,
          },{
            img: "https://picsum.photos/200?random=7",
            name: "Spin List Item 1",
            rate: 0,
          },
          {
            img: "https://picsum.photos/200?random=8",
            name: "Spin List Item 2",
            rate: 0,
          },{
            img: "https://picsum.photos/200?random=7",
            name: "Spin List Item 1",
            rate: 0,
          },
          {
            img: "https://picsum.photos/200?random=8",
            name: "Spin List Item 2",
            rate: 0,
          },{
            img: "https://picsum.photos/200?random=7",
            name: "Spin List Item 1",
            rate: 0,
          },
          {
            img: "https://picsum.photos/200?random=8",
            name: "Spin List Item 2",
            rate: 0,
          },{
            img: "https://picsum.photos/200?random=7",
            name: "Spin List Item 1",
            rate: 0,
          },
          {
            img: "https://picsum.photos/200?random=8",
            name: "Spin List Item 2",
            rate: 0,
          },{
            img: "https://picsum.photos/200?random=7",
            name: "Spin List Item 1",
            rate: 0,
          },
          {
            img: "https://picsum.photos/200?random=8",
            name: "Spin List Item 2",
            rate: 0,
          },{
            img: "https://picsum.photos/200?random=7",
            name: "Spin List Item 1",
            rate: 0,
          },
          {
            img: "https://picsum.photos/200?random=8",
            name: "Spin List Item 2",
            rate: 0,
          },{
            img: "https://picsum.photos/200?random=7",
            name: "Spin List Item 1",
            rate: 0,
          },
          {
            img: "https://picsum.photos/200?random=8",
            name: "Spin List Item 2",
            rate: 0,
          },
        ],
      },
    ];

    setUserLists(mockData);
    return mockData;
  }

  function filterLists(section) {
    if (userLists[section]) {
      if(userLists.length > 0) {
      setList(userLists[section].list
      );
      }
    }
  }

 useEffect(() => {
  const data = getUserLists();
  const spun = data.find(item => item.id === "spun");
  setList(spun.list);
}, []);

  return (
    <>
      <PageHeader />
      <main className={Styles["profile"]}>
        <div className={Styles["profile__main-data"]}>
          <section className={Styles["profile__first-column"]}>
            <div className={Styles["profile__profile-section"]}>
              <ProfileSection name={"Kiur086"} />
            </div>
            <div className={Styles["profile__bio"]}>
              <SectionPartition text={"Bio"} width={"100%"} />
              <TextArea
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              />
            </div>
          </section>
          <section className={Styles["profile__second-column"]}>
            <div className={Styles["profile__stats"]}>
              <UserData stats={userStats} />
            </div>
            <div className={Styles["profile__artists"]}>
              <div className={Styles["profile__artists-header"]}>
                <SectionPartition text={"favourite artists"} width={"100%"} />
              </div>
              <RollSection>
                {/* Retrieve artist data and map each artist to an ArtistCard component */}
                {getArtists().map((artist) => (
                  <ArtistCard
                    key={artist.id}
                    srcImage={artist.srcImage}
                    artistName={artist.artistName}
                  />
                ))}
              </RollSection>
            </div>
            <div className={Styles["profile__albums"]}>
              <div className={Styles["profile__albums-header"]}>
                <SectionPartition text={"favourite releases"} width={"100%"} />
              </div>
              <RollSection className={Styles["profile__albums-list"]}>
                {/* Retrieve album data and map each album to an AlbumCard component */}
                {getReleases().map((album) => (
                  <AlbumCard
                    key={album.id}
                    imgSrc={album.imgSrc}
                    albumName={album.albumName}
                    artistName={album.artistName}
                  />
                ))}
              </RollSection>
            </div>
          </section>
        </div>
        <section className={Styles["profile__user-lists"]}>
          <div
            className={Styles["profile__user-lists__header"]}
            aria-label="header for user lists with buttons"
          >
            <ButtonsHeader buttons={buttons} />
          </div>
          <div className={Styles["profile__user-lists__list"]}>
            {list.map((item) => (
              <RealeaseIcon
                key={item.id}
                img={item.img}
                name={item.name}
                rate={item.rate}
              />
            ))}
          </div>
          
        </section>
      </main>
    </>
  );
}

export default Profile;
