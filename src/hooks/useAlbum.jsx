
import { useQuery } from "@tanstack/react-query";
import { fetchAlbumById } from "../services/albums";

export function useAlbum(albumId) {
  return useQuery({
    queryKey: ["album", albumId],
    queryFn: () => fetchAlbumById(albumId),
    enabled: !!albumId,
  });
}
