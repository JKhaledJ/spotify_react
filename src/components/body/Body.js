import React from "react";
import Header from "./header/Header";
import Section from "./Section";
export default function Body() {
  return (
    <div className="flex flex-col w-5/6">
      <Header />
      <div className="max-h-screen overflow-y-scroll px-14 mt-7">
        <Section title="New Released" />
        {/* <Section title="Featured playlist" />
        <Section title="Browse" /> */}
      </div>
    </div>
  );
}
