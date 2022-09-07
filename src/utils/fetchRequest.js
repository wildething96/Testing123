import axios from "axios";

export const postComp = async (compName, compCode) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_REST_API}create-comp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          compId: 0,
          compName,
          compCode,
        }),
        mode: "cors",
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async () => {
  try {
    const response = await fetch(
      `https://langdon.azure-api.net/v1/api/GetRequest/Get`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; chartset = utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const singIn = async (
  email = "michale9@ethereal.email",
  password = "Password5!"
) => {
  try {
    const response = await fetch(
      `https://langdon.azure-api.net/v1/api/Authentication/Login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        mode: "cors",
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

let data = {
  email: "michale9@ethereal.email",
  password: "Password5!",
};

let config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    "Content-Type": "application/json; chartset = utf-8",
  },
};

export const signIn2 = async () => {
  await axios
    .post(
      "https://langdon.azure-api.net/v1/api/Authentication/Login",
      data,
      config
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getdata = async () => {
  await axios
    .get(
      "https://loginapi20220819095559.azurewebsites.net/api/GetRequest/Get",
      config
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
