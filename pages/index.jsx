import Head from "next/head"
import { useState } from "react"
import styles from "../styles/layouts/index.module.scss"
import LoadScreen from "../components/LoadScreen"
import Converter from "../components/Converter"

const Index = () => {
      const [ visible, setVisible ] = useState(false)

      const handleClick = () => {
            setVisible(!visible)
      }

      return (
            <main className={styles.index}>
                  <Head>
                        <title>Roman Numeral Converter</title>
                  </Head>
                  { !visible ? 
                  <LoadScreen handleClick={handleClick}/> : 
                  <Converter handleClick={handleClick}/> }
            </main>
      )
}

export default Index