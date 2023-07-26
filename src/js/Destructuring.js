export default function destructuring(character) {
  // извлекаем cвойство special
  const { special } = character;

  // преобразуем массив special
  const array = special.map((item) => {
    // извлекаем свойства из объектов внутри массива special и попутно
    // добавляем св-ву description значение по умолчанию
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;

    // возвращаем объект из 4ех свойств (даже если свойство description недоступно)
    return {
      id, name, icon, description,
    };
  });

  return array;
}
