import axios from 'axios';

/**
 * 
 * @param {*} req 
 所有的 req
 处理客户端请求的时候：cookie 丢失
 */
const createInstance = (req) => axios.create({
	baseURL: 'http://localhost:3003/mapi',
	headers: {
		cookie: req.get('cookie') || ''
	}
});

export default createInstance;