const DashboardCards = () => {
  const cards = [
    {
      title: 'Calories',
      value: 2400
    },
    {
      title: 'Heart Rate',
      value: '78 BPM'
    },
    {
      title: 'Sleep',
      value: '8 hrs'
    },
    {
      title: 'BMI',
      value: '22.1'
    }
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
      {cards.map((card) => (
        <div
          key={card.title}
          className='bg-white dark:bg-gray-800 p-5 rounded-xl shadow'
        >
          <h2 className='text-gray-500'>{card.title}</h2>

          <p className='text-2xl font-bold'>{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
