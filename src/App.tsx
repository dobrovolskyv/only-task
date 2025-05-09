import React from 'react';
import TimelineBlock from './components/TimelineBlock';

const mockData = [
  {
    id: 1,
    label: 'NE kino',
    stats: '1987 1991',
    events: [
      { id: 1, title: '1987', description: '"Хищник/Predator", США(реж.Джон Мактирнана)' },
      { id: 2, title: '1988', description: '"Кто подставил кролика Роджера"/Who Farmed Roger Rabbit, США(реж. роберт Замекис)' },
      { id: 3, title: '1989', description: '"Назад в будущее 2"/Back to the Future 2, США(реж. Роберт Замекис"' },
      { id: 4, title: '1990', description: '"Крепикий орешек2"/Die Hard 2, США(реж. Рени Харлин)' }, 
      { id: 5, title: '1991', description: '"Семейка Аддамс"/The Addams Family, США(реж. Барри Зонненфельд)' },
   
    ],
  },
  {
    id: 2,
    label: 'Кино',
    stats: '1987 1991',
    events: [
      { id: 1, title: '1987', description: '"Хищник/Predator", США(реж.Джон Мактирнана)' },
      { id: 2, title: '1988', description: '"Кто подставил кролика Роджера"/Who Farmed Roger Rabbit, США(реж. роберт Замекис)' },
      { id: 3, title: '1989', description: '"Назад в будущее 2"/Back to the Future 2, США(реж. Роберт Замекис"' },
      { id: 4, title: '1990', description: '"Крепикий орешек2"/Die Hard 2, США(реж. Рени Харлин)' }, 
      { id: 5, title: '1991', description: '"Семейка Аддамс"/The Addams Family, США(реж. Барри Зонненфельд)' },
   
    ],
  },
  {
    id: 3, 
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
    id: 4,
    label: '',
    stats: '1999 2004',
    events: [
      { id: 11, title: '1999', description: 'премьера балета "Золушка" в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона' },
      { id: 12, title: '2000', description: 'возобновлено издание журнала "Театра"' },
      { id: 13, title: '2002', description: 'премьера трилогии Тома Стоппарда "Берег Утопии", Королевский Национальный театр, Лондон' },
      { id: 14, title: '2003', description: 'В Венеции' },

    ],
  },
  {
    id: 5,
    label: 'NE Наука',
    stats: '2015 2022',
    events: [
      { id: 15, title: '2015', description: '13 сентября - частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
      { id: 16, title: '2016', description: 'Телескоп "Хаббл" обнаружил самую удаленную из всех обнаруженной галактик, получившую обозначение GN-z11' },
      { id: 17, title: '2017', description: 'Компания Tesla  официально представила первый в мире электический грузовик Tesla Semi' },
      { id: 18, title: '2018', description: 'Старт космического аппарата Solar Probe Plus, предзначенного для изучения Солнца' },

    ],
  },
  {
    id: 6,
    label: 'Наука',
    stats: '2015 2022',
    events: [
      { id: 15, title: '2015', description: '13 сентября - частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
      { id: 16, title: '2016', description: 'Телескоп "Хаббл" обнаружил самую удаленную из всех обнаруженной галактик, получившую обозначение GN-z11' },
      { id: 17, title: '2017', description: 'Компания Tesla  официально представила первый в мире электический грузовик Tesla Semi' },
      { id: 18, title: '2018', description: 'Старт космического аппарата Solar Probe Plus, предзначенного для изучения Солнца' },
      { id: 19, title: '2019', description: 'Google  объявиол о создании 53-кубитного квантового компьютера' },
      { id: 20, title: '2020', description: 'Корабль Crew Dragon вернулся на Землю из первого пилотируемого полета' },

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
