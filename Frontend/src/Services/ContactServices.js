import api from "../Services/Api";

export const contactDetails = (formData) => {
    return api.post("/createContact", formData);
};