// nodejs 배포 설정 -> node_env
if (process.env.NODE_EVN == 'production') {
    // 배포
    module.exports = require('./prod')
} else {
    // 개발
    module.exports = require('./dev')
}