import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureServer from "./useSecureServer";


const useAddedProperties = () => {
    const secureServer = useSecureServer();
    const { user } = useAuth();
    const { data: addedProperties = [], refetch } = useQuery({
        queryKey: ['addedProperties', user?.email],
        queryFn: async () => {
            const res = await secureServer.get(`/MyAddedProperties?email=${user?.email}`);
            return res.data;
        }
    })
    return [addedProperties,refetch]
};

export default useAddedProperties;