import React, { use, useRef } from "react";
import Styles from "./AlbumTracks.module.scss";
import MarqueeText from "../../ui/MarqueeText/MarqueeText";
function AlbumTracks({ trackList }) {
  return (
    <ol className={Styles["tracklist"]}>
      {trackList.map((track, index) =>
        index === 0 ? (
          <li
            key={track.id}
            className={Styles["tracklist__item"]}
            style={{ border: "0px" }}
          >
            <p className={Styles["tracklist__item__title"]}>{track.title}</p>
            <p className={Styles["tracklist__item__duration"]}>
              {track.duration}
            </p>
          </li>
        ) : (
          <li key={track.id} className={Styles["tracklist__item"]}>
            <p className={Styles["tracklist__item__title"]}>
              <MarqueeText>{track.title}</MarqueeText>
            </p>
            <p className={Styles["tracklist__item__duration"]}>
              {track.duration}
            </p>
          </li>
        ),
      )}
    </ol>
  );
}

export default AlbumTracks;
