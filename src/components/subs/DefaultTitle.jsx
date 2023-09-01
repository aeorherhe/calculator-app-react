/* eslint-disable react/prop-types */
const DefaultTitle = ({ title }) => {
  return (
    <>
      <h1 className="default-title">{title || "Default Title"}</h1>
      <div className="title-underline"></div>
    </>
  );
};
export default DefaultTitle;
