import { check } from "express-validator";


//validators

export const userSignupValidator = [
    check('name')
        .notEmpty()
        .trim()
        .withMessage('Name is Required'),
    check('username')
        .notEmpty()
        .trim()
        .withMessage('Username is Required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({min: 6})
        .withMessage('Password must be at least 6 characters long')
];