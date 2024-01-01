import { useQuery } from "@tanstack/react-query";
import useSecureServer from "./useSecureServer";

const useAllUser = () => {
    const secureServer = useSecureServer();

  const { data: Allusers = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await secureServer.get("/AllUsers");
      return res.data;
    },
  });
  return [Allusers,refetch]
};

export default useAllUser;