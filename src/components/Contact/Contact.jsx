import "./Contact.css";
import { useLanguage } from "../LanguageContext/LanguageContext";
import dataLanguage from "../../languages/contact.json";
import { useForm } from "@formspree/react";
import { Button, TextField, Tooltip } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
function Projects() {
  const [state, handleSubmit] = useForm("xzblydjk");
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Manejar cambios en los campos de texto
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Verificar si todos los campos están llenos
  const isFormComplete = () => {
    return formData.name && formData.email && formData.message;
  };

  const handleMouseEnter = () => {
    setIsTooltipOpen(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipOpen(false);
  };
  return (
    <>
      <div className="contact-title">
        <h2 className="outfit-bold">{dataLanguage.title.span[language]}</h2>
        <h3 className="outfit-extralight">
          {dataLanguage.title.subtitle[language]}
        </h3>
      </div>
      <div className="contact">
        <form className="email-field" onSubmit={handleSubmit}>
          <div className="contact-form">
            {!state.succeeded ? (
              <>
                <div className="first-row">
                  <TextField
                    fullWidth
                    id="name"
                    type="text"
                    name="name"
                    label={dataLanguage.form.nameField[language]}
                    variant="outlined"
                    value={formData.name}
                    onChange={handleInputChange}
                    InputProps={{
                      sx: {
                        color: "#FFFFFF",
                      },
                    }}
                    sx={{
                      "& label": { color: "rgba(200, 200, 200, 0.6)" },
                      "& label.Mui-focused": { color: "#FF99BE" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgba(200, 200, 200, 0.1)",
                        },
                        "&:hover fieldset": { borderColor: "#FF99BE" },
                        "&.Mui-focused fieldset": { borderColor: "#FF99BE" },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleInputChange}
                    InputProps={{
                      sx: {
                        color: "#FFFFFF",
                      },
                    }}
                    sx={{
                      "& label": { color: "rgba(200, 200, 200, 0.6)" },
                      "& label.Mui-focused": { color: "#FF99BE" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgba(200, 200, 200, 0.1)",
                        },
                        "&:hover fieldset": { borderColor: "#FF99BE" },
                        "&.Mui-focused fieldset": { borderColor: "#FF99BE" },
                      },
                    }}
                  />
                </div>
                <TextField
                  id="message"
                  type="text"
                  name="message"
                  label={dataLanguage.form.messageField[language]}
                  variant="outlined"
                  value={formData.message}
                  onChange={handleInputChange}
                  multiline
                  rows={3}
                  InputProps={{
                    sx: {
                      color: "#FFFFFF",
                    },
                  }}
                  sx={{
                    "& label": { color: "rgba(200, 200, 200, 0.6)" },
                    "& label.Mui-focused": { color: "#FF99BE" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "rgba(200, 200, 200, 0.1)" },
                      "&:hover fieldset": { borderColor: "#FF99BE" },
                      "&.Mui-focused fieldset": { borderColor: "#FF99BE" },
                    },
                  }}
                />
                <Tooltip
                  title={dataLanguage.form.tooltipSend[language]}
                  followCursor
                  open={!isFormComplete() && isTooltipOpen}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span>
                    <Button
                      fullWidth
                      type="submit"
                      variant="outlined"
                      endIcon={<SendIcon />}
                      disabled={!isFormComplete() || state.submitting}
                      sx={{
                        color: "#FFFFFF",
                        borderColor: "rgba(200, 200, 200, 0.1)",
                        backgroundColor: isFormComplete()
                          ? "rgba(200, 200, 200, 0.1)"
                          : "transparent",
                        "&:hover": {
                          borderColor: "#FF99BE",
                          backgroundColor: "#FFC2D8",
                          color: "#030303",
                        },
                        "&:focus": {
                          borderColor: "#FEBFA6",
                        },
                      }}
                    >
                      {dataLanguage.form.sendField[language]}
                    </Button>
                  </span>
                </Tooltip>
              </>
            ) : (
              <div className="success-form">
                <h2 className="outfit-regular">
                  {dataLanguage.form.confirmationFirst[language]}
                </h2>
                <h2 className="outfit-regular">
                  {dataLanguage.form.confirmationSecond[language]}
                </h2>
                <CheckCircleOutlineIcon color="success" fontSize="large" />
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default Projects;
