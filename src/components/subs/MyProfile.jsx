import { Links } from "./Links";
import { MyProfileData } from "./MyProfileData";

export const MyProfile = () => {
  return (
    <div className="my-profile">
      Challenge by :
      <Links
        address="https://frontendmentor.io?ref=challenge"
        text="Frontend Mentor"
      />
      Coded by :
      <Links href="https://aeorherhe.netlify.app" text="Abraham Orherhe" />
      <div className="my-profile-icons">
        {MyProfileData.map(({ icon, id, href }) => (
          <Links key={id} address={href} text={<i className={icon}></i>} />
        ))}
      </div>
    </div>
  );
};
