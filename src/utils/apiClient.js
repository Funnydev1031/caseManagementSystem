import axios from "axios";

const makingUrl = (url) => {
    
	return process.env.REACT_APP_BASE_URL + url;
};

const apiClient = (options) => {
	const url = makingUrl(options.url);

	return axios({
		...options,
		url: url,
	});
};

export default apiClient;
