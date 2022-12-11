export interface ICategory {
    id: number;
    title: string;
}

export interface IPost{
    id: number;
    title: string;
    status: "published" | "draft" | "rejected";
    category: { id: number };
    createdAt: string;
}

export interface IUser{
    "id": number,
    "firstName": string,
    "lastName": string,
    "email": string,
    "status": boolean,
    "birthday": string,
    "skils": array,
    "avatar":IAvatar
}

export interface IAvatar{
    "name": string,
    "percent": number,
    "size": number,
    "status": string,
    "type": string,
    "uid": string,
    "url": string
}

export interface ICategory{
    "id": number,
    "title": string
}