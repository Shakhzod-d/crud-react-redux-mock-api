// const BASE_URL = "https://jsonplaceholder.typicode.com";
const MOCK_API = "https://628a09fee5e5a9ad32203421.mockapi.io";

export const fetchData = async () => {
  try {
    const request = await fetch(`${MOCK_API}/users`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await request.json();
  } catch (e) {
    throw new Error("GET ERROR IN FETCHING");
  }
};

export const postNewUserObj = async (newUserObj) => {
  try {
    await fetch(`${MOCK_API}/users`, {
      method: "POST",
      body: JSON.stringify(newUserObj),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  } catch (e) {
    throw new Error("GET ERROR IN POSTING NEW USER OBJ");
  }
};

export const onDeleteUser = async (id) => {
  try {
    await fetch(`${MOCK_API}/users/${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    throw new Error("GET ERROR IN DELETING USER");
  }
};

export const onUpdateUserInfo = async (obj) => {
  try {
    await fetch(`${MOCK_API}/users`, {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  } catch (e) {
    throw new Error("GET ERROR IN UPDATING USER INFO");
  }
};
