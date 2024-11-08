import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Dropdown from "../../CommonComponent/Button/SelectDropDown/SelectDropdown";

const fetchCommnets = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const fetchPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function CommentComponent() {
  const { data } = useQuery({ queryKey: ["commnet"], queryFn: fetchCommnets });

  const [selectedOption, setSelectedOption] = useState<any>(null);
  const { data: posts } = useQuery({ queryKey: ["pos"], queryFn: fetchPost });

  const filterComments = data?.filter((item:any, index:any) => {
    return !selectedOption?.value || item.postId === selectedOption.value;
  })

console.log("filterComments--", filterComments)

  const options = posts?.map((item: any, index: number) => {
    return {
      label: item.title,
      value: item.id,
    };
  });

  const handleSelect = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col gap-5 w-[50%]">
      <div className="flex items-center justify-between">
        <p>Posts</p>

        <div className="w-[300px]">
          <Dropdown
            options={options}
            onSelect={handleSelect}
            selectedOption={selectedOption}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {filterComments?.map((item: any, index: number) => {
          return (
            <div key={index} className="border p-4 flex flex-col gap-3">
              <p className="text-[#1f38f0] font-bold">{item.name}</p>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
