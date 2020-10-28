import Tile from "./Tile"
import { useState } from "react"
import styles from "../styles/components/loadscreen.module.scss"

const LoadScreen = (props) => {
      return (
            <section className={styles.loadscreen}>
                  <div className={styles.letters}>
                        <span />
                        <Tile letter="R"/>
                        <Tile letter="O"/>
                        <Tile letter="M"/>
                        <Tile letter="A"/>
                        <Tile letter="N"/>
                        <span />
                        <Tile letter="N"/>
                        <Tile letter="U"/>
                        <Tile letter="M"/>
                        <Tile letter="E"/>
                        <Tile letter="R"/>
                        <Tile letter="A"/>
                        <Tile letter="L"/>
                        <button onClick={() => props.handleClick()}>Start</button>
                  </div>
            </section>
      )
}

export default LoadScreen