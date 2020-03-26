import React from 'react'
import { Grid } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'
import Image from './components/image'
import Heading from './components/heading'
import Button from './components/button'
import { getVertPos, getColStyles, getRowStyles } from './util/getStyles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const components = {
  Image: Image,
  Heading: Heading,
  Button: Button,
}

function ucwords(text) {
  let str = text.toLowerCase()
  return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function(s) {
    return s.toUpperCase()
  })
}

const ConditionalWrapper = ({ condition, withBG, noBG, children }) =>
  condition ? withBG(children) : noBG(children)



const BuildPage = props => {
  const elementorData = props.data
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const fullHeight = {
    height: "100%"
  }
  const autoHeight = {
    height: "auto"
  }

  return (
    <Grid container spacing={1} style={{ margin: 0 }} justify="center">
      {elementorData.map(row => {
        return (
          <Grid
            container
            key={row.id}
            spacing={2}
            style={getRowStyles(row.settings)}
            justify={row.settings.align}
            alignItems={getVertPos(row.settings.content_position)}
          >
            {row.elements.map(column => {
              return (
                <ConditionalWrapper
                  condition={column.settings.background_image}
                  withBG={children => (
                    <Grid
                      item
                      container
                      sm={Math.round(12 / (100 / column.settings._column_size))}
                      xs={12}
                      style={matches ? autoHeight : fullHeight}
                    >
                      <BackgroundImage
                        fluid={column.settings.background_image.fluid}
                        style={{
                          height: '100%',
                          width: '100%',
                          display: 'flex',
                          flexGrow: 0,
                          maxWidth: '100%',
                          flexBasis: '100%',
                          flexWrap: 'wrap',
                          alignItems: getVertPos(
                            column.settings.content_position,
                          ),
                        }}
                        Tag="div"
                      >
                        <Grid
                          item
                          container
                          xs={12}
                          style={getColStyles(column.settings)}
                          justify={column.settings.align}
                   
                        >
                          {children}
                        </Grid>
                      </BackgroundImage>
                    </Grid>
                  )}
                  noBG={children => (
                    <Grid
                      item
                      container
                      sm={Math.round(12 / (100 / column.settings._column_size))}
                      xs={12}
                      style={matches ? autoHeight : fullHeight}
                    >
                      <Grid
                        item
                        container
                        xs={12}
                        justify={column.settings.align}
                        alignItems={getVertPos(
                          column.settings.content_position,
                        )}
                        style={getColStyles(column.settings)}
                      >
                        {children}
                      </Grid>
                    </Grid>
                  )}
                  key={column.id}
                >
                  <React.Fragment>
                    {column.elements.map(widget => {
                      if (components[ucwords(widget.widgetType)]) {
                        return (
                          <div
                            style={{
                              padding:
                                column.settings.space_between_widgets || 10,
                              width: '100%',
                              textAlign: widget.settings.align,
                            }}
                            key={widget.id}
                          >
                            {React.createElement(
                              components[ucwords(widget.widgetType)],
                              {
                                ...widget.settings,
                                key: widget.id,
                              },
                            )}
                          </div>
                        )
                      } else {
                        return false
                      }
                    })}
                  </React.Fragment>
                </ConditionalWrapper>
              )
            })}
          </Grid>
        )
      })}
    </Grid>
  )
}
export default BuildPage
