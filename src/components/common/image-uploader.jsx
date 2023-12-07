import React, { useState } from "react";

export const CommonImageUpload = ({ image, setImage }) => {
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const imageType = /image\/(jpeg|jpg)/;

    if (selectedImage) {
      if (!imageType.test(selectedImage.type)) {
        setError("Please select a JPEG/JPG image.");
        return;
      }

      const img = new Image();
      img.onload = () => {
        if (img.width < 70 || img.height < 70) {
          setError("Minimum image size should be 70x70 pixels.");
        } else if (selectedImage.size > 5 * 1024 * 1024) {
          setError("Image size should not exceed 5 MB.");
        } else {
          setError("");
          setImage(selectedImage);
          setFileName(selectedImage.name);
        }
      };

      img.src = URL.createObjectURL(selectedImage);
    }
  };

  return (
    <div className="image_upload">
      <input
        className="image_upload_input"
        accept="image/jpeg"
        id="image-upload"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <div className="image_upload_box">
        <div className="image_upload_input_box">
          <label
            className={`image_upload_input_button text_paragraph ${
              error && "image_upload_input_border_error"
            }`}
            htmlFor="image-upload"
          >
            Upload
          </label>

          <div
            className={`image_upload_input_text ${
              error && "image_upload_input_border_error_text"
            }`}
          >
            {image ? (
              <span className="text_paragraph">{fileName}</span>
            ) : (
              "Upload your photo"
            )}
          </div>
        </div>
        {error && <p className="image_upload_error">{error}</p>}
      </div>
    </div>
  );
};
