import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";

const useRole = () => {
  const { user, loading } = useContext(AuthContext);
  const [role, setRole] = useState("user");
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://tradeflow-sarver.vercel.app/users/${user.email}/role`)
        .then((res) => res.json())
        .then((data) => {
          setRole(data.role);
          setRoleLoading(false);
        });
    } else {
      setRole("user");
      setRoleLoading(false);
    }
  }, [user]);

  return [role, roleLoading];
};

export default useRole;
