module.exports = 
    {
        run: function(creep)
                // '=' means assignment, '==' means comparison for equality.
            {
                if(creep.store[RESOURCE_ENERGY] == creep.store.getCapacity()) {
                    creep.say("I'm full!");
                    const target = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
                    if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);}
                }
                else
                {
                    const target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                    if(target) {
                        if(creep.harvest(target) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(target);}
                    }
                }
            }
    }