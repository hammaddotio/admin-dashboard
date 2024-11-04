import { Model, model, Schema } from 'mongoose'

const user_model = Schema(
    {
        first_name: {
            type: String
        },
        last_name: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        phone_number: {
            type: String
        },
        about: {
            type: String
        },
        balance: {
            type: String
        },
        current_balance: {
            type: String
        },
        first_name: {
            type: String
        },
        ibn_number: {
            type: String
        },
        bank_name: {
            type: String
        },
        credit: {
            type: String
        },
        deposit: {
            type: String
        },
        withdrawal: {
            type: String
        },
        standard: {
            type: String
        },
        verify: {
            type: String
        },
        role: {
            type: String
        },
        status: {
            type: String
        },
        user_role: {
            type: String,
            default: 'user'
        }
    }, {
    timestamps: true
})

export const User = model('User', user_model)