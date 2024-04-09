import {
  FavoritePokemons,
  PokemonGridCards,
  PokemonsResponse,
  SimplePokemon,
} from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Lorem lorem lorem lorem",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons Favoritos <small className="text-blue-500">Global State</small>
      </span>
      {/* <PokemonGridCards pokemons={[]} /> */}
      <FavoritePokemons />
    </div>
  );
}
