import icons from "./Icons";

type IGPostProps = {
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
  account: string;
};

const Comment: React.FC<IGPostProps> = ({
  likes,
  description,
  hashTags,
  createTime,
  account,
}) => {
  return (
    <div className="px-4">
      <div className="box-border flex justify-between mt-4 mb-4">
        <div className="flex">
          {icons.like}
          {icons.comment}
          {icons.share}
        </div>
        {icons.collection}
      </div>
      <p className="mb-2 text-sm font-bold">{likes} likes</p>

      <p className="text-sm">
        <span className="inline-block mr-1 text-sm font-bold">{account}</span>
        {description}
      </p>
      <p className="text-sm text-blue-900">{hashTags}</p>
      <p className="text-gray-400 text-xs font-[500] mt-2">
        View all 999 comments
      </p>
      <p className="text-gray-400 text-[10px] mt-1">{createTime}</p>
    </div>
  );
};

export default Comment;
