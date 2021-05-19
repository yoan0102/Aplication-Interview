import React from 'react'

import { Grommet, Box, Meter, FileInput, Image, Header, Spinner } from 'grommet'
import { CloudUpload } from 'grommet-icons'
import styled from 'styled-components'



const ImageInput = ({ percentage, value, upLoadImage, loading }) => {



  const Span = styled.span`
    margin: 0 0 0 1rem;
    cursor:pointer;
  `



  return (
    <Grommet >
      <Header background="brand" as="header" >
        <Box pad="medium">
          <h1>Image Cloud</h1>
        </Box>
      </Header>
      <Box align="center" background="neutral-2" pad="medium" basis="small">
        <Box
          pad="medium"
          border={{
            color: "white",
            size: "small"
          }}
          direction="row"
          align="stretch"
        >

          <FileInput
            name="file"
            onChange={upLoadImage}
          />
          <Span><CloudUpload color='white' size='large' /></Span>
        </Box>

        <Box height="small" width="small" pad="medium" align="center">
          {
            loading ? (
              <Spinner
                color="brand"
                size="1rem"
              />
            ) : (
              <Image
                fit="cover"
                src={value}
              />
            )
          }


        </Box>
        <Meter
          values={[{
            value: percentage,
            label: 'white',
            color: 'brand',
          }]}
          aria-label="meter"
          background={{ color: "light-2" }}
          max="100"
          color="dark-1"
          round={true}
          alignSelf="center"
        />
      </Box>
    </Grommet>
  )
}

export default ImageInput
