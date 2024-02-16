export default function checkHealth(entity) {
  if (entity.health > 50) {
    return 'healthy';
  } if ((entity.health > 15) && (entity.health < 50)) {
    return 'wounded';
  }
  return 'critical';
}
