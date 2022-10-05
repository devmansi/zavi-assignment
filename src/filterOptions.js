import { ratingsData } from "./data";

const price = {
  "Under 1000": {
    displayName: "Under 1000",
    filterFunction: (product) => {
      return product.discountedPrice < 1000;
    },
  },
  "1000 to 3000": {
    displayName: "1000 to 3000",
    filterFunction: (product) => {
      return product.discountedPrice <= 3000 && product.discountedPrice >= 1000;
    },
  },
  "3000 to 5000": {
    displayName: "3000 to 5000",
    filterFunction: (product) => {
      return product.discountedPrice <= 5000 && product.discountedPrice >= 3000;
    },
  },
  "5000 to 10000": {
    displayName: "5000 to 10000",
    filterFunction: (product) => {
      return (
        product.discountedPrice <= 10000 && product.discountedPrice >= 5000
      );
    },
  },
  "10000 above": {
    displayName: "10000 above",
    filterFunction: (product) => {
      return product.discountedPrice > 10000;
    },
  },
};

// returns the object of objects
const ratings = [1, 2, 3, 4, 5].reduce((accumulator, rating) => {
  accumulator[rating] = {
    displayName: ratingsData[rating - 1],
    filterFunction: (product) => {
      return product.rating >= rating;
    },
  };

  return accumulator;
}, {});

const filterOptions = {
  price,
  ratings,
};

//it was done to make sure checkbox inputs are controlled
export const displayFilters = {};

for (const filterType in filterOptions) {
  let listOfAvailableFiltersForFilterType = [];

  for (const filterName in filterOptions[filterType]) {
    let filterProperties = filterOptions[filterType][filterName];

    listOfAvailableFiltersForFilterType.push({
      displayValue: filterProperties["displayName"],
      value: filterName,
    });
  }

  displayFilters[filterType] = listOfAvailableFiltersForFilterType;
}

export const applyFilters = (products, appliedFilters) => {
  for (const filterType in appliedFilters) {
    let filtersAppliedForType = appliedFilters[filterType];

    let filterFunctions = [];

    for (const filterName in filtersAppliedForType) {
      if (!filtersAppliedForType[filterName]) {
        continue;
      }

      /**
       * taking out all the functions from the filtername of the
       * filtertype which are checked by the user
       */
      filterFunctions.push(
        filterOptions[filterType][filterName].filterFunction
      );
    }

    /**
     * it continues if no filterName in selected within a particular filterType
     */
    if (filterFunctions.length === 0) {
      continue;
    }

    products = products.filter((product) => {
      /**
       * passing product to every function in filterFunctions array
       * to check whether that product details matches the filter
       * that user has selected
       */
      return filterFunctions.some(function (filterFunction) {
        return filterFunction(product);
      });
    });
  }

  return products;
};
