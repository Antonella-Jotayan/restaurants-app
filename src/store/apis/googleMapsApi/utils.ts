import {Restaurant} from './types';

const sortByRating = (restaurants: Restaurant[]) => {
  return restaurants.sort((a, b) => {
    const valueA = a.rating;
    const valueB = b.rating;

    if (valueA === undefined && valueB === undefined) {
      return 0;
    }

    if (valueA === undefined) {
      return 1;
    }

    if (valueB === undefined) {
      return -1;
    }

    return valueB - valueA;
  });
};

export {sortByRating};
