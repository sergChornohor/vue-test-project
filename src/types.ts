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
    // indexNumber: number,
    title: string,
    description: string,
    exTime: string,
    status: string,
}
