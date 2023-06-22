const User = require("./models/User");

class UserService {
    async findAll() {
        var result = await User.find();
        return result;
    }
}

module.exports = UserService;