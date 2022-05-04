import IGUser from "../../../../components/IGUser";


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
    </div>
  );
};

export default IGProfile;
