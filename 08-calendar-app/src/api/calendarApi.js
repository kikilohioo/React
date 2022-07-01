import axios from 'axios';

const caledarApi = axios.create({
	baseURL: 'https://caiqui-calendar-app.herokuapp.com/api'
});

caledarApi.interceptors.request.use(config => {
	config.headers = {
		...config.headers,
			'x-token': localStorage.getItem('token')
	}

	return config;
})

export default caledarApi;