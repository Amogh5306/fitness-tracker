"use client";
import { useState } from "react";

export default function ProfileSection({ name, setName, age, setAge, weight, setWeight, height, setHeight }) {
  const [editing, setEditing] = useState(false);
  const [tName, setTName] = useState(name);
  const [tAge, setTAge] = useState(age);
  const [tWeight, setTWeight] = useState(weight);
  const [tHeight, setTHeight] = useState(height);

  function save() {
    setName(tName);
    setAge(tAge);
    setWeight(tWeight);
    setHeight(tHeight);
    setEditing(false);
  }

  return (
    <div className="bg-white px-6 py-6 rounded-xl border border-gray-200 max-w-md">
      <div className="text-2xl font-black mb-1.5">Profile</div>
      {!editing ? (
        <div>
          <div className="mt-3"><strong>{name}</strong></div>
          <div className="text-gray-500 mt-1.5">{age} yrs • {weight} kg • {height} cm</div>
          <div className="mt-3">
            <button onClick={() => setEditing(true)} className="w-full bg-indigo-600 text-white rounded-lg px-3 py-2.5 font-bold text-sm cursor-pointer hover:bg-indigo-700">Edit Profile</button>
          </div>
        </div>
      ) : (
        <div className="mt-3">
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Full Name</label>
          <input className="w-full border border-gray-300 rounded-lg p-2 text-sm mb-3" value={tName} onChange={(e) => setTName(e.target.value)} />
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Age</label>
          <input className="w-full border border-gray-300 rounded-lg p-2 text-sm mb-3" value={tAge} onChange={(e) => setTAge(e.target.value)} />
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Weight (kg)</label>
          <input className="w-full border border-gray-300 rounded-lg p-2 text-sm mb-3" value={tWeight} onChange={(e) => setTWeight(e.target.value)} />
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Height (cm)</label>
          <input className="w-full border border-gray-300 rounded-lg p-2 text-sm mb-3" value={tHeight} onChange={(e) => setTHeight(e.target.value)} />
          <div className="flex gap-2">
            <button onClick={save} className="w-full bg-green-600 text-white rounded-lg px-3 py-2.5 font-bold text-sm cursor-pointer hover:bg-green-700">Save</button>
            <button onClick={() => setEditing(false)} className="w-full bg-gray-400 text-white rounded-lg px-3 py-2.5 font-bold text-sm cursor-pointer hover:bg-gray-500">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}