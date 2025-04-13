export async function getData(options: RequestInit) {
	// 接口每次调用都会返回一个随机的猫猫图片数据
	const res = await fetch("https://api.thecatapi.com/v1/images/search", options || {});
	return res.json();
}
