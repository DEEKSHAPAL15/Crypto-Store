import axios from "axios"

const login = async (formData) => {
    const res = await axios.post("/api/user/login", formData);
    localStorage.setItem("user", JSON.stringify(res.data));
    return res.data;
};

const authService = {
    login,
};

export default authService;