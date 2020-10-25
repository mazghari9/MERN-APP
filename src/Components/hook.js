import React from 'react'

function hook() {
    const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'MyImages')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/dbnaebvvu/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)

    
  }
    return (
        <div>
            
        </div>
    )
}

export default hook
