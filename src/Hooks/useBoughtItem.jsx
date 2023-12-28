import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureServer from "./useSecureServer";

const useBoughtItem = () => {
    const secureServer = useSecureServer();
    const { user } = useAuth();
    const { data: boughtItem = [], refetch } = useQuery({
        queryKey: ['boughtItem', user?.email],
        queryFn: async () => {
            const res = await secureServer.get(`/BoughtProperty?email=${user?.email}`);
            return res.data;
        }
    })
    return [boughtItem,refetch]
};

export default useBoughtItem;