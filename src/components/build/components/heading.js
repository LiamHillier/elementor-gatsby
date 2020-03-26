import React, {useEffect, useState} from 'react'
import {Typography} from "@material-ui/core"

const Heading = props => {
  const [styles, setStyles] = useState({})
  const [textComponent, setTextComponent] = useState("h2")

  useEffect(() => {
    const newStyles = {
      width: "100%",
      height: "auto"
    }
    const settings = [props]
   

    settings.forEach(setting => {
      if (setting.header_size) {
        if (setting.header_size === "h1") {
          setTextComponent("h1")
        }
        if (setting.header_size === "h2") {
          setTextComponent("h2")
        }
        if (setting.header_size === "h3") {
          setTextComponent("h3")
        }
        if (setting.header_size === "h4") {
          setTextComponent("h4")
        }
        if (setting.header_size === "h5") {
          setTextComponent("h5")
        }
        if (setting.header_size === "h6") {
          setTextComponent("h6")
        }
        if (setting.header_size === "p") {
          setTextComponent("body1")
        }
        if (setting.header_size === "span") {
          setTextComponent("body1")
        }
      }
      if (setting.title_color) {
        newStyles['color'] = setting.title_color
      }
      if (setting.align) {
        newStyles['textAlign'] = setting.align
      }
      if (setting.title_color) {
        newStyles['color'] = setting.title_color
      }
      if (setting.typography_font_weight) {
        newStyles['fontWeight'] = setting.typography_font_weight
      }
      if (setting.typography_text_transform) {
        newStyles['textTransform'] = setting.typography_text_transform
      }
      if (setting.typography_font_style) {
        newStyles['fontStyle'] = setting.typography_font_style
      }
      if (setting.typography_text_decoration) {
        newStyles['textDecoration'] = setting.typography_text_decoration
      }
      if (setting.typography_line_height) {
        newStyles['lineHeight'] = `${setting.typography_line_height.size + setting.typography_line_height.unit}`
      }
      if (setting.typography_letter_spacing) {
        newStyles['letterSpacing'] = `${setting.typography_letter_spacing.size + setting.typography_letter_spacing.unit}`
      }
      if (setting._margin) {
        newStyles['marign'] = `${setting._margin.top + setting._margin.unit + " " + setting._margin.right + setting._margin.unit + " " + setting._margin.bottom + setting._margin.unit + " " + setting._margin.left + setting._margin.unit}`
      }
      if (setting._padding) {
        newStyles['marign'] = `${setting._padding.top + setting._padding.unit + " " + setting._padding.right + setting._padding.unit + " " + setting._padding.bottom + setting._padding.unit + " " + setting._padding.left + setting._padding.unit}`
      }
    })

    setStyles(newStyles)
  },[props])

  return <Typography style={styles} variant={textComponent}>{props.title}</Typography>
}
export default Heading
