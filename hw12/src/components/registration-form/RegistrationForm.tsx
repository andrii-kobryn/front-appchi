import React, {FormEvent, useEffect, useState} from "react";

interface FormData {
    username: string;
    email: string;
    userPwd: string;
}

const RegistrationForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        userPwd: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        userPwd: '',
    });

    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    }

    useEffect(() => {
        const validateUsername = () => {
            return formData.username.length < 3;
        };

        const validateUserPassword = () => {
            return formData.userPwd.length < 6;
        };

        const validateEmail = () => {
            return formData.email.includes("@");
        };

        if (validateUsername()) {
            setErrors((prevState) => ({
                ...prevState,
                username: "Логін повинен містити як мінімум 3 символи"
            }));
        } else {
            setErrors((prevState) => ({
                ...prevState,
                username: ""
            }));
        }

        if (validateUserPassword()) {
            setErrors((prevState) => ({
                ...prevState,
                userPwd: "Пароль повинен мати як мінімум 6 символів"
            }));
        } else {
            setErrors((prevState) => ({
                ...prevState,
                userPwd: ""
            }));
        }

        if (!validateEmail()) {
            setErrors((prevState) => ({
                ...prevState,
                email: "Неправильно кароч ти щось робиш"
            }));
        } else {
            setErrors((prevState) => ({
                ...prevState,
                email: ""
            }));
        }

        setIsSubmitEnabled(
            !validateUsername()
            && !validateUserPassword()
            && validateEmail()
        );

    }, [formData.username, formData.userPwd, formData.email]);

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="username">Введіть логін:</label>
                    <input
                        id="username"
                        type="text"
                        onChange={handleInputChange}
                    />
                    {errors.username && <div>{errors.username}</div>}
                </div>

                <div>
                    <label htmlFor="username">Введіть email:</label>
                    <input
                        id="email"
                        type="email"
                        onChange={handleInputChange}
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>

                <div>
                    <label htmlFor="userPwd">Введіть пароль:</label>
                    <input
                        id="userPwd"
                        type="password"
                        onChange={handleInputChange}
                    />
                    {errors.userPwd && <div>{errors.userPwd}</div>}
                </div>


                <button type="submit" disabled={!isSubmitEnabled}>Надіслати</button>
            </form>
        </div>
    );
}


export default RegistrationForm;