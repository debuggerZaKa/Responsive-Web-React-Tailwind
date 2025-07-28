import {card} from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section id="carddeal" className={`${layout.section} w-full text-center sm:text-left`}>
      <div className={`${layout.sectionImg} flex-col`}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden'/> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} `}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="card"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto ml-4 sm:ml-10"
        />
      </div>
    </section>
  )
}

export default CardDeal