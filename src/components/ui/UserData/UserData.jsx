import React, { useMemo } from 'react'
import Styles from './UserData.module.scss'

function UserData({ stats }) {
  // Guard clause: ensures the component doesn't crash if stats is null or undefined
  if (!stats) return null;

  // useMemo is used to optimize performance by caching the formatted results.
  // The formatting logic only runs when the 'stats' prop changes, avoiding unnecessary recalculations on re-renders.
  const formattedStats = useMemo(() => {
    // Intl.NumberFormat is used for locale-aware number formatting (e.g., converting 1200 to "1.2K")
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 1,
    });

    // Returns a new array with formatted values.
    // We spread (...stat) to create a shallow copy, ensuring the original props are not mutated.
    return stats.map((stat) => ({
      ...stat,
      value: formatter.format(stat.value).toLowerCase(),
    }));
  }, [stats]);

  return (
    <ul className={Styles['user-data']}>
      {formattedStats.map((stat, index) => (
        <li key={index} id={stat.name} className={Styles['user-data__item']}>
          <span aria-label={stat.value} className={Styles['user-data__item__value']}>{stat.value}</span>
          <span aria-label={stat.name} className={Styles['user-data__item__name']}>{stat.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default UserData