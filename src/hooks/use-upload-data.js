
import uploadAPI from "../components/api/upload";
import { useState, useCallback } from 'react';

const useUploadData = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const uploadData = useCallback(async (data) => {
        setLoading(true);
        setError(null);

        try {
            const responseData = await uploadAPI(url, data);
            return responseData;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [url]);

    return { uploadData, loading, error };
};

export default useUploadData;