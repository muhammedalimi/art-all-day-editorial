// function SubmitSection() {
//   return (
//     <section className="submitSection">
//       <p className="sectionLabel">Open Call</p>

//       <h2>Have art we should see?</h2>

//       <p>
//         Studio Hours accepts artist submissions, studio notes, exhibition
//         reflections, and interview pitches from artists and writers.
//       </p>

//       <button>Submit Work</button>
//     </section>
//   )
// }

// export default SubmitSection


// import { useState } from "react"
// import type { FormEvent, ChangeEvent } from "react"

// function SubmitSection() {

//   const [file, setFile] = useState(null)
//   const [message, setMessage] = useState("")

//   async function handleSubmit(e) {
//     e.preventDefault()

//     const formData = new FormData()

//     formData.append("artistName", "Muhammed")
//     formData.append("artistEmail", "test@example.com")
//     formData.append("title", "Artwork Submission")
//     formData.append("description", "Submitted through Art All Day")
//     formData.append("image", file)

//     try {

//       const response = await fetch(
//         "http://localhost:7071/api/uploadArtwork",
//         {
//           method: "POST",
//           body: formData
//         }
//       )

//       const data = await response.json()

//       setMessage(data.message)

//     } catch(error) {

//       console.error(error)
//       setMessage("Upload failed")

//     }
//   }


//   return (
//     <section className="submitSection">

//       <p className="sectionLabel">
//         Open Call
//       </p>

//       <h2>
//         Have art we should see?
//       </h2>

//       <p>
//         Studio Hours accepts artist submissions, studio notes,
//         exhibition reflections, and interview pitches from
//         artists and writers.
//       </p>


//       <form onSubmit={handleSubmit}>

//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e)=>setFile(e.target.files[0])}
//         />


//         <button type="submit">
//           Submit Work
//         </button>

//       </form>


//       <p>
//         {message}
//       </p>

//     </section>
//   )
// }

// export default SubmitSection

import { useState } from "react"
import type { FormEvent, ChangeEvent } from "react"

function SubmitSection() {
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!file) {
      setMessage("Please select an image before submitting.")
      return
    }

    const formData = new FormData()

    formData.append("artistName", "Muhammed")
    formData.append("artistEmail", "test@example.com")
    formData.append("title", "Artwork Submission")
    formData.append("description", "Submitted through Art All Day")
    formData.append("image", file)

    try {
      const apiUrl =
        import.meta.env.VITE_API_URL ||
        "http://localhost:7071"

      const response = await fetch(
        `${apiUrl}/api/uploadArtwork`,
        {
          method: "POST",
          body: formData,
        }
      )

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.status}`)
      }

      const data = await response.json()

      setMessage(data.message || "Artwork submitted successfully.")
    } catch (error) {
      console.error(error)
      setMessage("Upload failed. Please try again.")
    }
  }

  function handleFileChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    const selectedFile = e.target.files?.[0] ?? null
    setFile(selectedFile)
  }

  return (
    <section className="submitSection">

      <p className="sectionLabel">
        Open Call
      </p>

      <h2>
        Have art we should see?
      </h2>

      <p>
        Studio Hours accepts artist submissions, studio notes,
        exhibition reflections, and interview pitches from
        artists and writers.
      </p>

      <form onSubmit={handleSubmit}>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

        <button type="submit">
          Submit Work
        </button>

      </form>

      <p>
        {message}
      </p>

    </section>
  )
}

export default SubmitSection