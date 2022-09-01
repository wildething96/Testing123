export const postComp = async (compName, compCode) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}create-comp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          compId : 0,
          compName,
          compCode
        }),
        mode: "cors",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  export const getAll = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}get-all-comps`, {
          method: "GET",
        })
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
      console.log(error);
    }
  };