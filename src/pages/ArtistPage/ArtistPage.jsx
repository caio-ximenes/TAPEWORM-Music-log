import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useArtistById } from "../../hooks/useArtistById";
import AlbumCard from "../../components/albuns/AlbumCard/AlbumCard";
import TextArea from "../../components/ui/TextArea/TextArea";
import SectionPartition from "../../components/ui/SectionPartition/SectionPartition";
import ButtonsHeader from "../../components/ui/ButtonsHeader/ButtonsHeader";
import UserListButtons from "../../components/ui/UserListButtons/UserListButtons";
import { sideEffectButtonRegressiveActivation } from "../../services/buttonsLists";
import Styles from "./ArtistPage.module.scss";
import BooleanIconButton from "../../components/ui/BooleanIconButton/BooleanIconButton";

export function artistLoader({ params }) {
  return params.artist;
}

const TABS = [
  { id: "all", name: "All" },
  { id: "albums", name: "Albums" },
  { id: "liveAlbums", name: "Live Albums" },
  { id: "eps", name: "EPs" },
  { id: "singles", name: "Singles" },
  { id: "compilations", name: "Compilations" },
];

function ArtistPage() {
  const id = useLoaderData();
  const { data: artist, isLoading, isError } = useArtistById(id);
  const [activeTab, setActiveTab] = useState("all");
  const [like, setLike] = useState(false);
  const [fav, setFav] = useState(false);

  const iconButtons = [
    { id: 1, name: "like", onClick: setLike, buttonState: like },
    { id: 2, name: "fav", onClick: setFav, buttonState: fav },
  ];

  const handleButtonClick = (button, value) => {
    const ultimoBotao = iconButtons.length - 1;
    if (value === true) {
      sideEffectButtonRegressiveActivation(iconButtons, button, [ultimoBotao]);
    }
    button.onClick(value);
  };

  if (isLoading) return null;
  if (isError || !artist) return null;

  const discographyButtons = TABS.map((tab) => ({
    id: tab.id,
    name: tab.name,
    onclick: (tabId) => setActiveTab(tabId),
  }));

  const getFilteredDiscography = () => {
    const { albums, liveAlbums, eps, singles, compilations } = artist.discography;
    if (activeTab === "all") {
      return [...albums, ...liveAlbums, ...eps, ...singles, ...compilations];
    }
    return artist.discography[activeTab] || [];
  };

  const albumsList = getFilteredDiscography();
  const activeLabel = TABS.find((t) => t.id === activeTab)?.name || "All";



  return (
    <main className={Styles["artist-page"]}>
      {/* ===== HEADER SECTION ===== */}
      <section className={Styles["artist-page__header"]}>
        <div className={Styles["artist-page__avatar-wrapper"]}>
          <img
            src={artist.imgSrc}
            alt={artist.name}
            className={Styles["artist-page__avatar"]}
          />
        </div>

        <div className={Styles["artist-page__info"]}>
          <div className={Styles["artist-page__name-row"]}>
            <h1 className={Styles["artist-page__name"]}>{artist.name}</h1>
            <div className={Styles["artist-page__icons-group"]}>
              <div className={Styles["artist-page__icon-btn"]}>
                <BooleanIconButton
                  icon="like"
                  buttonState={like}
                  onClick={setLike}
                />
              </div>
              <div className={Styles["artist-page__icon-btn"]}>
                <BooleanIconButton
                  icon="fav"
                  buttonState={fav}
                  onClick={setFav}
                />
              </div>
            </div>
          </div>

          <div className={Styles["artist-page__bio"]}>
            <TextArea text={artist.bio} lines={0} />
          </div>

          <p className={Styles["artist-page__genres"]}>
            {artist.genres.map((genre, i) => (
              <React.Fragment key={genre}>
                {genre}
                {i < artist.genres.length - 1 && ", "}
              </React.Fragment>
            ))}
          </p>
        </div>
      </section>

      {/* ===== DISCOGRAPHY SECTION ===== */}
      <section className={Styles["artist-page__discography"]}>
        <div className={Styles["artist-page__discography-header"]}>
          <ButtonsHeader buttons={discographyButtons} />
        </div>

        <div className={Styles["artist-page__filter-label"]}>
          <SectionPartition text={activeLabel} />
        </div>

        <ul className={Styles["artist-page__album-grid"]}>
          {albumsList.map((album) => (
            <AlbumCard
              key={`${activeTab}-${album.id}`}
              imgSrc={album.imgSrc}
              albumName={album.albumName}
              artistName={album.artistName}
              albumId={album.id}
            />
          ))}
          {albumsList.length === 0 && (
            <p className={Styles["artist-page__empty"]}>No releases found.</p>
          )}
        </ul>
      </section>
    </main>
  );
}

export default ArtistPage;
