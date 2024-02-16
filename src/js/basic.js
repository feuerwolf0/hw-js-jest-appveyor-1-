export default function checkHealth(entity) {
  if (entity.health > 50) {
    return "healthy"
  } else if ((15 < entity.health) && (50 > entity.health)) {
    return "wounded"
  } else {
    return "critical"
  }
}