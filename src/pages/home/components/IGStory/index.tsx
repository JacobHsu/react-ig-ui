import Item from "./Item";
import db from  "../../../../db.json";

const IGStory: React.FC = () => {
  const { stories } = db;

  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      { stories?.map((item) => {
          const { id, name, avatar } = item;
          return <Item key={id} name={name} avatar={avatar} />;
        })}
    </div>
  );
};

export default IGStory;
