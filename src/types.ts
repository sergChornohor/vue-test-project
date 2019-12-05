export interface HeaderLinks{
    title: string,
    url: string,
    exact: boolean,
}

export interface ActivityPosts{
    postClass: string,
    text: string,
    time: string,
    imgs?: string[];
}

export interface Tasks{
    title: string,
    description: string, 
    exTime: string,
}
