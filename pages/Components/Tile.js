import React from "react";
import styles from "../../styles/Tile.module.css";
function Tile({ tileColor, tileImage }) {
    return (
      <div className={styles.tileContent + " " + styles[tileColor]}>
        <a href="https://instagram.com/thecodebreakers?igshid=YmMyMTA2M2Y=/">
          <img src={".././tiles/" + tileImage} className={styles.img}></img>
        </a>
        {/* <h1>Title</h1>
            <h2>Subtitle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut tellus quis lacus laoreet commodo.</p> */}
      </div>
    );
}

export default Tile;