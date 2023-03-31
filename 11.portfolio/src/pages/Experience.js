import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdCastForEducation, MdWork } from "react-icons/md";
import '../style/Experience.css'
const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="wrapper">
          <h1>Education and job Experience</h1>
          <VerticalTimeline lineColor="#3e4979">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2011-2013"
              iconStyle={{ background: "#3e497a", color: "orange" }}
              icon={<MdCastForEducation />}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor Of Information Technology (BIT)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">UP, India</h4>
           
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="1998-2000"
              iconStyle={{ background: "#3e497a", color: "orange" }}
              icon={<MdCastForEducation />}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
            >
              <h3 className="vertical-timeline-element-title">
                10+2 (Math)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Bihar, India</h4>
           
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="1997"
              iconStyle={{ background: "#3e497a", color: "orange" }}
              icon={<MdCastForEducation />}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
            >
              <h3 className="vertical-timeline-element-title">
               Class 10
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Janakpur, Nepal</h4>
           
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2005-2011"
              iconStyle={{ background: "#3e497a", color: "orange" }}
              icon={<MdWork />}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
            >
              <h3 className="vertical-timeline-element-title">
               Property Management (DPAS - Clerk)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">US Army camp, QATAR</h4>
              <p>Worked as Defence property Management Clerk</p>
           
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2005-2011"
              iconStyle={{ background: "#3e497a", color: "orange" }}
              icon={<MdWork />}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
            >
              <h3 className="vertical-timeline-element-title">
               Property Management (DPAS - Clerk)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">US Army camp, QATAR</h4>
              <p>Worked as Defence property Management Clerk</p>
           
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2005-2011"
              iconStyle={{ background: "#3e497a", color: "orange" }}
              icon={<MdWork />}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
            >
              <h3 className="vertical-timeline-element-title">
               Property Management (DPAS - Clerk)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">US Army camp, QATAR</h4>
              <p>Worked as Defence property Management Clerk</p>
           
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2005-2011"
              iconStyle={{ background: "#3e497a", color: "orange" }}
              icon={<MdWork />}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
            >
              <h3 className="vertical-timeline-element-title">
               Property Management (DPAS - Clerk)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">US Army camp, QATAR</h4>
              <p>Worked as Defence property Management Clerk</p>
           
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
