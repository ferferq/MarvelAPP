import md5 from 'md5';

export const makeMarvelUrl = (type: string): string => {
    const timeStamp = new Date().getTime();
    const publicKey = '187e6d9f7542dc77eca329a70f0095ab';
    const privateKey = '39710f9c295177511fab8cf23aff13e7b522fb83';
    const hash = md5(timeStamp+privateKey+publicKey);

    return (`http://gateway.marvel.com/v1/public/${type}` + 
    `?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`);
};