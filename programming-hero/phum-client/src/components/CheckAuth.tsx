// CheckAuth.tsx
import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";

const CheckAuth = () => {
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    console.log("Token changed:", token);
  }, [token]);

  return null;
};

export default CheckAuth;
