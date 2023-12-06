// import { ReactComponent as FormIcon } from "../assets/success-form.svg";
import { useEffect, useState } from "react";
import { CommonInput } from "../common/input";
import { CommonButton } from "../common/button";
import { CommonChechbox } from "../common/checkbox";

// const data = [
//   { id: 1, name: "Lawyer" },
//   { id: 2, name: "Content manager" },
//   { id: 3, name: "Security" },
//   { id: 4, name: "Designer" },
// ];

export const SignUp = () => {
  const [positions, setPositions] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState({});

  useEffect(() => {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then((response) => response.json())
      .then((data) => setPositions(data.positions))
      .catch((err) => console.log(err));
  }, []);

  console.log(positions);

  console.log(selectedPosition);

  return (
    <section id="sign-up" className="sign-up">
      <div className="sign-up_box">
        <h4 className="text_title">Working with POST request</h4>
        <div className="sign-up_form">
          <div className="sign-up_form_inputs">
            <CommonInput label="Your name" />
            <CommonInput label="Email" />
            <CommonInput label="Phone" helperText="+38 (XXX) XXX - XX - XX" />
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
