interface IThumbnail {
    path: string;
    extension: string;
}

export interface ICharacter {
    id: number;
    name: string;
    description: string;
    imageUri?: string;
    thumbnail: IThumbnail;
}
