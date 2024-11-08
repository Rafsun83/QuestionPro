import Dropdown from "../../CommonComponent/Button/SelectDropDown/SelectDropdown";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default function Post({ data, selectedOption, options, handleSelect }: any) {



  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p>Pots</p>

        <div className="w-[300px]">
        <Dropdown options={options} onSelect={handleSelect} selectedOption={selectedOption} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {data?.map((item: Data, index: number) => {
          return (
            <div key={index} className="border p-4 flex flex-col gap-3">
              <p className="text-[#1f38f0] font-bold">{item.title}</p>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
