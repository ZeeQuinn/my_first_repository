module.exports = 
    {
        run: function(creep)
            {
                // '=' means assignment, '==' means comparison for equality, '!=' means inequality.

                //Commented out, because we don't always want to be delivering
                //creep.memory.status = 'Delivering';
                //If we are in the "Delivering" state
                if (creep.memory.status == "Delivering")
                {
                    //If we're out of energy switch to retrieving state, to get more energy
                    if(creep.store[RESOURCE_ENERGY] == 0)
                    {
                        creep.memory.status = 'Retrieving';
                    }
                    // means if the room's spawn is not full, then the creeps continue bringing energy to the spawn.
                    if(creep.room.energyAvailable != creep.room.energyCapacityAvailable)
                    {
                        const target = creep.pos.findClosestByRange(FIND_MY_SPAWNS); 
                        // 'creep.pos' means the position of the creep, find the closest spawn object to it and it becomes our target.
                        if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
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
                //If we are not in the delivering state, namely if we are "Retrieving"
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
                //If we have 50 energy switch to delivering state
                    if(creep.store[RESOURCE_ENERGY] == 50)
                            {
                                creep.memory.status = 'Delivering';
                            }
                }
                //Moved to the end so creeps always say their status, no ifs or buts
                creep.say(creep.memory.status);
            }
    }