import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureServer from "./useSecureServer";

const useOfferList = () => {
    const secureServer = useSecureServer();
    const { user } = useAuth();
    const { data: offerList = [], refetch } = useQuery({
        queryKey: ['offerList', user?.email],
        queryFn: async () => {
            const res = await secureServer.get(`/offeredItem?email=${user?.email}`);
            return res.data;
        }
    })
    return [offerList,refetch]
};

export default useOfferList;