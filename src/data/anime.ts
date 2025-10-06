// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

const localAnimeList: AnimeItem[] = [
	{
		title: "莉可丽丝",
		status: "completed",
		rating: 9.8,
		cover: "/assets/anime/lkls.webp",
		description: "Girl's gunfight",
		episodes: "12 episodes",
		year: "2022",
		genre: ["Action", "Slice of life"],
		studio: "A-1 Pictures",
		link: "https://www.bilibili.com/bangumi/media/md28338623",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2022-07",
		endDate: "2022-09",
	},
	{
		title: "冰菓",
		status: "completed",
		rating: 9.8,
		cover: "/assets/anime/冰菓.webp",
		description: "Everyday puzzles reveal hidden truths of youth.",
		episodes: "23 episodes",
		year: "2012",
		genre: ["Deduce","Romantic","Daily","Campus"],
		studio: "京阿尼",
		link: "https://www.bilibili.com/bangumi/media/md3398",
		progress: 23,
		totalEpisodes: 23,
		startDate: "2022-07",
		endDate: "2022-09",
	},
	{
		title: "请问您今天要来点兔子吗？",
		status: "completed",
		rating: 9.0,
		cover: "/assets/anime/tz1.webp",
		description: "A group of girls' warm daily life",
		episodes: "12 episodes",
		year: "2014",
		genre: ["Daily life", "Healing"],
		studio: "White Fox",
		link: "https://www.bilibili.com/bangumi/media/md2762",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2014-04",
		endDate: "2014-06",
	},
];

export default localAnimeList;
