import { User } from "../../models/user.models.js"
import Joi from "joi"
import { compare_password, encrypt_password } from "../../utils/bcrypt.js"
import { generate_jwt_token } from "../../utils/jwt.js"


export const register = async (req, res) => {
    try {
        const { first_name, last_name, email, password, phone_number, about, balance, current_balance, ibn_number, bank_name, credit, deposit, withdrawal, standard, verify, role, status } = req.body

        const user_registration_schema = Joi.object({
            first_name: Joi.string().required('first name is required'),
            last_name: Joi.string().required('last name is required'),
            email: Joi.string().required('email is required'),
            password: Joi.string().required('password is required').min(6).max(8),
            phone_number: Joi.string().required('phone number is required').max(13).min(11),
            about: Joi.string().required('about field is required'),
            balance: Joi.string().required('balance field is required'),
            current_balance: Joi.string().required('current is required'),
            ibn_number: Joi.string().required('ibn is required'),
            bank_name: Joi.string().required('bank name is required'),
            credit: Joi.string().required('credit is required'),
            deposit: Joi.string().required('deposit is required'),
            withdrawal: Joi.string().required('withdrawal is required'),
            standard: Joi.string().required('standard is required'),
            verify: Joi.string().required('verify is required'),
            role: Joi.string().required('role is required'),
            status: Joi.string().required('status is required')
        })

        const { error } = user_registration_schema.validate(req.body)
        if (error) return res.status(400).json({ error: error.message })

        const check_already_registered_or_not = await User.findOne({ email })
        if (check_already_registered_or_not) return res.status(401).json({ error: 'user already registered' })

        const encrypted_password = await encrypt_password(password)

        const user = await User.create({ first_name, last_name, email, password: encrypted_password, phone_number, about, balance, current_balance, ibn_number, bank_name, credit, deposit, withdrawal, standard, verify, role, status })
        res.status(201).json(user)
    } catch (error) {
        res.json({ error: error })
        console.log(error)
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user_login_schema = Joi.object({
            email: Joi.string().required('email is required'),
            password: Joi.string().required('password is required').min(6).max(8)
        })

        const { error } = user_login_schema.validate(req.body)
        if (error) return res.status(400).json({ error: error.message })

        const find_user = await User.findOne({ email })
        if (!find_user) return res.status(401).json({ error: 'user not found' })

        console.log(find_user)

        const decrypted_password = await compare_password(password, find_user.password)
        if (!decrypted_password) return res.status(401).json({ error: 'invalid credentials' })
        const token = generate_jwt_token(find_user)
        res.status(200).json({ user: find_user, token })
    } catch (error) {
        res.json({ error: error })
        console.log(error)
    }
}

