import { useAppSelector } from "../hooks/index";

const useAuth = () => {
  const auth = useAppSelector((state) => state.auth);

  return auth.accessToken && auth.user;
};

export default useAuth;
