const express = require("express");
const routes = express.Router();

const puzzleController = require('../controllers/puzzle.controller');

routes.post("/puzzles/", puzzleController.create);
routes.get("/puzzles/", puzzleController.search);
routes.put("/puzzles/", puzzleController.update);
routes.delete("/puzzles/", puzzleController.remove);

const userProfileController = require ('../controllers/userProfile.controller');

routes.post("/user/profiles", userProfileController.create);
routes.get("/user/profiles", userProfileController.search);
routes.put("/user/profiles", userProfileController.update);
routes.delete("/user/profiles", userProfileController.remove);

// const userGameStatisticsController = require ('../controllers/userGameStatistics.controller');
//
// routes.post("/user/gameStatistics", userGameStatisticsController.create);
// routes.get("/user/gameStatistics", userGameStatisticsController.search);
// routes.put("/user/gameStatistics", userGameStatisticsController.update);
// routes.delete("/user/gameStatistics", userGameStatisticsController.remove);
//
// const userGameSearchFiltersController = require ('../controllers/userGameSearchFilters.controller');
//
// routes.post("/user/gameSearchFilters", userGameSearchFiltersController.create);
// routes.get("/user/gameSearchFilters", userGameStatisticsController.search);
// routes.put("/user/gameSearchFilters", userGameStatisticsController.update);
// routes.delete("/user/gameSearchFilters", userGameStatisticsController.remove);
//
// const userInProgressGamesController = require ('../controllers/userInProgressGames.controller');
//
// routes.post("/user/inProgressGames", userInProgressGamesController.create);
// routes.get("/user/inProgressGames", userInProgressGamesController.search);
// routes.put("/user/inProgressGames", userInProgressGamesController.update);
// routes.delete("/user/inProgressGames", userInProgressGamesController.remove);
//
// const userGameHistoryController = require ('../controllers/userGameHistory.controller');
//
// routes.post("/user/gameHistory", userGameHistoryController.create);
// routes.get("/user/gameHistory", userGameHistoryController.search);
// routes.put("/user/gameHistory", userGameHistoryController.update);
// routes.delete("/user/gameHistory", userGameHistoryController.remove);

module.exports = routes;

