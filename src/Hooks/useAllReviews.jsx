import { useQuery } from "@tanstack/react-query";
import useSecureServer from "./useSecureServer";

const useAllReviews = () => {
    const secureServer = useSecureServer();

    const { data: AllReviews = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await secureServer.get("/AllUsers");
        return res.data;
      },
    });
    return [AllReviews,refetch]
};

export default useAllReviews;