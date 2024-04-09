import { SimplePokemon } from "@/pokemons";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PokemonsState {
  [key: string]: SimplePokemon;
}
const initialState: PokemonsState = {
  // "1": { id: "1", name: "bulbasaur" },
  // "3": { id: "3", name: "venasur" },
  // "5": { id: "5", name: "charmeleon" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state[id]) {
        delete state[id];
        return;
      }
      state[id] = pokemon;
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
