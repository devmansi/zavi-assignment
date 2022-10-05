import { faker } from "@faker-js/faker";
import { FaStar } from "react-icons/fa";

const NUMBER_OF_TRENDS = 5;
const NUMBER_OF_PRODUCTS = 24;
const NUMBER_OF_SUGGESTIONS = 5;

const MIN_STAR_RATING = 1;
const MAX_STAR_RATING = 5;

function getRatings() {
  const ratingData = [];

  let count1 = 1;
  let count2 = 4;

  for (let i = 5; i > 0; i--) {
    let array = [];

    for (let k = count1; k > 0; k--) {
      array.push(<FaStar className="star-filled star" />);
    }

    for (let j = count2; j > 0; j--) {
      array.push(<FaStar className="star-empty star" />);
    }

    count1 = count1 + 1;
    count2 = count2 - 1;

    ratingData.push(array);
  }
  return ratingData;
}

function getTrends() {
  const trends = [];

  for (let i = 0; i < NUMBER_OF_TRENDS; i++) {
    const imgUrl = faker.image.fashion(180, 240, true);
    const description = faker.commerce.productName();

    trends.push({
      id: i,
      imgUrl,
      description,
    });
  }

  return trends;
}

function getSuggestions() {
  const suggestions = [];

  for (let i = 0; i < NUMBER_OF_SUGGESTIONS; i++) {
    const suggestion = faker.commerce.productName();

    suggestions.push(suggestion);
  }

  return suggestions;
}

export function getProducts() {
  const products = [];

  for (let i = 0; i < NUMBER_OF_PRODUCTS; i++) {
    let originalPrice = faker.commerce.price(500, 10000);
    let discountedPrice = faker.commerce.price(100, Number(originalPrice));

    products.push({
      id: i,
      imgUrl: faker.image.people(300, 400, true),
      productName: faker.commerce.productName(),
      originalPrice,
      discountedPrice,
      rating: Math.round(
        Math.random() * (MAX_STAR_RATING - MIN_STAR_RATING) + MIN_STAR_RATING
      ),
      noOfReviews: Math.floor(Math.random() * 1000 + 1),
    });
  }

  return products;
}

export const trendsData = getTrends();
export const ratingsData = getRatings();
export const suggestionsData = getSuggestions();
