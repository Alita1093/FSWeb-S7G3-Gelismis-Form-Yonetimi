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
            data-cy="name"
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
            data-cy="email"
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
            data-cy="password"
          />
        </p>
        <p>
          <input
            id="kosul"
            name="kosulKabul"
            checked={formData.kosulKabul}
            type="checkbox"
            onChange={handleChange}
            data-cy="condition"
          />
          <label htmlFor="kosul">Koşulları kabul ediyorum</label>
        </p>
        <p>
          <button type="submit" disabled={!submitDisable} data-cy="button-test">
            Giriş Yap
          </button>
        </p>
      </form>
    </div>
  );
};

export default Data;
