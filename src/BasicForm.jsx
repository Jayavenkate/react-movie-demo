// import { useFormik } from "formik";
// import * as yup from "yup";
// export function BasicForm() {
//   const formValidationSchema = yup.object({
//     email: yup
//       .string()
//       .email()
//       .required("Why not fill this email?")
//       .min(12, "Need a bigger email😍"),
//     password: yup
//       .string()
//       .required("why not fill this password?")
//       .min(4, "Need a bigger password")
//       .max(10),
//   });
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: formValidationSchema,
//     onSubmit: (values) => console.log("Form values", values),
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <h1>BasicForm</h1>
//       <input
//         name="email"
//         onBlur={formik.handleBlur}
//         onChange={formik.handleChange}
//         value={formik.values.email}
//         type="email"
//         placeholder="email"
//       />

//       {formik.touched.email && formik.errors.email ? formik.errors.email : null}

//       <input
//         name="password"
//         onBlur={formik.handleBlur}
//         onChange={formik.handleChange}
//         value={formik.values.password}
//         type="password"
//         placeholder="password"
//       />

//       {formik.touched.password && formik.errors.password
//         ? formik.errors.password
//         : null}

//       <button type="submit">Submit</button>
//     </form>
//   );
// }
import { useFormik } from "formik";
import * as yup from "yup";
export function BasicForm() {
  const formValidationSchema = yup.object({
    email: yup
      .string()
      .email()
      .required("Why not fill this email?")
      .min(12, "Need a bigger email😍"),
    password: yup
      .string()
      .required("why not fill this password?")
      .min(4, "Need a bigger password")
      .max(10),
  });
  const {handleSubmit,handleChange,handleBlur,values,touched,errors} = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => console.log("Form values", values),
  });
  return (
    <form onSubmit={handleSubmit}>
      <h1>BasicForm</h1>
      <input
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        type="email"
        placeholder="email"
      />

      {touched.email && errors.email ? errors.email : null}

      <input
        name="password"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        type="password"
        placeholder="password"
      />

      {touched.password && errors.password
        ? errors.password
        : null}

      <button type="submit">Submit</button>
    </form>
  );
}