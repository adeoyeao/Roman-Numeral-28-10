import styles from "../styles/components/tile.module.scss"

const Tile = (props) => {
      return (
            <div className={styles.tile}>
                  {props.letter}
            </div>
      )
}

export default Tile