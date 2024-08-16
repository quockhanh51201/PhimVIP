export interface IMovie {
    created: Created
    modified: Modified
    _id: string
    name: string
    slug: string
    origin_name: string
    content: string
    type: string
    status: string
    poster_url: string
    thumb_url: string
    is_copyright: boolean
    sub_docquyen: boolean
    chieurap: boolean
    trailer_url: string
    time: string
    episode_current: string
    episode_total: string
    quality: string
    lang: string
    notify: string
    showtimes: string
    year: number
    view: number
    actor: string[]
    director: string[]
    category: Category[]
    country: Country[]
}

export interface Created {
    time: string
}

export interface Modified {
    time: string
}

export interface Category {
    id: string
    name: string
    slug: string
}

export interface Country {
    id: string
    name: string
    slug: string
}



export const defaultMovie: IMovie = {
    created: { time: "2024-01-01T00:00:00Z" },
    modified: { time: "2024-01-01T00:00:00Z" },
    _id: "1",
    name: "Default Movie",
    slug: "default-movie",
    origin_name: "Default Origin",
    content: "Default content for the movie.",
    type: "Action",
    status: "Released",
    poster_url: "https://example.com/default-poster.jpg",
    thumb_url: "https://example.com/default-thumb.jpg",
    is_copyright: true,
    sub_docquyen: false,
    chieurap: false,
    trailer_url: "https://example.com/default-trailer.mp4",
    time: "120 min",
    episode_current: "1",
    episode_total: "1",
    quality: "HD",
    lang: "English",
    notify: "Default notification",
    showtimes: "2024-01-01 20:00",
    year: 2024,
    view: 1000,
    actor: ["Default Actor"],
    director: ["Default Director"],
    category: [
        { id: "1", name: "Action", slug: "action" }
    ],
    country: [
        { id: "1", name: "USA", slug: "usa" }
    ]
};