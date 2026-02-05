import "./VerificationCodeModel.css";
import { useState, useEffect } from "react";
import Title from "../../components/Title/Title";
import Button from "../Button/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function VerificationCodeModel() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  });

  const [isDone, setIsDone] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(true);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [timer, setTimer] = useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value === "" || /^[0-9]$/.test(value)) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateCode = () => {
    const enteredCode = Object.values(formData).join("");
    const storedCode =
      JSON.parse(localStorage.getItem("verificationCode"))?.[0]?.code || "";

    if (enteredCode === storedCode) {
      return true;
    }
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const allFieldsFilled = Object.values(formData).every(
      (code) => code !== "",
    );
    if (!allFieldsFilled) {
      toast.error("please fill all fields");
      return;
    }

    const isValid = validateCode();
    if (isValid) {
      setIsCodeValid(true);
      toast.success("done", {
        duration: 4000,
        position: "top-center",
        className: "toaster",
      });
      navigate("/");

      const verificationCode =
        JSON.parse(localStorage.getItem("verificationCode")) || [];
      const newVerificationCode = {
        id: Date.now(),
        ...formData,
      };
      verificationCode.push(newVerificationCode);
      localStorage.setItem(
        "verificationCode",
        JSON.stringify(verificationCode),
      );

      setFormData({
        code1: "",
        code2: "",
        code3: "",
        code4: "",
        code5: "",
        code6: "",
      });
    } else {
      setIsCodeValid(false);
      toast.error("The code is not correct");
    }
  };

  const handleResendCode = (event) => {
    event.preventDefault();

    if (attemptsLeft <= 0) {
      toast.error("Try later can,t send again now.");
      return;
    }

    if (timer > 0) {
      toast.error(`please wait 30 s then send the code again${timer} `);
      return;
    }

    setAttemptsLeft(attemptsLeft - 1);
    setTimer(30);
    toast.success(" we sent the code again to your email", {
      duration: 4000,
      position: "top-center",
      className: "toaster",
    });

    localStorage.setItem(
      "verificationCode",
      JSON.stringify([{ code: "123456" }]),
    );
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <section className="verification-section">
      <Title
        title="Sign in with two-step verification "
        type="sections-description"
        line="line-sec"
      />

      <p id="send-note">
        we've sent a<span> 6</span> digit code to your email
      </p>
      <form onSubmit={handleSubmit}>
        <h4 id="enter-note"> Enter the code you recived: </h4>
        <div className="inputs-verification">
          {["code1", "code2", "code3", "code4", "code5", "code6"].map(
            (code, index) => (
              <input
                key={index}
                type="text"
                name={code}
                value={formData[code]}
                onChange={handleChange}
                className={`verification-input ${isCodeValid ? "" : "error"}`}
                maxLength={1}
                inputMode="numeric"
                pattern="[0-9]"
                aria-label={`Verification code${index + 1}`}
              />
            ),
          )}
        </div>

        <div className="btns-verification">
          <Button
            text="cotinue"
            type="verification-btn"
            onClick={handleSubmit}
          />
          <p id="enter-note">Didn't receive a code? </p>
          <Button
            text={`send again : ${timer}`}
            type="verification-btn"
            onClick={handleResendCode}
          />
        </div>
      </form>
    </section>
  );
}
