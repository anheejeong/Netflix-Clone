// 배포
// heroku create app, add config var => MONGO_URI
// heroku : netflixclone
module.exports = {
    mongoURI: process.env.MONGO_URI
}