creep_controller = require("creep_controller")
module.exports.loop = function()
    //loops are to make sure things happen every tick. '=' assigns things. 
{
    console.log("Current game tick: " + Game.time);
    //(Game.time) shows increasing numbers. Must have quotation marks "Current game tick: " to show up as words. https://docs.screeps.com/api/#Game
for(spawn in Game.spawns)
{
    console.log(spawn)
    //naming is arbitrary, spawn could be "bubbadeebadadoof" (as long as it's the same in both) 
    //console.log prints things into the console
    spawner = Game.spawns[spawn]
    console.log(spawner)
    spawner.spawnCreep([WORK, CARRY, MOVE], 'bebe'+Game.time);
}
for(bebe in Game.creeps)
{
    console.log(bebe)
    console.log(Game.creeps[bebe])
    creep = Game.creeps[bebe]
    creep_controller.run(creep)
}
}