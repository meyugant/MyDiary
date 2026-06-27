import React, { useState } from "react";
import "../public/styles/About.css";

function About() {
  return (
    <>
      <h1 id="main-heading">What is MyDiary?</h1>
      <div id="content">
        <p>
          My Diary is a personal journaling web application designed to help
          users capture their thoughts, memories, and daily experiences in a
          secure and organized way. Whether you're recording important events,
          reflecting on your day, or simply writing to clear your mind, My Diary
          offers a clean and minimal interface to make writing effortless and
          enjoyable. Each entry is saved with a subject and date, allowing you
          to easily revisit past moments and track your personal growth over
          time. Your data remains private and accessible only to you. The
          purpose of My Diary is to promote mindfulness and self-expression by
          making it easy for anyone to build a daily writing habit and preserve
          their life’s journey in a meaningful digital format.
        </p>

        <p id="contact-info">
          <strong>Contact Us at</strong> abc@gmail.com
        </p>
      </div>
    </>
  );
}

export default About;
