import { baseURL } from "./base";

const uploadAPI = async (url, data) => {
    try {
        const response = await fetch(`${baseURL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error.detail || 'An error occurred');
        }

        const responseData = await response.json();
        return responseData;
    } catch (err) {
        throw new Error(err.message);
    }
};

export default uploadAPI