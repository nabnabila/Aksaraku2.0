import axios from "axios";

// Signup function
export const signup = async (email, password) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/user/daftar`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      throw new Error("User telah terdaftar");
    } else {
      throw new Error("Daftar Gagal");
    }
  }
};

// Login function
export const login = async (email, password) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/user/masuk`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error("Data Belum benar");
  }
};
