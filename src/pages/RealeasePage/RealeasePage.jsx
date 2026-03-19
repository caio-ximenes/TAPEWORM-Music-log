import React, { use, useEffect } from "react";
import PageHeader from "../../components/shared/PageHeader/PageHeader";
import { useLoaderData } from "react-router-dom";
import RealeaseIcon from "../../components/albuns/RealeaseIcon/RealeaseIcon";
import { useAlbumsById } from "../../hooks/useAlbumsById";
import Styles from "./RealeasePage.module.scss";
import UserListButtons from "../../components/ui/UserListButtons/UserListButtons";
import { sideEffectButtonRegressiveActivation } from "../../services/buttonsLists";
import AlbumTracks from "../../components/albuns/AlbumTracks/AlbumTracks";
import SectionPartition from "../../components/ui/SectionPartition/SectionPartition";
import TextArea from "../../components/ui/TextArea/TextArea";
import RateDisplay from "../../components/ui/RateDisplay/RateDisplay";
import ActionButton from "../../components/ui/ActionButton/ActionButton";
import RateLevelBar from "../../components/ui/RateLevelBar/RateLevelBar";
import { capitalize } from "../../services/textTransformations";
export function realeaseLoader({ params }) {
  const nomeDoRelease = params.release;
  return nomeDoRelease;
}

function RealeasePage() {
  const id = useLoaderData();
  const { data: albums, isLoading, isError } = useAlbumsById(id);
  const [fav, setFav] = React.useState(false);
  const [spin, setSpin] = React.useState(false);
  const [like, setLike] = React.useState(false);
  const [spinlist, setSpinlist] = React.useState(false);

  const buttons = [
    { id: 1, name: "spin", onClick: setSpin, buttonState: spin },
    { id: 2, name: "like", onClick: setLike, buttonState: like },
    { id: 3, name: "fav", onClick: setFav, buttonState: fav },
    { id: 4, name: "spinlist", onClick: setSpinlist, buttonState: spinlist },
  ];

  const handleButtonClick = (button, value) => {
    const ultimoBotao = buttons.length - 1;
    // ativa os anteriores
    if (value === true) {
      sideEffectButtonRegressiveActivation(buttons, button, [ultimoBotao]);
    }

    // ativa o próprio
    button.onClick(value);
  };
   if (isLoading) return null;
  if (isError || !albums) return null;

  return (
      <main className={Styles["release-page"]}>
        <section className={Styles["release-page__media"]}>
          <RealeaseIcon
            key={albums.id}
            img={albums.imgSrc}
            name={albums.albumName}
            stats={albums?.stats}
          />
        </section>

        <section className={Styles["release-page__tracks"]}>
          <SectionPartition text="Tracks" />
          <AlbumTracks trackList={albums.tracks} />
        </section>

        <section className={Styles["release-page__content"]}>
          <div className={Styles["release-page__info"]}>
            <h1 className={Styles["release-page__title"]}>
              {albums.albumName}
            </h1>
            <h2 className={Styles["release-page__year"]}>{albums.year}</h2>

            <h3 className={Styles["release-page__artist"]}>
              {albums.artistName}
            </h3>

            <div className={Styles["release-page__description"]}>
              <TextArea text={albums.description} lines={0} />
            </div>

            <p className={Styles["release-page__tags"]}>
              {albums.tags.map((tag, i) =>
              <React.Fragment key={tag}>
                {tag}
                {i < albums.tags.length - 1 && ", "}
              </React.Fragment>
              )}
            </p>
          </div>

          <div className={Styles["release-page__review"]}>
            <div className={Styles["release-page__review-header"]}>
              <SectionPartition text="Review" />
            </div>

            <div className={Styles["release-page__review-actions"]}>
              <UserListButtons buttons={buttons} onAction={handleButtonClick} />
            </div>

            <div className={Styles["release-page__review-user-rate"]}>
              <RateDisplay rate={85} />
            </div>

            <div className={Styles["release-page__review-cta"]}>
              <ActionButton action={() => {}} type="secondary">
                Write an essay!
              </ActionButton>
            </div>

            <div className={Styles["release-page__review-general"]}>
              <div className={Styles["release-page__review-score"]}>
                <RateDisplay rate={85} />
                <p className={Styles["release-page__review-label"]}>
                  User Ratings
                </p>
              </div>

              <div className={Styles["release-page__review-bar"]}>
                <RateLevelBar rate={85} />
              </div>

              <p className={Styles["release-page__review-count"]}>1.2k</p>
            </div>
          </div>
        </section>

        <section className={Styles["release-page__essays"]}>
          <SectionPartition text="Popular Reviews" />
        </section>
      </main>
  );
}

export default RealeasePage;
