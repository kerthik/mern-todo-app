import axios from 'axios';
const instance = axios.create({
	baseURL: `http://${process.env.BACKEND_HOST || 'a423dec6c3f344a2fafbf18eb0dad0a4-274257718.ap-south-1.elb.amazonaws.com'}:8000/api`,
});
export default instance;
