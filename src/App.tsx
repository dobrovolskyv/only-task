import React from 'react';
import TimelineBlock from './components/TimelineBlock';

const mockData = [
  {
    id: 1,
    label: '2010',
    stats: '1990 2020',
    events: [
      { id: 1, title: 'Запуск', description: 'Первая версия продукта' },
      { id: 2, title: 'Выход в СМИ', description: 'Появились первые упоминания' },
      { id: 3, title: 'Первые клиенты', description: 'Заключены первые контракты' },
      { id: 4, title: 'Запуск', description: 'Первая версия продукта' },
      { id: 5, title: 'Выход в СМИ', description: 'Появились первые упоминания' },
      { id: 6, title: 'Первые клиенты', description: 'Заключены первые контракты' },
    ],
  },
  {
    id: 2, 
    label: '2012',
    stats: '1928 2022',
    events: [
      { id: 7, title: 'Редизайн', description: 'Обновление интерфейса' },
      { id: 8, title: 'Переезд', description: 'Новый офис' },

    ],
  },

  {
    id: 3,
    label: '2020',
    stats: '1920 2030',
    events: [
      { id: 9, title: 'Редизайн', description: 'Обновление интерфейса' },
      { id: 10, title: 'Переезд', description: 'Новый офис' },

    ],
  },
  {
    id: 4,
    label: '2025',
    stats: '2025 2035',
    events: [
      { id: 11, title: 'Редизайн', description: 'Обновление интерфейса' },
      { id: 12, title: 'Переезд', description: 'Новый офис' },

    ],
  },
  // добавь еще для остальных лет
];


function App() {
  return (
    <div >
      <TimelineBlock slices={mockData} />

    </div>
  );
}

export default App;
