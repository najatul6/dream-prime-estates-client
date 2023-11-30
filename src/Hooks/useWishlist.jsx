import { useQuery } from "@tanstack/react-query";
import useSecureServer from "./useSecureServer";
import useAuth from "./useAuth";

const useWishlist = () => {
    const secureServer = useSecureServer();
    const { user } = useAuth();
    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
            const res = await secureServer.get(`/AllWishlist?email=${user?.email}`);
            return res.data;
        }
    })
    return [wishlist,refetch]
};

export default useWishlist;