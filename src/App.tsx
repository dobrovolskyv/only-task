import React from 'react';
import TimelineBlock from './components/TimelineBlock';

const mockData = [
  {
    id: 1,
    label: 'Кино',
    stats: '1987 1991',
    events: [
      { id: 1, title: '1987', description: '"Хищник/Predator", США(реж.Джон Мактирнана)' },
      { id: 2, title: '1988', description: '"Кто подставил кролика Роджера"/Who Farmed Roger Rabbit, США(реж. роберт Замекис)' },
      { id: 3, title: '1989', description: '"Назад в будущее 2"/Back to the Future 2, США(реж. Роберт Замекис"' },
      { id: 4, title: '1990', description: '"Крепикий"/The Shining, США(реж. Стивен Кинг)' }, 
      { id: 5, title: '1991', description: '"Крепикий"/The Shining, США(реж. Стивен Кинг)' },
   
    ],
  },
  {
    id: 2, 
    label: 'Литература',
    stats: '1992 1997',
    events: [
      { id: 7, title: '1992', description: 'Нобелевская премия по литературе - Дерек Уолкотт,"За блестящий образец карибского эпоса в 64 раздела"' },
      { id: 8, title: '1994', description: '"Бессоница"- роман Стивена Кинга."' },
      { id: 9, title: '1995', description: 'Нобелевская премия по литературе - Шеймас Хини' },
      { id: 10, title: '1997', description: '""Бессоница"- роман Стивена Кинга."' },

    ],
  },

  {
    id: 3,
    label: '.',
    stats: '1999 2004',
    events: [
      { id: 11, title: '1999', description: 'премьера балета "Золушка" в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона' },
      { id: 12, title: '2000', description: 'возобновлено издание журнала "Театра"' },
      { id: 13, title: '2002', description: 'премьера трилогии Тома Стоппарда "Берег Утопии", Королевский Национальный театр, Лондон' },
      { id: 14, title: '2003', description: 'В Венеции' },

    ],
  },
  {
    id: 4,
    label: '2025',
    stats: '2025 2035',
    events: [
      { id: 15, title: 'Редизайн', description: 'Обновление интерфейса' },
      { id: 16, title: 'Переезд', description: 'Новый офис' },

    ],
  },

];


function App() {
  return (
    <div className='container'>
      <h1 className='title'>Исторические
      даты</h1>
      <TimelineBlock slices={mockData} />

    </div>
  );
}

export default App;
