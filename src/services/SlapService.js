

class SlapService{
slap(target){
  target.health -=10
}

resetHealth(target){
  target.health = target.maxHealth
}
}

export const slapService = new SlapService()
