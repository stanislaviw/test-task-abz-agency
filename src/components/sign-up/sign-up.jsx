import { ReactComponent as SuccesIcon } from "../assets/success-form.svg";
import { useEffect, useState } from "react";
import { CommonInput } from "../common/input";
import { CommonButton } from "../common/button";
import { CommonChechbox } from "../common/checkbox";
import { validateName } from "../../units/validateName";
import { validateEmail } from "../../units/validateEmail";
import { validatePhoneNumber } from "../../units/validatePhone";

// const data = [
//   { id: 1, name: "Lawyer" },
//   { id: 2, name: "Content manager" },
//   { id: 3, name: "Security" },
//   { id: 4, name: "Designer" },
// ];

export const SignUp = () => {
  const [positions, setPositions] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState({});
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then((response) => response.json())
      .then((data) => setPositions(data.positions))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section id="sign-up" className="sign-up">
      <div className="sign-up_box media_padding">
        {/* <SubmittedSuccessfully /> */}
        <h4 className="text_title">Working with POST request</h4>
        <div className="sign-up_form">
          <div className="sign-up_form_inputs">
            <CommonInput
              label="Your name"
              validateFunction={validateName}
              setFormData={setName}
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
          <div className="sign-up_form_image_uploader">
            <div className="text_paragraph">Select your image</div>
            <CommonButton disabled={true} text="Sign up" type="submit" />
          </div>
        </div>
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
