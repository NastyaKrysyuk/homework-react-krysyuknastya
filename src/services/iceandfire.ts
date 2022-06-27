import { Book, Character } from "../types/type";

const path = "https://www.anapioficeandfire.com/api/";


//запрос к серверу за данными 
export async function getData(url: string): Promise<any> {
  const res = await fetch(`${path}${url}`);
  if (!res.ok) new Error(`Could not fetch ${url}` + `, received ${res.status}`)
  return res.json();
}


//запрос с пагинацией page-к какой странице запрос, pageSize-сколько элементов на странице
export default class IceandfireApi {
  static async getBooks(page: number, pageSize: number): Promise<Book[]> {
    return await getData(`/books?page=${page}&pageSize=${pageSize}`);
  }
  static async getCharacters(page: number, pageSize: number): Promise<Character[]> {
    return await getData(`/characters?page=${page}&pageSize=${pageSize}`);
  }
  static async getCharterInfo(url: string): Promise<Character> {
    const res = await fetch(`${url}`);
    if (!res.ok) new Error(`Could not fetch ${url}` + `, received ${res.status}`)
    return res.json();
  }
}

