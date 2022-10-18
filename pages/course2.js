import fetch from "isomorphic-unfetch";
import {
  Card,
  Grid,
  Row,
  Text,
  Link,
  Dropdown,
  Avatar
} from "@nextui-org/react";
import styles from "../styles/Nav.module.css";
import Image from "next/image";
import Logo from "../public/Pictures/SkyCrew Logo PNG.png";

const Index = ({ courses }) => {
  return (
    <div>
      {/* NAVBAR */}

      {/* NAVBAR */}
      <h1>Courses</h1>
      <div>
        {courses.map((course) => {
          return (
            <div key={course._id}>
              <section className="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                  <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                      {course.title}
                      <br />
                      <button href={`/${course._id}`}>click here</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/courses");
  const { data } = await res.json();

  return { courses: data };
};

export default Index;
