import { useQuery } from "@tanstack/react-query";
import UsePublicServer from "./usePublicSever";

const useAllReviews = () => {
    const publicServer = UsePublicServer()

    const { data: allReviews = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await publicServer.get("/AllREviews");
        return res.data;
      },
    });
    return [allReviews,refetch]
};

export default useAllReviews;