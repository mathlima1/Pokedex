type tipo = {
    type: {
        name: string,
        url: string
    }
}

type sprites = {
    back_default: string | null,
    back_female: string | null,
    back_shiny: string | null,
    back_shiny_female: string | null,
    front_default: string | null,
    front_female: string | null,
    front_shiny: string | null,
    front_shiny_female: string | null,
    other: {
        dream_world: {
            front_default: string | null,
            front_female: string | null
        },
        home: {
            front_default: string | null,
            front_female: string | null,
            front_shiny: string | null,
            front_shiny_female: string | null,
        },
        'official-artwork': {
            front_default: string | null,
            front_shiny: string | null,
        }
    },

}

type ability = {
    ability: {
        name: string,
        url: string
    }
    is_hidden: boolean,
    slot: number
}

type stats = {
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string
    }
}

interface pokemon {
    name: string,
    order: number,
    base_experience: number,
    types: tipo[],
    sprites: sprites,
    abilities: ability[]
    stats: stats[]
}

export type {
    tipo,
    pokemon
}