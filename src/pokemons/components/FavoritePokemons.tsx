"use client";
import { useAppSelector } from "@/store";
import { PokemonGridCards } from "./PokemonGridCards";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );

  return <PokemonGridCards pokemons={favoritePokemons} />;
};
