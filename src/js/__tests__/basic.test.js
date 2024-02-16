import checkHealth from '../basic';

test.each([
  ['Маг', { name: 'Маг', health: 91 }, 'healthy'],
  ['Мечник', { name: 'Мечник', health: 49 }, 'wounded'],
  ['Рыцарь', { name: 'Рыцарь', health: 15 }, 'critical'],
  ['Друид', { name: 'Друид', health: 0 }, 'critical'],
  ['Кабан', { name: 'Кабан', health: 200 }, 'healthy'],
])('check health entity %s', (name, entity, state) => {
  const res = checkHealth(entity);
  expect(res).toBe(state);
});
