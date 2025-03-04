import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody) => {
  try {
    const response = await axios({
      method: httpMethod,
      url: url,
      data: reqBody,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("API Error:", error);
    return error;
  }
};

export default commonAPI;
