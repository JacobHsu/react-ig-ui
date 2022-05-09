import Item from "./Item";
import { useGetIGStoiesQuery } from "services/homeServices";
import Loading from "components/Loading";
import db from  "../../../../db.json";

const IGStory: React.FC = () => {
  const { stories } = db;
  const { data, isLoading } = useGetIGStoiesQuery("all");
  const story = process.env.NODE_ENV === 'production' ? stories : data;

  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      {isLoading && (
        <div className="flex justify-center w-full">
          <Loading />
        </div>
      )}
      { !isLoading && story?.map((item) => {
          const { id, name, avatar } = item;
          return <Item key={id} name={name} avatar={avatar} />;
        })}
    </div>
  );
};

export default IGStory;
