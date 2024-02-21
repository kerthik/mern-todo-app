import axios from 'axios';
const instance = axios.create({
	baseURL: `http://${process.env.BACKEND_HOST || 'localhost'}/api`,
});
export default instance;
