import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Sign up/Signup.css";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Yup from "yup";

const theme = createTheme();
const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    validationSchema
      .validate(
        {
          fName: Fname,
          lName: Lname,
          email: Email,
          phone: Phone,
          password: Password,
          CPassword: Confirmpassword,
        },
        { abortEarly: false }
      )
      .then(() => {
        "";
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach((e) => {
          errors[e.path] = e.message;
        });
        setErrors(errors);
      });
  };
  const [Fname, setFname] = useState(" ");
  const [Lname, setLname] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [Phone, setPhone] = useState(" ");
  const [Password, setPassword] = useState(" ");
  const [Confirmpassword, setConfirmpassword] = useState(" ");
  const [Errors, setErrors] = useState(" ");
  const handleEmailChange = (e) => {
    setEmail(e.taget.value);
  };
  const handleFnameChange = (e) => {
    setFname(e.taget.value);
  };
  const handleLnameChange = (e) => {
    setLname(e.taget.value);
  };
  const handlephoneChange = (e) => {
    setPhone(e.taget.value);
  };
  const handlePassword = (e) => {
    setPassword(e.taget.value);
  };
  const handleconfirmPassword = (e) => {
    setConfirmpassword(e.taget.value);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string()
      .matches(/^\+?\d{10,}$/gm, "Please enter a valid phone number")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()

      .required("Password is required")
      .min(8, "Password is too short"),

    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    //   "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number"
    // )

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <>
      <Navbar />
      <div className="signup-main">
        <div className="signupsubmain">
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <br />
                <Typography component="h1" variant="h5">
                  <h1 className="Signupbutton">Sign Up</h1>
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        onChange={(e) => handleFnameChange(e)}
                      />
                      {Errors.firstName && (
                        <div style={{ color: "red" }}>{Errors.firstName}</div>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        onChange={(e) => handleLnameChange}
                      />

                      {Errors.lastName && (
                        <div style={{ color: "red" }}>{Errors.lastName}</div>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="off"
                        onChange={(e) => handleEmailChange}
                      />

                      {console.log(Errors.lastName)}
                      {Errors.email && (
                        <div style={{ color: "red" }}>{Errors.email}</div>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="Phone"
                        label="Phone Number"
                        name="Phone Number"
                        autoComplete="Phone"
                        onChange={(e) => handlephoneChange}
                      />
                      {Errors.phone && (
                        <div style={{ color: "red" }}>{Errors.phone}</div>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={(e) => handlePassword}
                      />

                      {Errors.password && (
                        <div style={{ color: "red" }}>{Errors.password}</div>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="Confirm password"
                        label="Confirm Password"
                        type="password"
                        id="Confirm password"
                        autoComplete="new-Confirmpassword"
                        onChange={(e) => handleconfirmPassword}
                      />
                      {Errors.confirmPassword && (
                        <div style={{ color: "red" }}>
                          {Errors.confirmPassword}
                        </div>
                      )}
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="center  ">
                    <Grid item>
                      Already have an account? &nbsp;
                      <Link href="/Login" variant="body2">
                        Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default Signup;
