import { useQuery } from "@tanstack/react-query";
import UsePublicServer from "./usePublicSever";

const useTestimonial = () => {
    const publicServer = UsePublicServer();
    const { data: testimonial = [], refetch } = useQuery({
        queryKey: ['testimonial'],
        queryFn: async () => {
            const res = await publicServer.get(`/AllReviews`);
            return res.data;
        }
    })
    return [testimonial,refetch]
};

export default useTestimonial;