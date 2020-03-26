import React from 'react'
import { Container } from '@material-ui/core'
import Layout from '../layout'
import BuildPage from '../build/buildPage'
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

const PagePost = (props) => {
  const elementorData = props.data.modifiedData
  return (
    <Layout>
      {/* Build Elementor Data */}
      <Container>
        <BuildPage data={elementorData} />
      </Container>
    </Layout>
  )
}

export default PagePost
