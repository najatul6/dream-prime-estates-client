import { useQuery } from "@tanstack/react-query";
import UsePublicServer from "./usePublicSever";

const useAdvertisement = () => {
    const publicServer = UsePublicServer();
    const { data: advertisement = [], refetch } = useQuery({
        queryKey: ['advertisement'],
        queryFn: async () => {
            const res = await publicServer.get(`/Advertisement`);
            return res.data;
        }
    })
    return [advertisement,refetch]
};

export default useAdvertisement;