import Parser, { Item } from "rss-parser";

let news: Item[] | undefined;

const parser = new Parser();
const url = "http://cors-anywhere.herokuapp.com/https://halloluise.de/feed/";

// Show preload news if it should not reload and there are preload news, else load the news
export const getMessages = async (reload: boolean = false) => (!reload && news) ? news : (news = (await parser.parseURL(url))?.items);

export const getMessage = async (id: string) => (await getMessages())?.find(m => (m.title || "") === id);
