export const formatNumber = (bounty: string) => {
	return bounty.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export async function getMostUsedLanguage(username: string): Promise<string> {
	const headers = {
		Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
	};
	const res = await fetch(`https://api.github.com/users/${username}/repos`, {
		method: 'GET',
		headers: headers,
	});

	const languages: { [key: string]: number } = {};

	const response = await res.json();

	response.forEach((repo: any) => {
		if (repo.language && !repo.private) {
			if (languages[repo.language]) {
				languages[repo.language]++;
			} else {
				languages[repo.language] = 1;
			}
		}
	});

	let mostUsedLanguage = '';
	let mostUsedLanguageCount = 0;

	Object.keys(languages).forEach((language) => {
		if (languages[language] > mostUsedLanguageCount) {
			mostUsedLanguage = language;
			mostUsedLanguageCount = languages[language];
		}
	});

	return mostUsedLanguage;
}

export const getProjects = async () => {};
