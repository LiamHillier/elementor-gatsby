import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'gatsby'

const ButtonComp = props => {
  const [styles, setStyles] = useState({})

  useEffect(() => {
    const newStyles = {
      borderRadius: 0,
        padding: "5px 15px"
    }
    const settings = [props]
  

    settings.forEach(setting => {
      if (setting.align) {
        newStyles['textAlign'] = setting.align
      }
      if (setting.align) {
        newStyles['textAlign'] = setting.align
      }
      if (setting.button_text_color) {
        newStyles['color'] = setting.button_text_color
      }
      if (setting.background_color) {
        newStyles['backgroundColor'] = setting.background_color
      }
      if (setting.border_border) {
        newStyles['border'] = `${setting.border_width.top +
          setting.border_width.unit +
          ' ' +
          setting.border_border +
          ' ' +
          setting.button_text_color}`
      }
      if (setting.border_radius) {
        newStyles['borderRadius'] = `${setting.border_radius.top +
          setting.border_radius.unit +
          ' ' +
          setting.border_radius.right +
          setting.border_radius.unit +
          ' ' +
          setting.border_radius.bottom +
          setting.border_radius.unit +
          ' ' +
          setting.border_radius.left +
          setting.border_radius.unit}`
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
        newStyles['lineHeight'] = `${setting.typography_line_height.size +
          setting.typography_line_height.unit}`
      }
      if (setting.typography_letter_spacing) {
        newStyles['letterSpacing'] = `${setting.typography_letter_spacing.size +
          setting.typography_letter_spacing.unit}`
      }
      if (setting._margin) {
        newStyles['marign'] = `${setting._margin.top +
          setting._margin.unit +
          ' ' +
          setting._margin.right +
          setting._margin.unit +
          ' ' +
          setting._margin.bottom +
          setting._margin.unit +
          ' ' +
          setting._margin.left +
          setting._margin.unit}`
      }
      if (setting._padding) {
        newStyles['marign'] = `${setting._padding.top +
          setting._padding.unit +
          ' ' +
          setting._padding.right +
          setting._padding.unit +
          ' ' +
          setting._padding.bottom +
          setting._padding.unit +
          ' ' +
          setting._padding.left +
          setting._padding.unit}`
      }
    })
   
    setStyles(newStyles)
  }, [props])

  return (
    <Link to={`${props.link.url}`}>
      <Button style={styles}>{props.text}</Button>
    </Link>
  )
}
export default ButtonComp
