import { HTTP } from "@ionic-native/http";
import Parser, { Item } from "rss-parser";

let news: Item[] | undefined;

const parser = new Parser();
const url = "http://cors-anywhere.herokuapp.com/https://halloluise.de/feed/";
// const url = "http://halloluise.de/feed/";

// Show preload news if it should not reload and there are preload news, else load the news
export async function getMessages (reload: boolean = false):Promise<any> {
    if (!reload && news) return news; 
    let response = await HTTP.get("https://halloluise.de/feed/", {}, {});
    let rawData = response.data;
    alert(rawData);
    let feed = await parser.parseString(rawData);
    alert(feed.title);
    news = feed.items;
    return news;
} 

export const getMessage = async (id: string):Promise<any> => (await getMessages())?.find((m: any) => (m.title || "") === id);
