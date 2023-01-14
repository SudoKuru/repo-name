import { Schema } from 'mongoose';
import * as mongoose from "mongoose";
import { Puzzle } from "./interfaces";

mongoose.set({ debug: true, autoCreate: true})

const PuzzleModelSchema = new Schema<Puzzle>({
    puzzle: { type: String, required: true, unique: true },
    puzzleSolution: { type: String, required: true },
    strategyTypes: {
        NAKED_SINGLE: { type: Boolean, required: true },
        HIDDEN_SINGLE: { type: Boolean, required: true },
        NAKED_PAIR: { type: Boolean, required: true },
        NAKED_TRIPLET: { type: Boolean, required: true },
        NAKED_QUADRUPLET: { type: Boolean, required: true },
        NAKED_QUINTUPLET: { type: Boolean, required: true },
        NAKED_SEXTUPLET: { type: Boolean, required: true },
        NAKED_SEPTUPLET: { type: Boolean, required: true },
        NAKED_OCTUPLET: { type: Boolean, required: true }
    },
    difficulty: { type: Number, required: true },
    fastestSolveTime: { type: Number, required: true, default: 0 },
    averageSolveTime: { type: Number, required: true, default: 0 },
    numUsersPlayed: { type: Number, required: true, default: 0 },
    numTimesPlayed: { type: Number, required: true, default: 0 },
    trulyUnique: { type: Boolean, required: true, default: false },
    drillStrategies: {
        NAKED_SINGLE: {type: Boolean, required: false},
        HIDDEN_SINGLE: {type: Boolean, required: false},
        NAKED_PAIR: {type: Boolean, required: false},
        NAKED_TRIPLET: {type: Boolean, required: true},
        NAKED_QUADRUPLET: {type: Boolean, required: false},
        NAKED_QUINTUPLET: {type: Boolean, required: false},
        NAKED_SEXTUPLET: {type: Boolean, required: false},
        NAKED_SEPTUPLET: {type: Boolean, required: false},
        NAKED_OCTUPLET: {type: Boolean, required: false}
    },
    calendarDate: { type: Date, required: false },
    imageUrl: { type: String, required: false },
    description: { type: String, required: false }
}, { _id: false  });

module.exports = mongoose.model("PuzzleModel", PuzzleModelSchema, 'puzzle');
