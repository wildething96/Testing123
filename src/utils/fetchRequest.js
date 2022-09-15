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
      `https://langdon.azure-api.net/api/GetRequest/Get`,
      {
        // method: "GET",
        headers: {
          // "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "*",
          "Ocp-Apim-Subscription-Key": "c28abe027f5d468cbedef72310dc06ee",
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

export const signIn = async (username, password) => {
  console.log(username, password);
  await fetch(
    "https://loginapi20220819095559.azurewebsites.net/api/Authentication/Login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Access-Control-Allow-Origin": "*",
        "Ocp-Apim-Subscription-Key": "c28abe027f5d468cbedef72310dc06ee",
      },
      body: JSON.stringify({
        email: username,
        password,
        // email: "michale9@ethereal.email",
        // password: "Password5!",
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
  // console.log(username, password);
};
//   email = "michale9@ethereal.email",
//   password = "Password5!"
// ) => {
//   try {
//     const response = await fetch(
//       `https://langdon.azure-api.net/v1/api/Authentication/Login`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           // "Access-Control-Allow-Origin": "*",
//           // "Ocp-Apim-Subscription-Key": "c28abe027f5d468cbedef72310dc06ee",
//         },
//         // mode: "no-cors",
//         body: JSON.stringify({
//           email: email,
//           password: password,
//         }),
//       }
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// let data = {
//   email: "michale9@ethereal.email",
//   password: "Password5!",
// };

let config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": "c28abe027f5d468cbedef72310dc06ee",
  },
};

export const signIn2 = async (username, password) => {
  await axios
    .post(
      "https://loginapi20220819095559.azurewebsites.net/api/Authentication/Login",
      { email: username, password },
      config
    )
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// export const getdata = async () => {
//   await axios
//     .get("https://langdon.azure-api.net/api/GetRequest/Get", config)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };
