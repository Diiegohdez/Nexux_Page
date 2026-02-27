import { DataCards } from '../data/Data.jsx';
import Cards from './Cards.jsx';

const Slider = () => {
  return (
    <div className="w-full overflow-hidden mt-4 lg:mt-10 2xl:flex 2xl:justify-center">
      <div className="flex scroll-smooth gap-6 overflow-x-auto snap-x snap-mandatory px-6 scrollbar-hide">
        {DataCards.map(card => (
          <Cards
            key={card.id} className="snap-center"
            {...card}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider