import clsx from "clsx";
import { useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
const Index = () => {
  const location = useLocation();
  const userInfo:any = useSelector((state) => state)

  const Navigation = [
    {
      id: "1",
      path: "/",
      name: "Home",
      // nestedPath: []
    },
    {
      id: "2",
      path: "/dashboard/post",
      name: "Dashboard",
    },
    {
      id: "3",
      path: "/component",
      name: "My Componenet",
      // nestedPath: []
    },
  ];

  const NestedNavigation = [
    {
      id: "1",
      path: "/dashboard/post",
      name: "Post",
    },
    {
      id: "2",
      path: "/dashboard/comment",
      name: "Comment",
    }
  ];

  return (
    <div className="m-auto w-[80%] ">
      <nav className="fixed w-[80%] z-20 bg-white">
        <ul
          className={clsx(
            "flex  gap-5 py-3 text-balck border-b-[1px] border-b-light-gray "
          )}
        >
          {Navigation?.map((item, index) => {
            return (
              <li
                key={index}
                className={clsx(
                  "cursor-pointer text-[#055160] hover:text-white",
                  "hover:bg-[#1f38f0]  px-2 rounded",
                  location.pathname === item.path ? 'bg-[#1f38f0] text-white' : ''
                )}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}

        </ul>

        <ul
          className={clsx(
           'flex items-center justify-between'
            // border-b-[1px] border-b-light-gray 
          )}
        >
          <div className= "flex  gap-5  py-3 text-balck ">
          { location.pathname === '/dashboard/post' || location.pathname === '/dashboard/comment' ? NestedNavigation?.map((item, index) => {
            return (
              <li
                key={index}
                className={clsx(
                  "cursor-pointer text-[#055160] hover:text-white",
                  "hover:bg-[#1f38f0]  px-2 rounded",
                  location.pathname === item.path ? 'bg-[#1f38f0] text-white' : ''
                )}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          }) : null}
          </div>
          <div>
            <Link to="/user" > Hi {userInfo.user.name}</Link>
            <p>{userInfo.user.email} </p>
          </div>

        </ul>
      </nav>
      <div className="pt-[120px] min-h-[100vh] text-left">
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
