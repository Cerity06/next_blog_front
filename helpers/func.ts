import { CryptoType } from "../typescript/types";

export const getData = async (url: string) => {
    const res = await fetch(url);
    let data: CryptoType[] = [];

    try {
        data = await res.json();
    } catch (error) {
        return null
    }
    return data
}


