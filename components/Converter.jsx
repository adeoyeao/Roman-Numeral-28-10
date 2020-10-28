import styles from "../styles/components/converter.module.scss"
import { useState, useEffect } from "react"

const Converter = (props) => {
      const [ input, setInput ] = useState("")
      const [ valid, setValid ] = useState(true)
      const [ label, setLabel ] = useState("")
      const [ roman, setRoman ] = useState("")

      const handleChange = (e) => {
            const value = e.target.value
            const regex = /^\d{1,7}$/ig

            setInput(value)
            regex.test(value) && Number(value) <= 1000000 ? setValid(true) : setValid(false)

            Number(value) > 1000000 ? 
            setLabel("Number must be below one million") : 
            !regex.test(value) ? 
            setLabel("Please enter a valid number") : setLabel("")

            !value && setValid(true)
      }

      useEffect(() => {
            if(valid) {
            const romanArr = []
            const length = input.length - 1
            const formula = {
                  0: [0], 1: [1], 2: [1, 1], 3: [1, 1, 1], 4: [1, 2], 5: [2], 6: [2, 1], 7: [2, 1, 1], 8: [2, 1, 1, 1], 9: [1, 3]
            }
            const symbols = [["", "I", "V", "X"], ["", "X", "L", "C"], ["", "C", "D", "M"], ["", "M", "V̅", "X̅"], ["", "X̅", "L̅", "C̅"], ["", "C̅", "D̅", "M̅"]]

            if(input == 1000000) {
                  setRoman("M̅")
            } else {
                  const arr = String(input).split("")
                  arr.forEach((x, idx) => {
                        formula[x].forEach(y => romanArr.push(symbols[length - idx][y]))
                  })
                  setRoman(romanArr.join(""))
            }
            }
      })

      return (
            <section className={styles.converter}>
                  <div>
                        <h3>Roman Numeral Converter</h3>
                        <p>Enter any integer between one and one million into the input box below.</p>
                        <input 
                        type="text"
                        placeholder="1 - 1000000"
                        value={input}
                        onChange={handleChange}
                        autoComplete="off"/>
                        { !valid && <label style={{color: "red", fontSize: "12px"}}>{label}</label> }
                        <h1>{roman}</h1>
                        <button onClick={() => props.handleClick()}>Go Back</button>
                  </div>
            </section>
      )
}

export default Converter