import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AuthorizedLayout() {
  const navigate = useNavigate();
  const [logined] = useState(false);

  useEffect(() => {
    if (logined) {
      // 已经登录
    } else {
      navigate("/login");
    }
  }, [logined]);

  return logined ? <Outlet /> : null;
}

export default AuthorizedLayout;
