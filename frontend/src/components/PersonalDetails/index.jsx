const PersonalDetails = ({ personal_details }) => {
  return (
    <>
      <h1 className="text-white text-lg font-bold">
        Name: {personal_details.name}
      </h1>
      <p className="text-white text-lg font-bold">Email: {personal_details.email}</p>;
    </>
  );
};

export default PersonalDetails;
