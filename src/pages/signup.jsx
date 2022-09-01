import { useState } from "react";
import { Navbar } from "../components/navbar";
import React from "react";
import styled from "styled-components";

export const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username + password);
  };

  return (
    <Container>
      <SignupBox>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="firstname">Name:</label>
            <input
              type="text"
              name="firstname"
              id="firtsname"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="username">Email:</label>
            <input
              type="email"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button onClick={handleSubmit}>Submit</button>
            <button>Register</button>
          </div>
        </form>
      </SignupBox>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  margin: 5rem auto;
  max-width: 800px;
  width: 40%;
  height: 30px;
  background: darkgrey;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  button {
    cursor: pointer;
  }
`;
const SignupBox = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  color: black;
  max-width: 800px;
  width: 40%;
  height: 50%;
  border: 3px groove darkgrey;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    margin-top: 2rem;
  }

  form > div {
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }

  label {
  }
`;
