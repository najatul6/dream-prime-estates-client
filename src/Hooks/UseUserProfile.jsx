import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureServer from "./useSecureServer";

const UseUserProfile = () => {
  const { user } = useAuth();
  const secureServer = useSecureServer();

  const { data: userprofile = [] } = useQuery({
    queryKey: [user?.email],
    queryFn: async () => {
      const res = await secureServer.get(`/AllUsers/${user.email}`);
      return res.data;
    },
  });
  return [userprofile];
};

export default UseUserProfile;
