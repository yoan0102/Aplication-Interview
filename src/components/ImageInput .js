import React, { useState } from 'react'

import { Grommet, Box, Meter, FileInput, Image, Spinner } from 'grommet'
import { CloudUpload } from 'grommet-icons'
import styled from 'styled-components'
import axios from 'axios'





const ImageInput = () => {

  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const [percentage, setPercentage] = useState(0)


  const Span = styled.span`
    margin: 0 0 0 1rem;
    cursor:pointer;
  `

  const upLoadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'yoaninterview')
    setLoading(true)
    setPercentage(0)



    const res = await axios.post(
      '	https://api.cloudinary.com/v1_1/dxrdytbzb/image/upload',
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress(e) {
          console.log(Math.round((e.loaded * 100) / e.total))
          setPercentage(Math.round((e.loaded * 100) / e.total))
        }
      }

    )








    setImage(res.data.secure_url)
    setLoading(false)


  }


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
            onChange={upLoadImage}
          />
          <Span><CloudUpload color='white' size='large' /></Span>
        </Box>

        <Box height="small" width="small" pad="medium" align="center">
          {loading ? (
            <Spinner
              color="brand"
              size="1rem"
            />
          ) : (
            <Image
              fit="cover"
              src={image}
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
