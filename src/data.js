import { faker } from "@faker-js/faker";
import { FaStar } from "react-icons/fa";

const MAX_RATING = 5;
const MIN_RATING = 1;

const getBrandsName = () => {
  const brandData = [];

  for (let i = 0; i < 2; i++) {
    const name = faker.company.name();

    brandData.push({ id: i, name });
  }

  return brandData;
};

const getRatings = () => {
  const ratingData = [];
  let array = [];
  let count1 = 5;
  let count2 = 0;

  for (let i = 5; i > 0; i--) {
    array = [];
    for (let j = count1; j > 0; j--) {
      array.push(<FaStar className="star-filled star" />);
    }
    for (let k = count2; k > 0; k--) {
      array.push(<FaStar className="star-empty star" />);
    }
    count1 = count1 - 1;
    count2 = count2 + 1;
    ratingData.push(array);
  }
  return ratingData;
};

const getTrends = () => {
  const trends = [];

  for (let i = 0; i < 5; i++) {
    const imgUrl = faker.image.fashion(180, 240, true);
    const description = faker.commerce.productName();

    trends.push({
      id: i,
      imgUrl,
      description,
    });
  }

  return trends;
};

const getSuggestions = () => {
  const suggestions = [];

  for (let i = 0; i < 5; i++) {
    const suggestion = faker.commerce.productName();

    suggestions.push(suggestion);
  }

  return suggestions;
};

const getProducts = () => {
  const products = [];

  for (let i = 0; i < 20; i++) {
    const originalPrice = faker.commerce.price(1000, 10000);
    const discountedPrice = faker.commerce.price(100, Number(originalPrice));

    products.push({
      imgUrl: faker.image.people(300, 400),
      productName: faker.commerce.productName(),
      originalPrice: originalPrice,
      discountedPrice: discountedPrice,
      rating: Math.round(Math.random() * (MAX_RATING - MIN_RATING) + MIN_RATING),
      noOfReviews: Math.floor(Math.random() * 1000 + 1)
    });
  }

  return products;
};

export const brandsData = getBrandsName();
export const trendsData = getTrends();
export const suggestionsData = getSuggestions();
export const productsData = getProducts();
export const ratingsData = getRatings();
