import KitchenSinkExample from './kitchenSink';

function App() {
  // Array of details for each card
  const cardDetails = [
    {
      id: 1,
      title: 'Landscape One',
      description: 'Description for Card 1',
      imageSrc: 'https://www.nyip.edu/images/cms/photo-articles/the-best-place-to-focus-in-a-landscape.jpg',
      listItems: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      id: 2,
      title: 'Landscape Two',
      description: 'Description for Card 2',
      imageSrc: 'https://media.istockphoto.com/id/1296913338/photo/sonoran-sunset.jpg?s=612x612&w=0&k=20&c=lGXd-vnDmH_bCnR53BNmwxsh3qn8MBLQoh5M926QAbY=',
      listItems: ['Item 4', 'Item 5', 'Item 6'],
    },
    {
      id: 3,
      title: 'Landscape Three',
      description: 'Description for Card 2',
      imageSrc: 'https://www.josephfiler.com/images/xl/Canada-Rockies-2101-Edit.jpg',
      listItems: ['Item 4', 'Item 5', 'Item 6'],
    }
  ];
  return (
    <div className='cards'>
      {/* Map over the cardDetails array and render a KitchenSinkExample component for each item */}
      {cardDetails.map((details) => (
        <KitchenSinkExample key={details.id} details={details} />
      ))}
    </div>
  );
}

export default App;
