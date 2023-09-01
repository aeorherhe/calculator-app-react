/* eslint-disable react/prop-types */
// general btn component

export const Button = ({ btnText, btnClass }) => {
  return (
    <button type="button" className={btnClass || "btn"}>
      {btnText || "Click"}
    </button>
  );
};
