import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureServer from "./useSecureServer";

const useSoldProperties = () => {
    const secureServer = useSecureServer();
    const { user } = useAuth();
    const { data: soldItem = [], refetch } = useQuery({
        queryKey: ['soldItem', user?.email],
        queryFn: async () => {
            const res = await secureServer.get(`/BoughtPropertyAgent?email=${user?.email}`);
            return res.data;
        }
    })
    return [soldItem,refetch]
};

export default useSoldProperties;