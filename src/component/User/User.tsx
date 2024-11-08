import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/slices/UserSlice";

interface UserInfoProps {
  name: string;
  email: string;
  [key: string]: string;
}

export default function User() {
  const dispatch = useDispatch();

  const userInfo: any = useSelector((state) => state);
  console.log("userInfo---", userInfo.user)
  const [userInformation, setUserInformation] = useState<UserInfoProps>({
    name: "",
    email: "",
  });

  const filed = [
    {
      name: "Name",
      type: "text",
      value: userInformation.name,
    },
    {
      name: "Email",
      type: "text",
      value: userInformation.email,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInformation((prevState) => ({
      ...prevState,
      [name]: value, 
    }));
    dispatch(updateUser({ [name]: value }));
    // dispatch(
    //   updateUser({
    //     name: userInformation.name,
    //     email: userInformation.email,
    //   })
    // );
  };

  useEffect(() => {
    setUserInformation({
      name: userInfo.user.name,
      email: userInfo.user.email,
    });
  }, [userInfo]);

  return (
    <div className="w-[30%]">
      <form>
        <div className="flex flex-col gap-3">
          {filed.map((item, index) => {
            return (
              <div className="flex flex-col gap-2">
                <p>{item.name}</p>
                <input
                  type={item.type}
                  className="border outline-none rounded  p-2"
                  onChange={handleInputChange}
                  value={item.value} // Map the name to the state
                  name={item.name.toLowerCase()}
                />
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}
