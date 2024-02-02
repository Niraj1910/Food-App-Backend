import { Router } from "express";
import Cuisine from "../Models/Cuisine.js";

const router = Router();

// Create Dishes
router.post("/food", async (req, res) => {
  try {
    const data = req.body;

    const newDish = new Cuisine(data);
    await newDish.save();

    res.status(200).json({
      success: true,
      message: "Food Added",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Get All Dishes
router.get("/All", async (req, res) => {
  try {
    const totalDishes = await Cuisine.find();

    if (!totalDishes) {
      return res.status(404).json({
        success: false,
        message: "No Food, sorry for the inconvinience",
      });
    }

    res.status(200).json({
      success: true,
      message: totalDishes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Get Breakfast Dishes
router.get("/breakfast", async (req, res) => {
  try {
    const totalDishes = await Cuisine.find();

    const breakfastDishes = totalDishes.filter((item) => {
      return item.type === "breakfast";
    });

    if (!breakfastDishes.length) {
      return res.status(404).json({
        success: false,
        message: "No BreakFast, sorry for the inconvinience",
      });
    }

    return res.status(200).json({
      success: true,
      message: breakfastDishes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Get Launch Dishes
router.get("/launch", async (req, res) => {
  try {
    const totalDishes = await Cuisine.find();

    const breakfastDishes = totalDishes.filter((item) => {
      return item.type === "launch";
    });

    if (!breakfastDishes.length) {
      return res.status(404).json({
        success: false,
        message: "No Launch, sorry for the inconvinience",
      });
    }

    return res.status(200).json({
      success: true,
      message: breakfastDishes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Get Dinner Dishes
router.get("/dinner", async (req, res) => {
  try {
    const totalDishes = await Cuisine.find();

    const breakfastDishes = totalDishes.filter((item) => {
      return item.type === "dinner";
    });

    if (!breakfastDishes.length) {
      return res.status(404).json({
        success: false,
        message: "No Dinner, sorry for the inconvinience",
      });
    }

    return res.status(200).json({
      success: true,
      message: breakfastDishes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Get Query Dishes
router.get("/search/:query", async (req, res) => {
  try {
    const query = req.params.query;
    const totalDishes = await Cuisine.find();

    const querDishes = totalDishes.filter((item) => {
      return item.name.includes(query);
    });

    if (!querDishes.length) {
      return res.status(404).json({
        success: false,
        message: "Dishes Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: querDishes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;
