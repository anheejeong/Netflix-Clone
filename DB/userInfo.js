const mongoose = require('mongoose')

const userInfoSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 30,
        require: true
    },
    emailAddress: {
        type: String,
        maxlength: 30,
        trim: true,
        require: true
    },
    countryOfSignup: {
        type: String,
        enum: ['Canada', 'France', 'Greece', 'Argentina', 'Chile', 'Bulgaria', 'Germany',
            'China', 'Belgium', 'Denmark', 'India', 'United States', 'Indonesia', 'Pakistan',
            'Brazil', 'Nigeria', 'Bangladesch', 'Russia', 'Mexico', 'Japan', 'Ethiopia',
            'Philippines', 'Egypt', 'Vietnam', 'Turkey', 'Iran', 'Thiland', 'United Kingdom',
            'Italy', 'Tanzania', 'South Africa', 'Kenya', 'South Korea', 'North Korea', 'Comlombia',
            'Uganda', 'Ukraine', 'Poland', 'Morocco', 'Soudi Arabia', 'Uzbekistan', 'Peru', 'etc']
    },
    membershipStatus: {
        type: String,
        enum: ['Mobile', 'Basic', 'Standard', 'Premium'],
        require: true
    },
    isKids: {
        type: Boolean
    },
    memberSince: {
        type: Date,
        require: true
    },
    esn: {  // 비밀번호
        type: String,
        minlength: 8,
        require: true
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const UserInfo = mongoose.model('UserInfo', userInfoSchema)
module.exports = { UserInfo }