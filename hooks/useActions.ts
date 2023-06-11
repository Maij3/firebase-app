import { authSlice } from "@/store/auth";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const AllAtions = {
  ...authSlice.actions,
};

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AllAtions, dispatch);
};

export default useActions;
