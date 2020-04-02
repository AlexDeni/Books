import * as Yup from 'yup';

const passwordValidation = () => {
    return Yup.string()
        .min(6, "Пароль должен  быть больше 6 символов")
        .max(30, 'Слишком большой')
        .required('Обязательное поле');
};

const repeatPasswordValidation = () => {
    return Yup.string()
        .required('Обязательное поле');
};

const emailValidation = () => {
    return Yup.string()
        .email('Некоректный адрес электронной почты')
        .max(30, 'Слишком большой')
        .required('Обязательное поле');
};

const nameValidation = () => {
    return Yup.string()
        .min(4, "Логин должен  быть больше 4 символов")
        .max(20, 'Слишком длинный')
        .required('Обязательное поле');
};

export const SignInSchema = Yup.object().shape({
    name: nameValidation(),
    password: passwordValidation(),
});

export const SignUpSchema = Yup.object().shape({
    name: nameValidation(),
    surName: nameValidation(),
    email: emailValidation(),
    password: passwordValidation(),
    repeatPassword: repeatPasswordValidation(),
});