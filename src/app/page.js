'use client';

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function MyDashboard() {
  // Navigation state
  const [screen, setScreen] = useState('home');

  // Initial workout data
  const [allWorkouts, setAllWorkouts] = useState([
    { id: 1, type: 'Running', duration: 30, calories: 350, date: '2026-05-28', intensity: 'Medium' },
    { id: 2, type: 'Weightlifting', duration: 45, calories: 280, date: '2026-05-29', intensity: 'High' },
    { id: 3, type: 'Cycling', duration: 20, calories: 180, date: '2026-05-30', intensity: 'Low' }
  ]);

  const [allGoals, setAllGoals] = useState([
    { id: 1, title: 'Weekly Workouts Target', current: 3, target: 5, unit: 'days' },
    { id: 2, title: 'Calorie Burning', current: 810, target: 1500, unit: 'kcal' }
  ]);

  // Profile information
  const [username, setUsername] = useState('Amogh Dey');
  const [userAge, setUserAge] = useState('24');
  const [userWeight, setUserWeight] = useState('78');
  const [userHeight, setUserHeight] = useState('180');

  const [inputExercise, setInputExercise] = useState('Running');
  const [inputMins, setInputMins] = useState('');
  const [inputCals, setInputCals] = useState('');
  const [inputDate, setInputDate] = useState('2026-06-01');
  const [inputIntense, setInputIntense] = useState('Medium');

  const [goalTitle, setGoalTitle] = useState('');
  const [goalTarget, setGoalTarget] = useState('');
  const [goalUnit, setGoalUnit] = useState('sessions');

  // Calculate totals
  let totalCalsBurned = 0;
  for (let i = 0; i < allWorkouts.length; i++) {
    totalCalsBurned += Number(allWorkouts[i].calories);
  }

  let totalMinutesSpent = 0;
  for (let i = 0; i < allWorkouts.length; i++) {
    totalMinutesSpent += Number(allWorkouts[i].duration);
  }

  // Handle workout submission
  function submitWorkoutForm(e) {
    e.preventDefault();
    
    const newObj = {
      id: Math.random(),
      type: inputExercise,
      duration: Number(inputMins),
      calories: Number(inputCals),
      date: inputDate,
      intensity: inputIntense
    };

    setAllWorkouts([newObj, ...allWorkouts]);
    
    setInputMins('');
    setInputCals('');
  }

  // Handle goal submission
  function submitGoalForm(e) {
    e.preventDefault();
    const newGoalObj = {
      id: Math.random(),
      title: goalTitle,
      current: 0,
      target: Number(goalTarget),
      unit: goalUnit
    };
    setAllGoals([...allGoals, newGoalObj]);
    setGoalTitle('');
    setGoalTarget('');
  }

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      
      {/* Simple Sidebar Navigation Panel */}
      <div className="w-64 bg-indigo-900 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-black mb-8 tracking-wider">FIT-TRACKER</h2>
          
          {/* Menu Links with static click triggers */}
          <div className="space-y-2">
            <button onClick={() => setScreen('home')} className={`w-full text-left p-3 rounded font-medium text-sm ${screen === 'home' ? 'bg-indigo-700' : 'hover:bg-indigo-800'}`}>
               Main Dashboard
            </button>
            <button onClick={() => setScreen('add-workout')} className={`w-full text-left p-3 rounded font-medium text-sm ${screen === 'add-workout' ? 'bg-indigo-700' : 'hover:bg-indigo-800'}`}>
               Log New Workouts
            </button>
            <button onClick={() => setScreen('goals')} className={`w-full text-left p-3 rounded font-medium text-sm ${screen === 'goals' ? 'bg-indigo-700' : 'hover:bg-indigo-800'}`}>
               My Goals Setup
            </button>
            <button onClick={() => setScreen('profile')} className={`w-full text-left p-3 rounded font-medium text-sm ${screen === 'profile' ? 'bg-indigo-700' : 'hover:bg-indigo-800'}`}>
               User Profile Info
            </button>
          </div>
        </div>

        <div className="border-t border-indigo-800 pt-4 text-xs opacity-75">
          Logged in as: <span className="font-bold">{username}</span>
        </div>
      </div>

      {/* Main Container Dashboard Panel */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* PAGE 1: HOME PANEL */}
        {screen === 'home' && (
          <div>
            <h1 className="text-3xl font-extrabold mb-2">Hello, {username}!</h1>
            <p className="text-gray-500 mb-8">Welcome back. Here is your stats dashboard page for today.</p>

            {/* Simple Box Stat Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-xs font-bold text-gray-400 uppercase">Total Calories Burned</p>
                <p className="text-3xl font-black text-orange-500 mt-1">{totalCalsBurned} kcal</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-xs font-bold text-gray-400 uppercase">Total Minutes Logged</p>
                <p className="text-3xl font-black text-blue-500 mt-1">{totalMinutesSpent} mins</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-xs font-bold text-gray-400 uppercase">Total Exercises Done</p>
                <p className="text-3xl font-black text-green-500 mt-1">{allWorkouts.length} times</p>
              </div>
            </div>

            {/* Quick Chart Display Box */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
              <h3 className="text-lg font-bold mb-4">Workout Calorie Graph Chart</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={allWorkouts}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="calories" fill="#4f46e5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 2: LOG NEW WORKOUTS FORM */}
        {screen === 'add-workout' && (
          <div>
            <h1 className="text-3xl font-extrabold mb-6">Log New Workouts</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form Side */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-fit">
                <form onSubmit={submitWorkoutForm} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-1">Workout Type:</label>
                    <select value={inputExercise} onChange={(e) => setInputExercise(e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm bg-white">
                      <option value="Running">Running</option>
                      <option value="Weightlifting">Weightlifting</option>
                      <option value="Cycling">Cycling</option>
                      <option value="Yoga">Yoga</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Duration (minutes):</label>
                    <input type="number" value={inputMins} onChange={(e) => setInputMins(e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm" required placeholder="e.g. 30" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Calories Burned:</label>
                    <input type="number" value={inputCals} onChange={(e) => setInputCals(e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm" required placeholder="e.g. 200" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Date:</label>
                    <input type="date" value={inputDate} onChange={(e) => setInputDate(e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Intensity Level:</label>
                    <select value={inputIntense} onChange={(e) => setInputIntense(e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm bg-white">
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm transition-colors">
                    Save Workout Log
                  </button>
                </form>
              </div>

              {/* Table Side */}
              <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold mb-4">All Logged Workouts History</h3>
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200 font-bold">
                        <th className="p-3">Activity</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Duration</th>
                        <th className="p-3">Calories</th>
                        <th className="p-3">Intensity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {allWorkouts.map((w) => (
                        <tr key={w.id} className="hover:bg-gray-50">
                          <td className="p-3 font-semibold text-indigo-700">{w.type}</td>
                          <td className="p-3 text-gray-500">{w.date}</td>
                          <td className="p-3">{w.duration} mins</td>
                          <td className="p-3 font-bold">{w.calories} kcal</td>
                          <td className="p-3"><span className="px-2 py-0.5 text-xs font-bold rounded bg-yellow-100 text-yellow-800">{w.intensity}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 3: GOALS PANEL */}
        {screen === 'goals' && (
          <div>
            <h1 className="text-3xl font-extrabold mb-6">Goals</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Create Goal Form */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-fit">
                <h3 className="text-md font-bold uppercase tracking-wider text-gray-400 mb-4">Add a Custom Target Goal</h3>
                <form onSubmit={submitGoalForm} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-1">Goal Metric Title:</label>
                    <input type="text" value={goalTitle} onChange={(e) => setGoalTitle(e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm" required placeholder="e.g. Run 10km total" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Target Number:</label>
                    <input type="number" value={goalTarget} onChange={(e) => setGoalTarget(e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm" required placeholder="e.g. 10" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Unit Tag:</label>
                    <select value={goalUnit} onChange={(e) => setGoalUnit(e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm bg-white">
                      <option value="sessions">sessions</option>
                      <option value="kcal">kcal</option>
                      <option value="mins">mins</option>
                      <option value="days">days</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded text-sm">
                    Activate Goal Tracker
                  </button>
                </form>
              </div>

              {/* List of Goals */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
                <h3 className="text-md font-bold uppercase tracking-wider text-gray-400">Current Ongoing Target Indicators</h3>
                {allGoals.map((g) => {
                  // Standard math for percentage bars
                  let pct = Math.floor((g.current / g.target) * 100);
                  if (pct > 100) pct = 100;
                  return (
                    <div key={g.id} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex justify-between text-sm mb-1 font-semibold">
                        <span>{g.title}</span>
                        <span className="text-gray-500">{g.current} / {g.target} {g.unit}</span>
                      </div>
                      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                        <div className="bg-indigo-600 h-full" style={{ width: `${pct}%` }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* PAGE 4: USER PROFILE */}
        {screen === 'profile' && (
          <div className="max-w-md bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h1 className="text-2xl font-extrabold mb-6">Profile</h1>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Full Name</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Age (Years)</label>
                <input type="number" value={userAge} onChange={(e) => setUserAge(e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Weight (KG)</label>
                <input type="number" value={userWeight} onChange={(e) => setUserWeight(e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Height (CM)</label>
                <input type="number" value={userHeight} onChange={(e) => setUserHeight(e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm" />
              </div>
            </div>
            <div className="mt-6 bg-green-50 text-green-800 text-xs p-3 rounded font-medium border border-green-200">
              ✓ State variables updated locally. No external backend sync needed.
            </div>
          </div>
        )}

      </div>
    </div>
  );
}