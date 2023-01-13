import React from "react";

const Data = (props) => {
  const { formData, handleSubmit, handleChange, submitDisable } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="isim">İsim</label>
          <input
            id="isim"
            name="Name"
            type="text"
            value={formData.Name}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="Email"
            type="email"
            value={formData.Email}
            onChange={handleChange}
          />
        </p>

        <p>
          <label htmlFor="sifre">Şifre</label>
          <input
            id="sifre"
            name="Password"
            type="password"
            value={formData.Password}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            id="kosul"
            name="kosulKabul"
            checked={formData.kosulKabul}
            type="checkbox"
            onChange={handleChange}
          />
          <label htmlFor="kosul">Koşulları kabul ediyorum</label>
        </p>
        <p>
          <button type="submit" disabled={!submitDisable}>
            Giriş Yap
          </button>
        </p>
      </form>
    </div>
  );
};

export default Data;
