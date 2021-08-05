const db = require("./../db/models")

const profile = async (req, res, next) => {
    const { id } = req.user
    const user = await db.User.findByPk(id)
    // console.log(user)
    user.password = undefined
    res.json({
        success: true,
        message: "Success retrieve user profile",
        data: user
    })
}

const list = async (req, res, next) => {
    const users = await db.User.findAll()
    res.json({
        success: true,
        message: "Success retrieve all data users",
        data: users
    })
}

module.exports = {
    profile,
    list
} 