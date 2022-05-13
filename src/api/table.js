export function getList() {
	const items = [];
	for (let i = 0; i < 30; i++) {
		const item = {
			id: i,
			title: `title ${i + 1}`,
			status: ["published", "draft", "deleted"][i % 3],
			author: `author ${i + 1}`,
			displayTime: new Date().toISOString(),
			pageviews: Math.floor(Math.random() * 10000)
		};

		items.push(item);
	}

	return new Promise(resolve => {
		setTimeout(() => {
			resolve({
				code: 20000,
				data: {
					total: items.length,
					items
				}
			});
		}, 2222);
	});
}
