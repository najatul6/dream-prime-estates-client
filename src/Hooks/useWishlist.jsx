import { useQuery } from "@tanstack/react-query";
import useSecureServer from "./useSecureServer";

const useWishlist = () => {
    const secureServer = useSecureServer();

    const { data: wishlist = [] } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await secureServer.get('/AllWishlist')
            return res.data;
        }
    })
    return [wishlist]
};

export default useWishlist;