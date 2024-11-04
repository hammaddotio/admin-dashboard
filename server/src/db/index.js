import env from "dotenv"
env.config({ path: './.env' })

import { connect } from "mongoose"

export const connect_db = async () => {
    try {
        await connect('mongodb+srv://userfree761:4DeniRAgs2e5qgy@cluster0.fqdp3.mongodb.net/')
    } catch (error) {
        console.log(`DB Connection ERROR: ${error.message}`)
    }
}