import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthApi } from "../redux/auth/loginSlice";
import { Navigate } from "react-router-dom";

function Authentication(props) {
  const dispatch = useDispatch();

  const { loginLoading } = useSelector((state) => state.login);



  if (loginLoading === false || loginLoading === null ) {
    return (
      <div>
        <Navigate to="/login" />
      </div>
    );
  } else {
    return <div>
        {props.children}
        </div>
  }
}

export default Authentication;
 