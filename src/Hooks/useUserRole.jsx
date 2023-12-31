import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureServer from "./useSecureServer";
import { useState } from "react";

const useUserRole = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAgent, setIsAgent] = useState(false);
  const secureServer = useSecureServer();
  const { isLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await secureServer.get(`/AllUsers/${user.email}`);
      console.log(res.data.role);
      const role = res.data.role;
      if(role === "Admin"){
        setIsAdmin(true)
      }
      else if(role === "agent"){
        setIsAgent(true)
      }else{
        setIsAdmin(false);
        setIsAgent(false);
      }
      // return res.data.role;
    },
  });
  return {isAgent, isAdmin,isLoading};
};

export default useUserRole;
