import React from "react";
import ProjectCard from "./ProjectCard";

// Replace these with actual image paths
import ecommerceImg from "../../assets/ecommerce-site.png";
import quizAppImg from "../../assets/react-quiz.png";
import mindPadImg from "../../assets/todo.png";
import taskhubImg from "../../assets/task.png";
const Projects = () => {
  return (
    <section id="Projects" className="p-10 md:p-15 text-white">
      <h1 className="text-2xl pl-10 md:text-4xl font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        <ProjectCard
          title="Ecommerce Site"
          main="An online store built with React.js, allowing users to browse products, add them to a shopping cart, and complete purchases. Integrated with a backend API for real-time data."
          demoLink="https://virus100460.github.io/ecommerce-site/"
          sourceCodeLink="https://github.com/virus100460/ecommerce-site"
          imageSrc={ecommerceImg}
        />
        <ProjectCard
          title="Quiz App React"
          main="A quiz app where users can test their knowledge on various topics. Features include multiple-choice questions, timers, and score tracking. Built with React.js."
          demoLink="https://virus100460.github.io/quiz-app-react/"
          sourceCodeLink="https://github.com/virus100460/quiz-app-react"
          imageSrc={quizAppImg}
        />
        <ProjectCard
          title="MindPad - Todo"
          main="A todo list application designed to help users organize tasks. Features include task prioritization, deadlines, and a simple, intuitive interface, developed in React.js."
          demoLink="https://virus100460.github.io/mindPad-todo/"
          sourceCodeLink="https://github.com/virus100460/mindPad-todo"
          imageSrc={mindPadImg}
        />
        <ProjectCard
          title="Taskhub"
          main="A project management tool for teams to collaborate on tasks. Includes features like task assignment, progress tracking, and team messaging. Built with React.js and integrated with a backend service."
          demoLink="https://virus100460.github.io/taskhub/"
          sourceCodeLink="https://github.com/virus100460/taskhub"
          imageSrc={taskhubImg}
        />
      </div>
    </section>
  );
};

export default Projects;
