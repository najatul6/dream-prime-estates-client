import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureServer from "./useSecureServer";

const useRequestedProperties = () => {
    const secureServer = useSecureServer();
    const { user } = useAuth();
    const { data: requestList = [], refetch } = useQuery({
        queryKey: ['requestList', user?.email],
        queryFn: async () => {
            const res = await secureServer.get(`/offeredProperties?email=${user?.email}`);
            return res.data;
        }
    })
    return [requestList,refetch]
};

export default useRequestedProperties;