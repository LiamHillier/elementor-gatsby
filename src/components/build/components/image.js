import React from "react"
import Img from "gatsby-image"

const Image = props => {

  return <Img fluid={props.image.fluid} style={{ height: "100%", width: "100%", margin: 0 }} />
}
export default Image
