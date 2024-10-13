import { GameQuery } from "../App";
import useData from "./useData";
import { Gener } from "./useGenres";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platfomrs: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;