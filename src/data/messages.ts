import Parser, {Item} from "rss-parser";

let messages: Item[] | undefined = [
];

const parser = new Parser();
const url = "http://cors-anywhere.herokuapp.com/https://halloluise.de/feed/";

export const getMessages = async() => {
  const RSS = await parser.parseURL(url);
  console.log(RSS);
  messages = RSS.items;
  return messages;
};

export const getMessage = (id: number) => messages?.find(m => m.id === id);
