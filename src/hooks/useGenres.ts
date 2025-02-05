import useData from "./useData";

export interface Gener {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Gener>("/genres");
export default useGenres;
