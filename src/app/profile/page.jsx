"use client";
import { useState } from "react";
import ProfileSection from "../../components/ProfileSection";

export default function ProfilePage() {
  const [name, setName] = useState("Amogh Dey");
  const [age, setAge] = useState("24");
  const [weight, setWeight] = useState("78");
  const [height, setHeight] = useState("180");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-black mb-8 text-gray-900">Profile Settings</h1>
        <ProfileSection
          name={name}
          setName={setName}
          age={age}
          setAge={setAge}
          weight={weight}
          setWeight={setWeight}
          height={height}
          setHeight={setHeight}
        />
      </div>
    </div>
  );
}
