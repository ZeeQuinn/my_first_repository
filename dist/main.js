creep_controller = require("creep_controller")
roles = require("roles")

module.exports.loop = function()
    //loops are to make sure things happen every tick. '=' assigns things. 
    {
            console.log("Current game tick: " + Game.time);
    //(Game.time) shows increasing numbers. Must have quotation marks "Current game tick: " to show up as words. https://docs.screeps.com/api/#Game
            creepCounter = {}
            creepCounter.totalCreeps = 0
            for(bebe in Game.creeps)
                    {
                        creep = Game.creeps[bebe]
                        if(!creepCounter[creep.memory.role])
                            {
                                creepCounter[creep.memory.role] = 0
                            }
                        creepCounter.totalCreeps += 1
                        creepCounter[creep.memory.role] += 1 
                    }
                console.log(JSON.stringify(creepCounter))
            for(spawn in Game.spawns)
            {
    //naming is arbitrary, spawn could be "bubbadeebadadoof" (as long as it's the same in both) 
    //console.log prints things into the console
                spawner = Game.spawns[spawn]
                /* 
                if(Object.keys(Game.creeps).length < 9) 
                {
                    spawner.spawnCreep([WORK, CARRY, MOVE], 'bebe'+Game.time);
                }
                */
               for(roleName in roles)
               {
                   //Get the actual role functions into the role variable
                   role = roles[roleName]
                   if(!creepCounter[roleName])
                        {
                            creepCounter[roleName] = 0
                        }
                   //If we've counted that we have fewer creeps than we want for this role
                   if(creepCounter[roleName]<role.getMaxCreeps())
                   {
                       //Then we spawn a creep with the bodyparts of the role
                       //And with the name of its role already stored in memory
                       spawner.spawnCreep(role.getBodyParts(), roleName+Game.time, {memory: {role: roleName}})
                   }
               }
            }
            for(bebe in Game.creeps)
            {
                creep = Game.creeps[bebe]
                creep_controller.run(creep)
            }
    }       