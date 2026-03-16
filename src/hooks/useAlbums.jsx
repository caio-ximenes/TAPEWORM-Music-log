
import { useQuery } from "@tanstack/react-query";
import { fetchAlbums } from "../services/albums";


export function useAlbums() {
  return useQuery({
    queryKey: ["albums"],
    queryFn: fetchAlbums,
    enabled: true,
  });
}
