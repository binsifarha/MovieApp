import { Button, TextField } from '@material-ui/core'
import React from 'react'
import useForm from './Read'
import axios from 'axios'

function Movies() {
  var [value, setValue] = useForm({ movie: "", actor: "", actress: "", director: "", producer: "", camera: "", year: "", language: "" })

  const buttonHandle = () => {

    console.log(value)
    axios.post("http://localhost:8000/add", value).then(
      (response) => {
        console.log(response.data)

        if(response.data.status==="Success")
        {
          alert("successfully added")
        }
        else
        {
          alert("error")
        }
      }
    )

  }


  return (
    <div>
      <TextField name="movie"
        fullWidth
        value={value.movie}
        onChange={setValue}
        margin="normal"
        color="primary"
        variant="filled"
        label="Enter the movie name" />
      <TextField
        name="actor"
        value={value.actor}
        onChange={setValue}
        fullWidth
        margin="normal"
        color="primary"
        variant="filled"
        label="Enter the actor name" />
      <TextField
        name="actress"
        value={value.actres}
        onChange={setValue}
        fullWidth
        margin="normal"
        color="primary"
        variant="filled"
        label="Enter the actress name" />
      <TextField
        fullWidth
        name="director"
        value={value.director}
        onChange={setValue}
        margin="normal"
        color="primary"
        variant="filled"
        label="Enter the director name" />
      <TextField
        fullWidth
        name="producer"
        value={value.producer}
        onChange={setValue}
        margin="normal"
        color="primary"
        variant="filled"
        label="producer name" />
      <TextField
        name="camera"
        value={value.camera}
        onChange={setValue}
        fullWidth
        margin="normal"
        color="primary"
        variant="filled"
        label="camera man " />
      <TextField
        name="year"
        value={value.year}
        onChange={setValue}
        fullWidth
        margin="normal"
        color="primary"
        variant="filled"
        label="released year" />
      <TextField
        name="language"
        value={value.language}
        onChange={setValue}
        fullWidth
        margin="normal"
        color="primary"
        variant="filled"
        label="Enter the language " />
      <Button
        onClick={buttonHandle}
        fullWidth
        color="primary"
        variant="contained">Submit</Button>



    </div>
  )
}

export default Movies
