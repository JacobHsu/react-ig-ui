import IGContainer from "../../components/IGContainer";
import IGHeader from "../../components/IGHeader";
import IGUser from "../../components/IGUser";
// import { friends } from "../../Friends";
import { useAppSelector } from "../../hooks";

const Following: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends;
  return (
    <>
      <IGHeader />
      <IGContainer>
        <p className="box-border px-4 my-8 text-2xl font-bold">Following</p>
        <div className="box-border mx-2 mt-8 shadow-md">
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
      </IGContainer>
    </>
  );
};

export default Following;
