//Fuckin hell : Il faut installer le package dotenv si on veux pouvoir accéder aux variables d'env
require("dotenv").config();

// Base URL :
const base_url = `https://api.rawg.io/api/`;

// Si je veux fetch les games en utilisant ma API KEY :
// je rajoute à la fin du lien : games?key=${process.env.REACT_APP_RAWG_API_KEY}
// mon API key est stored dans mes variables d'environnement.

// Getting the date
const getCurrentMonth = () => {
  // On ajoute 1 à month parce qu'en console log ça sort notre mois -1
  // On fait en suite en sorte que pour les mois avec un nombre inférieur à 10 on ai un mois avec un 0 devant
  // Au lieu de juin = 6 on aura juin = 06.
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/mont/year

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//L'URL du fetch de l'api complet :
export const popularGamesURL = () => `${base_url}${popular_games}`;