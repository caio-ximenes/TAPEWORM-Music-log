import { useQuery } from "@tanstack/react-query";
import { fetchArtistById } from "../services/artists";

export function useArtistById(artistId) {
  return useQuery({
    queryKey: ["artist", artistId],
    queryFn: () => fetchArtistById(artistId),
    enabled: !!artistId,
  });
}
