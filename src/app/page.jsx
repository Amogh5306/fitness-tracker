"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import WorkoutSection from "../components/WorkoutSection";
import GoalSection from "../components/GoalSection";
import ProfileSection from "../components/ProfileSection";
import ActivityHistory from "../components/ActivityHistory";
import { s } from "../components/styles";

export default function Page(){
  const [page,setPage]=useState("home");
  const [searchTerm,setSearchTerm]=useState("");
  const [intensityFilter,setIntensityFilter]=useState("All");
  const [workouts,setWorkouts]=useState([
    { id: 1, type: "Running", duration: 30, calories: 350, date: "2026-05-28", intensity: "Medium" },
    { id: 2, type: "Weightlifting", duration: 45, calories: 280, date: "2026-05-29", intensity: "High" },
    { id: 3, type: "Cycling", duration: 20, calories: 180, date: "2026-05-30", intensity: "Low" },
  ]);
  const [goals,setGoals]=useState([
    { id: 1, title: "Weekly Workouts Target", current: 3, target: 5, unit: "days" },
    { id: 2, title: "Calorie Burning", current: 810, target: 1500, unit: "kcal" },
  ]);
  const [name,setName]=useState("Amogh Dey");
  const [age,setAge]=useState("24");
  const [weight,setWeight]=useState("78");
  const [height,setHeight]=useState("180");

  const totalCals = workouts.reduce((acc,w)=>acc+Number(w.calories),0);
  const totalMins = workouts.reduce((acc,w)=>acc+Number(w.duration),0);
  const avgCals = workouts.length ? Math.round(totalCals/workouts.length) : 0;

  function addWorkout(w){ setWorkouts([w,...workouts]); }
  function deleteWorkout(id){ setWorkouts(workouts.filter(w=>w.id!==id)); }
  function addGoal(g){ setGoals([...goals,g]); }
  function deleteGoal(id){ setGoals(goals.filter(g=>g.id!==id)); }

  return (
    <div style={s.wrap}>
      <Sidebar page={page} setPage={setPage} name={name} s={s} />
      <div style={s.main}>
        {page==="home" && <Dashboard workouts={workouts} totalCals={totalCals} totalMins={totalMins} avgCals={avgCals} s={s} />}
        {page==="add" && <WorkoutSection workouts={workouts} addWorkout={addWorkout} deleteWorkout={deleteWorkout} searchTerm={searchTerm} setSearchTerm={setSearchTerm} intensityFilter={intensityFilter} setIntensityFilter={setIntensityFilter} s={s} />}
        {page==="goals" && <GoalSection goals={goals} addGoal={addGoal} deleteGoal={deleteGoal} s={s} />}
        {page==="profile" && <ProfileSection name={name} setName={setName} age={age} setAge={setAge} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} s={s} />}
        {page==="history" && <ActivityHistory workouts={workouts} s={s} />}
      </div>
    </div>
  );
}
