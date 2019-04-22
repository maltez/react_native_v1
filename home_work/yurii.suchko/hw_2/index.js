function task1() {
	function getRandomNumber(min = 0, max = 90) {
		return Math.floor(min + Math.random() * (max + 1 - min));
	}

	function fetchWithDelay(uri) {
		return new Promise((ok, fail) => {
			fetch(uri)
				.then((response) => {
					setTimeout(() => ok(response), getRandomNumber(1000, 5000));
				})
				.catch((error) => {
					setTimeout(() => fail(error), getRandomNumber(1000, 5000));
				})
		});
	}

	fetchWithDelay('https://jsonplaceholder.typicode.com/users/10')
		.then((response) => console.log(`success: ${response}`))
		.catch((error) => console.log(`fail: ${error}`));
}

function task2and3() {
	const host = 'https://jsonplaceholder.typicode.com';

	function parallelFetch(userId) {
		return Promise.race([
			fetch(`${host}/posts?userId=${userId}`),
			fetch(`${host}/posts?userId=${userId}`),
			fetch(`${host}/posts?userId=${userId}`),
		]);
	}

	const usersIds = [1, 2, 3, 4, 5, 6, 7];
	const getUserById =
		(userId) => fetch(`${host}/users/${userId}`);
	const preparedQueries = [];

	for (const userId of usersIds) {
		preparedQueries.push(getUserById(userId));
	}

	Promise.all(preparedQueries)
		.then((response) => Promise.all(response.map(resp => resp.json())))
		.then((response) => {
			const usersData = [];

			for (let respIndex = 0; respIndex <= response.length; respIndex++) {
				usersData.push(response[respIndex]);
			}

			return parallelFetch(usersData[0].id);
		})
		.then((userPosts) => userPosts.json())
		.then((userPosts) => console.log(userPosts))
		.catch((error) => console.log(error));
}

task1();
task2and3();