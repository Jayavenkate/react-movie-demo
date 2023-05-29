import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  name: yup
    .string()
    .required("Why not fill this email?")
    .min(12, "Need a bigger email😍"),
  poster: yup
    .string()
    .url()
    .required("why not fill this password?")
    .min(4, "Need a bigger password")
    .max(10),
});
export function AddMovie() {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (newmovie) => addMovie(newmovie),
    });
  const navigate = useNavigate();
  const addMovie = (newmovie) => {
  
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newmovie),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/movies");
  };
  return (
    <form onSubmit={handleSubmit} className="add-movie">
      <TextField
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Name"
        variant="outlined"
      />
      {/* {touched.name && errors.name ? errors.name : null} */}

      <TextField
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Poster"
        variant="outlined"
      />
      {/* {touched.poster && errors.poster ? errors.poster : null} */}

      <TextField
        name="Rating"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Rating"
        variant="outlined"
      />
      {/* {touched.rating && errors.rating ? errors.rating : null} */}

      <TextField
        name="Summary"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Summary"
        variant="outlined"
      />
      {/* {touched.summary && errors.summary ? errors.summary : null} */}

      <TextField
        name="Trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        label="Trailer"
        variant="outlined"
      />
      {/* {touched.trailer && errors.trailer ? errors.trailer : null} */}

      <Button type="submit" variant="contained">
        Add Movie
      </Button>
    </form>
  );
}
