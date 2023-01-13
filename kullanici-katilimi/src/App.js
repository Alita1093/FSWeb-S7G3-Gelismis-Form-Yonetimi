import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Data from "./data";
import * as Yup from "yup";
import axios from "axios";
import Error from "./error";
const formSema = Yup.object().shape({
  Email: Yup.string()
    .email("Geçerli bir email adresi girin")
    .required("Email alanı zorunludur"),
  Password: Yup.string().min(5, "En az 5 karakter girmelisiniz"),
  Name: Yup.string(),
  kosulKabul: Yup.boolean().oneOf(
    [true],
    "Uygulamayı kullanmak için koşulları kabul etmelisiniz"
  ),
});
function App() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
    kosulKabul: false,
  });

  const [errors, setErrors] = useState({
    Email: "",
    kosulKabul: "",
    Password: "",
    Name: "",
  });
  const [registerMember, setRegisterMember] = useState({
    Email: "",
    kosulKabul: "",
    Password: "",
    Name: "",
  });
  useEffect(() => {
    formSema.isValid(formData).then((response) => setSubmitDisable(response));
  }, [formData]);
  const [submitDisable, setSubmitDisable] = useState(false);
  function checkFormErrors(name, value) {
    Yup.reach(formSema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", [formData])
      .then((response) => setRegisterMember(response.data))
      .catch((err) => console.log(err));
  }
  function handleChange(event) {
    const { name, value } = event.target;

    let yeniDeger = value;
    if (event.target.type === "checkbox") {
      yeniDeger = event.target.checked;
    }
    checkFormErrors(name, yeniDeger);
    setFormData({
      ...formData,
      [name]: yeniDeger,
    });
  }

  return (
    <div className="App">
      <Data
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        submitDisable={submitDisable}
      ></Data>
      <Error errors={errors} />

      {registerMember.Name !== "" && (
        <p>
          {registerMember[0].Email} adresli {registerMember[0].Name} kaydedildi.
        </p>
      )}
    </div>
  );
}

export default App;
