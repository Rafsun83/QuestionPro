import React, { useState } from 'react'
import Post from '../../Feature/Post/Post'
import { useQuery } from '@tanstack/react-query';
import Select from 'react-dropdown-select';
// import config from '../../config/confix'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function UserPost() {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const {data} = useQuery({ queryKey: ['posta'], queryFn: fetchPosts })
  const {data:users} = useQuery({ queryKey: ['users'], queryFn: fetchUsers })

  const filterUser = data?.filter((item:any, index:any) => {
    return !selectedOption?.value || item.userId === selectedOption.value;
  })
 



  const options = users?.map((item:any, index:number) => {
    return {
      label: item?.name,
      value: item.id
    }
  })
  

  const handleSelect = (option: any) => {
    setSelectedOption(option);
  };




  return (
    <div className='w-[50%]'>
      <Post data={filterUser} selectedOption={selectedOption} options={options} handleSelect={handleSelect} />
    </div>
  )
}
