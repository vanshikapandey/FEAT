import wave from "../assets/Wave.png";
import contactImg1 from "../assets/contact-form-img1.png";
import contactImg2 from "../assets/contact-form-img2.png";
import React, { forwardRef, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar, Alert, AlertProps } from "@mui/material";
import { useState } from "react";

export default function() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length == 0 || name.length == 0 || phoneno.length != 10) {
      setError(true);
      return;
    } else {
      setError(false);
      emailjs
        .sendForm(
          "service_6mzncsu",
          "template_d4x00dk",
          form.current,
          "49-UwRC6ZPGc1D95a"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <div className="">
      <div className="form-details col-md-8 container">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="inputEmail">Email address</label>
            <input
              style={{ background: "#030229", color: "white" }}
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            {error && email.length <= 0 ? (
              <label>Email cannot be empty</label>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label for="inputName">Name</label>
            <input
              style={{ background: "#030229", color: "white" }}
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            {error && name.length <= 0 ? (
              <label>Name cannot be empty</label>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label for="inputPhone">Phone No.</label>
            <input
              style={{ background: "#030229", color: "white" }}
              type="text"
              className="form-control"
              id="inputPhone"
              placeholder="Enter Phone no."
              onChange={(e) => setPhoneno(e.target.value)}
              name="phone_no"
            />
            {error && phoneno.length != 10 ? (
              <label>Phone number must contain 10 digits</label>
            ) : (
              ""
            )}
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">
              What Program do you want to enroll?
            </label>
            <select
              style={{ background: "#030229", color: "white" }}
              class="form-control"
              id="exampleFormControlSelect1"
              placeholder="Select"
              onChange={(e) => setCourse(e.target.value)}
              name="course_name"
            >
              <option>Course-1</option>
              <option>Course-2</option>
              <option>Course-3</option>
              <option>Course-4</option>
              <option>Course-5</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              onClick={() => {
                setOpen(true);

                if (
                  !error &&
                  email.length != 0 &&
                  name.length != 0 &&
                  phoneno.length == 10
                ) {
                  setTimeout(() => {
                    window.location.reload(false);
                    // window.scrollTo(0, 0);
                  }, 3000);
                }
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        {!error ? (
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={(event, reason) => {
              setOpen(false);
            }}
            message="Form Submitted Successfully"
          >
            <Alert severity="success" sx={{ width: "100%" }}>
              Form Submitted Successfully! We will connect soon :)
            </Alert>
          </Snackbar>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
