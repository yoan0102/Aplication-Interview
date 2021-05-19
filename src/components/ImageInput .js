import React, { useState } from 'react'

import { Grommet, Box, Meter, FileInput, Image } from 'grommet'
import { CloudUpload } from 'grommet-icons'
import styled from 'styled-components'





const ImageInput = () => {

  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)


  const Span = styled.span`
    margin: 0 0 0 1rem;
    cursor:pointer;
  `


  return (
    <Grommet >
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
            onChange={ }
          />
          <Span><CloudUpload color='white' size='large' /></Span>
        </Box>

        <Box height="small" width="small" pad="medium">
          <Image
            fit="cover"
            src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
          />
        </Box>
        <Meter
          values={[{
            value: 60,
            label: 'sixty',
            onClick: () => { }
          }]}
          aria-label="meter"
          background={{ color: "light-2" }}
          max={100}
          color="dark-1"
          round="medium"
        />
      </Box>
    </Grommet>
  )
}


export default ImageInput
