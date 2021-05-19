import React, { useState } from 'react';
import { Box } from "grommet";
import ImageInput from "./components/ImageInput ";
import axios from 'axios'




function App() {

  const [image, setImage] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [percentage, setPercentage] = useState(0)



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
    <Box align="center" alignContent="center" pad="large">

      <ImageInput value={image} upLoadImage={upLoadImage} percentage={percentage} loading={loading} />


    </Box>
  );
}

export default App;
