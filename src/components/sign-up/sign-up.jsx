import { ReactComponent as SuccesIcon } from "../assets/success-form.svg";
import { useEffect, useState } from "react";
import { CommonInput } from "../common/input";
import { CommonButton } from "../common/button";
import { CommonChechbox } from "../common/checkbox";
import { validateName } from "../../units/validateName";
import { validateEmail } from "../../units/validateEmail";
import { validatePhoneNumber } from "../../units/validatePhone";
import { CommonImageUpload } from "../common/image-uploader";

export const SignUp = () => {
  const [positions, setPositions] = useState([]);
  const [token, setToken] = useState("");
  const [selectedPosition, setSelectedPosition] = useState({});
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then((response) => response.json())
      .then((data) => setPositions(data.positions))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token")
      .then((response) => response.json())
      .then((data) => setToken(data.token))
      .catch((err) => console.log(err));
  }, []);

  const handleUpload = (
    positionValue,
    nameValue,
    emailValue,
    phoneValue,
    photoValue,
    tokenValue
  ) => {
    let newPhoneNumber = phoneValue;

    if (!newPhoneNumber.startsWith("+")) {
      newPhoneNumber = `+${newPhoneNumber}`;
    }

    const formData = new FormData();
    formData.append("position_id", positionValue);
    formData.append("name", nameValue);
    formData.append("email", emailValue);
    formData.append("phone", newPhoneNumber);
    formData.append("photo", photoValue);

    console.log(formData);

    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
      method: "POST",
      body: formData,
      headers: {
        Token: tokenValue,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          setSuccess(true);
        } else {
          setErrorMessage(data.message);
          setSuccess(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const isValid = token && phone && name && email && selectedPosition && image;

  return (
    <section id="sign-up" className="sign-up">
      <div className="sign-up_box media_padding">
        {success ? (
          <SubmittedSuccessfully />
        ) : (
          <>
            <h4 className="text_title">Working with POST request</h4>
            <form className="sign-up_form">
              <div className="sign-up_form_inputs">
                <CommonInput
                  label="Your name"
                  validateFunction={validateName}
                  setFormData={setName}
                  errorText="Username should contain 2-60 characters"
                />
                <CommonInput
                  label="Email"
                  errorText="User email, must be a valid email according to RFC2822"
                  validateFunction={validateEmail}
                  setFormData={setEmail}
                />
                <CommonInput
                  label="Phone"
                  validateFunction={validatePhoneNumber}
                  helperText="+38 (XXX) XXX - XX - XX"
                  errorText="Number should start with code of Ukraine +380"
                  setFormData={setPhone}
                />
              </div>
              <div className="sign-up_form_checkboxes">
                <p className="text_paragraph">Select your position</p>
                <div className="sign-up_form_checkboxes_box">
                  {positions.map((position) => (
                    <CommonChechbox
                      key={position.id}
                      label={position.name}
                      checked={position.name === selectedPosition.name}
                      onChange={() => setSelectedPosition(position)}
                    />
                  ))}
                </div>
              </div>
              <div
                className={`sign-up_form_image_uploader ${
                  image && "text_paragraph"
                }`}
              >
                <CommonImageUpload setImage={setImage} image={image} />
                <CommonButton
                  onClick={() =>
                    handleUpload(
                      selectedPosition.id,
                      name,
                      email,
                      phone,
                      image,
                      token
                    )
                  }
                  disabled={!isValid}
                  text="Sign up"
                />
              </div>
              <div className="error_message">{errorMessage}</div>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

const SubmittedSuccessfully = () => {
  return (
    <div className="success_form">
      <h4 className="text_title">User successfully registered</h4>
      <SuccesIcon />
    </div>
  );
};
