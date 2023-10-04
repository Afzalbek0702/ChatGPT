import { configureStore } from "@reduxjs/toolkit";
import auth from "../Slice/auth";
export default configureStore({
   reducer: {
      auth,
      
   },
});
