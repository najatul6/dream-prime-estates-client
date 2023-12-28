import UsePublicServer from "./usePublicSever";
import { useQuery } from "@tanstack/react-query";

const useAllProperties = (search) => {
    const publicServer = UsePublicServer();

    const { data: allproperties = [], refetch } = useQuery({
        queryKey: ['allproperties'],
        queryFn: async () => {
            const res = await publicServer.get(`/AllProperties?search=${search}`);
            return res.data;
        }
    })
    return [allproperties,refetch]
    
};

export default useAllProperties;