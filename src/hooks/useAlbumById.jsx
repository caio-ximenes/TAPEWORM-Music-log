
import { useQuery } from "@tanstack/react-query";
import { fetchAlbumById } from "../services/albums";


export function useAlbumById(albumId) {
  useQuery({
    queryKey: ["album", albumId],
    queryFn: () => fetchAlbumById(albumId),
    enabled: !!albumId,
  });
}
