import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables'

const { API_URL, PROD_API_URL } = getEnvVariables()

const caledarApi = axios.create({
	baseURL: PROD_API_URL
});

caledarApi.interceptors.request.use(config => {
	config.headers = {
		...config.headers,
			'x-token': localStorage.getItem('token')
	}

	return config;
})

export default caledarApi;