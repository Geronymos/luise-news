import request from "./request";
const ICAL = require("ical");

let events: any;

const url = "https://halloluise.de/termine/liste/?ical=1";
// const url = "http://halloluise.de/feed/";

// Show preload news if it should not reload and there are preload news, else load the news
export async function getEvents (reload: boolean = false):Promise<any> {
    if (!reload && events) return events; 
    
    let rawData = await request(url);
    console.log("caL-string", rawData);
    let icaldata =  ICAL.parseICS(rawData);
    let ical_arr = Object.values(icaldata);
    events = ical_arr.filter((event:any) => event.type == "VEVENT"); 
    console.log("cal_data", events);
    // news = events.items;
    return events;
} 

export const getEvent = async (id: string):Promise<any> => (await getEvents())?.find((m: any) => (m.uid || "") === id);
