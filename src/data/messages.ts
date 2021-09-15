import { HTTP } from "@ionic-native/http";
import Parser, { Item } from "rss-parser";
import request from "./request";

let news: Item[] | undefined;

const parser = new Parser();
const url = process.env.RSS_URL;

// Show preload news if it should not reload and there are preload news, else load the news
export async function getMessages (reload: boolean = false):Promise<any> {
    if (!reload && news) return news; 
    let rawData = await request(url);
    console.log("feedString", rawData);
    let feed = await parser.parseString(rawData);
    console.log("feed", feed);
    news = feed.items;
    return news;
} 

export const getMessage = async (id: string):Promise<any> => (await getMessages())?.find((m: any) => (m.title || "") === id);
