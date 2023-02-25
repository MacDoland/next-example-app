declare type Pokemon = {
    id: number,
    description: string,
    name: string,
    imageUrl: string
}

declare type PokemonCollection = {
    data: Array<Pokemon>
}