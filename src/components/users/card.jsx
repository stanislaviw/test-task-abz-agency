export const UsersCard = ({ user }) => {
  const { photo, name, email, position, phone } = user;

  return (
    <div className="card_box">
      <img src={photo} alt="avatar" className="card_box_image" />
      <p className="text_paragraph card_box_text_paragraph">{name}</p>
      <div className="card_box_text_information ">
        <p className="text_paragraph card_box_text_paragraph">{position}</p>
        <p className="text_paragraph card_box_text_paragraph">{email}</p>
        <p className="text_paragraph card_box_text_paragraph">{phone}</p>
      </div>
    </div>
  );
};
