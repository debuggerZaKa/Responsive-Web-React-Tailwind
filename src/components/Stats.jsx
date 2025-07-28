import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 w-full overflow-x-auto`}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 min-w-[100px] sm:min-w-[150px] flex flex-col items-center justify-center m-2"
        >
          <h4 className="font-poppins font-semibold text-[26px] sm:text-[40px] leading-[28px] sm:leading-[53px] text-white text-center">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal text-[12px] sm:text-[20px] leading-[18px] sm:leading-[28px] text-white text-center mt-1 sm:mt-2 mr-2">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats