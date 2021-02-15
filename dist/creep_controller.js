const roles = require("roles")
    //require("roles") brings up everything after module.exports in roles.js

module.exports = 
    {
        run:function(creep)
        {
            if(!creep.memory.role)
            { 
                creep.memory.role = "bebe"
            }
            role = roles[creep.memory.role]
            role.run(creep)
        }
    }