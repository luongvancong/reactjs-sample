import { commonReducer } from "@reducer/common.reducer"
import { dashboardReducer } from "@reducer/dashboard.reducer"

const rootReducer = {
  common: commonReducer,
  dashboard: dashboardReducer,
};

export default rootReducer;
