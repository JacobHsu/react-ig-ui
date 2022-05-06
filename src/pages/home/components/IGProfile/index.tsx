import IGUser from "../../../../components/IGUser";
import { friends } from "../../../../Friends";

const IGProfile: React.FC = () => {


  return (
    <div className="box-border p-2 mt-8 ml-8 shadow-lg">
      <IGUser
        account="jacob_hsu"
        location="taiwan"
        avatar="/images/avatar.png"
        size="medium"
      />
      <p className="mx-4 mt-4 mb-3 text-sm font-bold text-gray-400">
        You are following
      </p>
      {friends.map((item) => {
        const { id, account, avatar, isFollowing, location } = item;
        return (
          <div className="-mt-3">
            <IGUser
              key={id}
              id={id}
              account={account}
              avatar={avatar}
              location={location}
              isFollowing={isFollowing}
              showFollow
            />
          </div>
        );
      })}
    </div>
  );
};

export default IGProfile;
