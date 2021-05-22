import { HTTP } from '@ionic-native/http';
import { isPlatform } from '@ionic/react';

const proxy = "http://cors-anywhere.herokuapp.com/";

export default async function request(url:string): Promise<any> {
    return isPlatform("android") || isPlatform("ios") ? (await HTTP.get(url, {}, {})).data : await (await (await fetch(proxy + url)).text());
} 