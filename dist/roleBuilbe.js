module.exports = 
    {
        getBodyParts: function() 
        {
            return [MOVE,CARRY,WORK]
        },
        run: function(creep)
            {
                if (creep.memory.status == "Delivering")
                {
                    if(creep.store[RESOURCE_ENERGY] == 0)
                    {
                        creep.memory.status = 'Retrieving';
                    }
                    const target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES)
                    if(target)
                    {
                        if(creep.build(target) == ERR_NOT_IN_RANGE)
                        {
                            creep.moveTo(target);
                        }
                    }
                    else 
                    {
                        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE)
                        {
                            creep.moveTo(creep.room.controller);
                        }
                    }   
                }
                else
                {
                    const target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                    if(target)
                    {
                        if(creep.harvest(target) == ERR_NOT_IN_RANGE)
                        {
                            creep.moveTo(target);
                        }
                    }
                    if(creep.store[RESOURCE_ENERGY] == 50)
                            {
                                creep.memory.status = 'Delivering';
                            }
                }
                creep.say(creep.memory.status);
            }
    }