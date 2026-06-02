import { Navbar } from "@/components/layout/Navbar";
import { ContactForm } from "@/components/ui/ContactForm";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { ChevronRight, Mail, ExternalLink, FileText, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const skillCategories = [
  {
    abbr: "ROS",
    title: "Robotics & ROS",
    skills: ["ROS1", "ROS2", "Publisher / Subscriber", "cmd_vel", "LaserScan", "System Integration"],
  },
  {
    abbr: "CV",
    title: "AI & Computer Vision",
    skills: ["OpenCV", "HSV Thresholding", "Centroid Detection", "cv_bridge", "NumPy", "Image Processing"],
  },
  {
    abbr: "MCU",
    title: "Embedded Systems",
    skills: ["Arduino", "Servo Control", "PWM Control", "Bluetooth (HC-05)", "Sensor Integration", "Microcontrollers"],
  },
  {
    abbr: "CAD",
    title: "CAD & Mechanical",
    skills: ["SolidWorks", "CATIA", "Fusion 360", "Kinematic Modeling", "Assembly Design"],
  },
  {
    abbr: "DEV",
    title: "Programming & Tools",
    skills: ["Python", "C / C++", "Linux", "Git / GitHub", "VS Code", "Arduino IDE"],
  },
  {
    abbr: "ENG",
    title: "Engineering Core",
    skills: ["Forward Kinematics", "Inverse Kinematics", "DH Modeling", "Trajectory Planning", "Torque Analysis", "Signals & Systems"],
  },
];

const rosNodes = [
  {
    title: "Keyboard Teleoperation",
    desc: "Reads keystrokes from stdin and publishes mapped commands to a ROS topic. Demonstrates custom publisher node structure and terminal I/O handling in ROS.",
  },
  {
    title: "Twist Message Mapper",
    desc: "Converts discrete key inputs to geometry_msgs/Twist velocity commands — linear x and angular z — for robot motion control via cmd_vel.",
  },
  {
    title: "Timed Motion Sequencer",
    desc: "Publishes alternating forward and stop Twist commands on a fixed timer. A minimal open-loop motion sequence implemented as a ROS publisher node.",
  },
  {
    title: "Laser Range Extractor",
    desc: "Subscribes to sensor_msgs/LaserScan and extracts forward-facing range values to compute frontal obstacle clearance distance.",
  },
  {
    title: "Reactive Obstacle Avoidance",
    desc: "Uses LaserScan data to detect forward obstacles and command an autonomous turn — a basic reactive navigation behavior implemented in ROS1.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">

        {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
          {/* Top accent strip */}
          <div className="absolute top-0 inset-x-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(225,101,102,0.4), transparent)" }} />

          <div className="container mx-auto px-6 max-w-6xl relative z-10 py-28">
            <div className="grid md:grid-cols-3 gap-10 md:gap-16 items-center">

              {/* Text column — 2/3 width on desktop */}
              <div className="md:col-span-2 flex flex-col items-center text-center md:items-start md:text-left">

                {/* Availability badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-10">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  Open to Full-Time Roles &amp; Internships
                </div>

                {/* Name */}
                <h1 className="text-5xl sm:text-6xl md:text-6xl font-black tracking-tight leading-tight text-foreground mb-4">
                  Muhammed Rashid V P
                </h1>

                {/* Role title */}
                <p className="text-xl md:text-2xl font-semibold text-primary mb-5">
                  Robotics &amp; AI Engineer
                </p>

                {/* Specialization keywords */}
                <p className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase mb-10">
                  ROS &nbsp;·&nbsp; Computer Vision &nbsp;·&nbsp; Embedded Systems &nbsp;·&nbsp; Autonomous Robotics
                </p>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed max-w-lg mb-10">
                  Final-year B.Tech student in Robotics &amp; AI at RGIT Kottayam — building complete robotic
                  systems from embedded hardware and control to ROS-based autonomous software.
                  Seeking roles in robotics software engineering and AI development.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <Link
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 h-11 px-7 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    View Projects <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center h-11 px-7 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted hover:border-primary/30 transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>

                {/* Social / contact links */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm mb-12">
                  <Link href="https://github.com/Raashii19" target="_blank"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                  <Link href="https://linkedin.com/in/muhammed-rashid-v-p" target="_blank"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <LinkedinIcon className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </Link>
                  <Link href="mailto:rashidvp776@gmail.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>rashidvp776@gmail.com</span>
                  </Link>
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 pt-6 border-t border-border text-xs text-muted-foreground">
                  <span>RGIT Kottayam</span>
                  <span>·</span>
                  <span>B.Tech Robotics &amp; AI</span>
                  <span>·</span>
                  <span>Kerala, India</span>
                  <span>·</span>
                  <span>Final Year</span>
                </div>

              </div>

              {/* Photo column — 1/3 width, desktop only */}
              <div className="hidden md:flex md:col-span-1 items-center justify-center">
                <div className="relative">
                  {/* Photo frame */}
                  <div className="w-64 h-72 rounded-2xl overflow-hidden border border-border">
                    <Image
                      src="/profile.jpg"
                      alt="Muhammed Rashid V P — Robotics & AI Engineer"
                      width={256}
                      height={288}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                  </div>
                  {/* Offset accent border */}
                  <div className="absolute -bottom-3 -right-3 w-64 h-72 rounded-2xl -z-10"
                    style={{ border: "1px solid rgba(225,101,102,0.25)" }} />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════ ABOUT ═══════════════════════════════ */}
        <section id="about" className="py-24 border-t border-border scroll-mt-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-start">

              {/* Left: Text */}
              <div>
                <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">About</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Engineering Profile</h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed text-sm mb-8">
                  <p>
                    Final-year B.Tech student in Robotics &amp; AI at{" "}
                    <span className="text-foreground font-medium">Rajiv Gandhi Institute of Technology, Kottayam</span>,
                    with hands-on experience across the full robotics stack — embedded hardware and servo control,
                    ROS-based software architecture, and real-time computer vision pipelines.
                  </p>
                  <p>
                    Projects are built end-to-end: a{" "}
                    <span className="text-foreground font-medium">5-DoF robotic arm</span> with DH parameter
                    modeling, kinematics analysis, and Arduino-based wireless control; a{" "}
                    <span className="text-foreground font-medium">camera-guided line follower</span> using OpenCV
                    centroid detection published to ROS cmd_vel; and a set of ROS utility nodes covering
                    teleoperation, laser scan processing, and autonomous obstacle avoidance.
                  </p>
                  <p>
                    Focused on the intersection of perception and control — building systems that can sense their
                    environment and act reliably. Seeking roles in{" "}
                    <span className="text-foreground font-medium">ROS development</span>,{" "}
                    <span className="text-foreground font-medium">robotics software engineering</span>, and{" "}
                    <span className="text-foreground font-medium">computer vision</span>, with emphasis on
                    autonomous systems and real-world deployment.
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {["ROS Development", "Computer Vision", "Embedded Control", "Motion Planning", "Autonomous Robotics", "AI for Robotics"].map((t) => (
                      <span key={t} className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-6">
                  <Link href="#contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    Get in Touch <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                  <Link href="https://github.com/Raashii19" target="_blank" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    GitHub Profile <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right: Cards */}
              <div className="space-y-5">
                <div className="bg-card border border-border rounded-2xl p-7">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-5">Quick Info</h3>
                  <div className="space-y-3.5">
                    {[
                      { label: "Institute", value: "Rajiv Gandhi Institute of Technology, Kottayam" },
                      { label: "Program", value: "B.Tech Robotics & AI — Final Year" },
                      { label: "Location", value: "Kerala, India" },
                      { label: "Status", value: "Actively Seeking Roles" },
                    ].map((item) => (
                      <div key={item.label} className="grid grid-cols-3 gap-2 items-start">
                        <span className="text-xs text-muted-foreground uppercase tracking-wide col-span-1">{item.label}</span>
                        <span className="text-sm text-foreground font-medium col-span-2">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-7">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-5">Target Roles</h3>
                  <div className="space-y-2.5">
                    {[
                      "ROS Developer",
                      "Robotics Software Engineer",
                      "Computer Vision Engineer",
                      "Embedded Robotics Engineer",
                      "Autonomous Systems Engineer",
                    ].map((role) => (
                      <div key={role} className="flex items-center gap-2.5 text-sm text-foreground">
                        <ChevronRight className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════ SKILLS ══════════════════════════════ */}
        <section id="skills" className="section-alt py-24 border-t border-border scroll-mt-16">
          <div className="container mx-auto px-6 max-w-6xl">

            <div className="mb-12">
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Capabilities</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Skills</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-md border border-primary/25 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#4f292e" }}
                    >
                      <span className="text-[10px] font-mono font-bold text-primary leading-none">{cat.abbr}</span>
                    </div>
                    <h3 className="font-bold text-foreground text-sm tracking-tight">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded border border-border">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ═════════════════════════════ PROJECTS ═════════════════════════════ */}
        <section id="projects" className="py-24 border-t border-border scroll-mt-16">
          <div className="container mx-auto px-6 max-w-6xl">

            <div className="mb-12">
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Projects</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Engineering Case Studies</h2>
            </div>

            {/* ── Project 01 ── */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-6">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-[11px] font-mono text-muted-foreground">01</span>
                <span className="px-2.5 py-1 rounded text-xs font-medium bg-muted text-muted-foreground border border-border">
                  Mechanical · Embedded · ROS
                </span>
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-medium border border-primary/30 text-primary sm:ml-auto"
                  style={{ backgroundColor: "rgba(225,101,102,0.1)" }}
                >
                  Flagship Project
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                5-DoF Robotic Arm — Spherical Workspace for Spray Painting
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Description + engineering approach */}
                <div className="md:col-span-2 space-y-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Designed and built a 5-degree-of-freedom robotic arm to automate surface spray-painting
                    tasks. The system provides programmable, repeatable joint motion across a full spherical
                    workspace — replacing manual operation with consistent, position-controlled coverage.
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        label: "Kinematics & Modeling",
                        detail: "DH parameter tables constructed for all five joints; analytical FK and IK solutions derived and verified against workspace reachability bounds.",
                      },
                      {
                        label: "Motion Planning",
                        detail: "Quintic polynomial trajectory algorithm implemented to generate smooth, jerk-minimized velocity profiles across all joints.",
                      },
                      {
                        label: "Motor Selection",
                        detail: "Joint torque requirements calculated from link geometry and payload; servo motors selected based on torque analysis per joint.",
                      },
                      {
                        label: "Embedded Control",
                        detail: "Arduino Mega drives 5-channel servo PWM with real-time joint command processing over serial and Bluetooth.",
                      },
                      {
                        label: "User Interface",
                        detail: "Browser-based wireless control panel via Bluetooth (HC-05) with live joint angle feedback.",
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-3 text-sm">
                        <span className="text-primary font-bold flex-shrink-0 select-none mt-px">—</span>
                        <p>
                          <span className="text-foreground font-semibold">{item.label}: </span>
                          <span className="text-muted-foreground">{item.detail}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications table */}
                <div>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                    Specifications
                  </p>
                  <div className="divide-y divide-border">
                    {[
                      { label: "DoF", value: "5" },
                      { label: "Reach", value: "~400–430 mm" },
                      { label: "Base Rotation", value: "0° – 360°" },
                      { label: "Vertical Sweep", value: "0° – 135°" },
                      { label: "Controller", value: "Arduino Mega" },
                      { label: "Wireless", value: "Bluetooth HC-05" },
                    ].map((spec) => (
                      <div key={spec.label} className="flex justify-between items-center gap-4 py-2.5">
                        <span className="text-xs text-muted-foreground">{spec.label}</span>
                        <span className="text-sm font-semibold text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex flex-wrap gap-1.5">
                {[
                  "DH Modeling", "Forward Kinematics", "Inverse Kinematics", "Quintic Trajectory",
                  "Torque Analysis", "Arduino", "Servo PWM", "Bluetooth HC-05", "SolidWorks", "CATIA",
                ].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Project 02 ── */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-12">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-[11px] font-mono text-muted-foreground">02</span>
                <span className="px-2.5 py-1 rounded text-xs font-medium bg-muted text-muted-foreground border border-border">
                  Computer Vision · ROS
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Vision-Based Autonomous Line Follower — ROS + OpenCV
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Description + engineering approach */}
                <div className="md:col-span-2 space-y-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Camera-guided autonomous robot that tracks a colored line in real time using computer
                    vision. The system processes a live image stream, isolates the line through HSV color
                    segmentation, derives a heading error from the centroid position, and publishes corrective
                    velocity commands to ROS — closing the perception-to-actuation loop entirely in software.
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        label: "Perception Pipeline",
                        detail: "Camera frame → HSV color space conversion → binary mask → morphological cleanup → contour extraction.",
                      },
                      {
                        label: "Line Detection",
                        detail: "Centroid of the largest contour used as the line position reference; pixel deviation from image center drives the angular error signal.",
                      },
                      {
                        label: "ROS Integration",
                        detail: "cv_bridge converts sensor_msgs/Image to OpenCV Mat; corrected output published as geometry_msgs/Twist on cmd_vel.",
                      },
                      {
                        label: "Control Logic",
                        detail: "Proportional angular velocity correction derived from centroid offset; forward velocity held constant during active line tracking.",
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-3 text-sm">
                        <span className="text-primary font-bold flex-shrink-0 select-none mt-px">—</span>
                        <p>
                          <span className="text-foreground font-semibold">{item.label}: </span>
                          <span className="text-muted-foreground">{item.detail}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pipeline table */}
                <div>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                    Pipeline
                  </p>
                  <div className="divide-y divide-border">
                    {[
                      { label: "Input", value: "sensor_msgs/Image" },
                      { label: "Color Space", value: "HSV" },
                      { label: "Detection", value: "Centroid Tracking" },
                      { label: "Bridge", value: "cv_bridge" },
                      { label: "Output", value: "geometry_msgs/Twist" },
                      { label: "Language", value: "Python 3" },
                    ].map((spec) => (
                      <div key={spec.label} className="flex justify-between items-center gap-4 py-2.5">
                        <span className="text-xs text-muted-foreground">{spec.label}</span>
                        <span className="text-sm font-semibold text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex flex-wrap gap-1.5">
                {[
                  "ROS1", "OpenCV", "Python", "cv_bridge", "HSV Masking",
                  "Centroid Detection", "cmd_vel", "sensor_msgs/Image", "geometry_msgs/Twist",
                ].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ── ROS Fundamentals ── */}
            <div className="border border-border rounded-2xl overflow-hidden">
              <div className="px-8 py-6 border-b border-border section-alt">
                <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">Supporting Work</p>
                <h3 className="text-xl font-bold mb-1.5">
                  ROS Fundamentals — Publisher / Subscriber Implementations
                </h3>
                <p className="text-muted-foreground text-sm max-w-2xl">
                  Standalone ROS1 nodes demonstrating core patterns: message passing, sensor data processing,
                  and reactive behavior. Written as part of systematic ROS skill development.
                </p>
              </div>
              <div className="bg-card p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {rosNodes.map((node) => (
                  <div
                    key={node.title}
                    className="rounded-lg p-5 border border-border hover:border-primary/25 transition-colors"
                    style={{ backgroundColor: "#120809" }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-[10px] font-mono font-bold text-primary flex-shrink-0 mt-0.5">ROS</span>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1.5">{node.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{node.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ═════════════════════════════ DOCUMENTS ════════════════════════════ */}
        <section id="documents" className="section-alt py-24 border-t border-border scroll-mt-16">
          <div className="container mx-auto px-6 max-w-6xl">

            <div className="mb-12">
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Credentials</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications &amp; Resume</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">

              {/* Certifications */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                  Planned Certifications
                </p>
                <div className="space-y-3">
                  {[
                    {
                      title: "ROS2 — Advanced Robotics Software Development",
                      domain: "Robotics Software",
                      status: "In Progress",
                    },
                    {
                      title: "Computer Vision with OpenCV",
                      domain: "Computer Vision",
                      status: "Upcoming",
                    },
                    {
                      title: "Autonomous Navigation & SLAM",
                      domain: "Autonomous Systems",
                      status: "Upcoming",
                    },
                    {
                      title: "Embedded Systems Programming",
                      domain: "Embedded Engineering",
                      status: "Upcoming",
                    },
                  ].map((cert) => (
                    <div
                      key={cert.title}
                      className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-md bg-muted border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Award className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <h4 className="text-sm font-semibold text-foreground leading-snug">
                            {cert.title}
                          </h4>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded border flex-shrink-0 ${
                              cert.status === "In Progress"
                                ? "text-primary border-primary/30"
                                : "text-muted-foreground border-border"
                            }`}
                            style={cert.status === "In Progress" ? { backgroundColor: "rgba(225,101,102,0.1)" } : {}}
                          >
                            {cert.status}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{cert.domain}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resume */}
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-md bg-muted border border-border flex items-center justify-center flex-shrink-0">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base leading-none mb-1">Resume</h3>
                    <p className="text-xs text-muted-foreground">Currently under preparation</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  A full-format PDF resume is being finalised for robotics and AI engineering roles — covering
                  academic background, technical projects, skill profile, and career objectives.
                </p>

                <div className="mb-8">
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                    Contents
                  </p>
                  <div className="space-y-2.5">
                    {[
                      "Academic profile — RGIT Kottayam, B.Tech Robotics & AI",
                      "Projects — Robotic Arm, Vision Line Follower, ROS Nodes",
                      "Skills — ROS, OpenCV, Embedded Systems, CAD, Python",
                      "Target roles — Robotics Software & AI Engineering",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <ChevronRight className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="mailto:rashidvp776@gmail.com"
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors mt-auto"
                >
                  <Mail className="h-4 w-4" /> Request Resume via Email
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════ CONTACT ═════════════════════════════ */}
        <section id="contact" className="py-24 border-t border-border scroll-mt-16">
          <div className="container mx-auto px-6 max-w-6xl">

            <div className="mb-12">
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get in Touch</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">

              {/* Left: Info */}
              <div className="space-y-8">
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                  Available for final-year internships and full-time positions in robotics software
                  engineering, ROS development, and AI / computer vision. Direct inquiries welcome
                  — response within 24–48 hours.
                </p>

                {/* Contact links — table style */}
                <div className="border border-border rounded-xl overflow-hidden divide-y divide-border">
                  {[
                    {
                      icon: <Mail className="h-4 w-4" />,
                      label: "Email",
                      value: "rashidvp776@gmail.com",
                      href: "mailto:rashidvp776@gmail.com",
                    },
                    {
                      icon: <LinkedinIcon className="h-4 w-4" />,
                      label: "LinkedIn",
                      value: "linkedin.com/in/muhammed-rashid-v-p",
                      href: "https://linkedin.com/in/muhammed-rashid-v-p",
                    },
                    {
                      icon: <GithubIcon className="h-4 w-4" />,
                      label: "GitHub",
                      value: "github.com/Raashii19",
                      href: "https://github.com/Raashii19",
                    },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      className="flex items-center gap-4 px-5 py-4 bg-card hover:bg-muted transition-colors group"
                    >
                      <div className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest block mb-0.5">
                          {item.label}
                        </span>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors block truncate">
                          {item.value}
                        </span>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </Link>
                  ))}
                </div>

                {/* Availability meta */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span>Kerala, India</span>
                  <span>·</span>
                  <span>Open to Remote &amp; On-site</span>
                  <span>·</span>
                  <span>Replies within 24–48 hours</span>
                </div>
              </div>

              {/* Right: Form */}
              <ContactForm />

            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <p className="font-bold text-foreground text-sm tracking-tighter">
              <span className="text-primary">&lt;</span>Rashid<span className="text-primary">/&gt;</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Robotics &amp; AI Engineer — Kerala, India
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Link href="https://github.com/Raashii19" target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <GithubIcon className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com/in/muhammed-rashid-v-p" target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <LinkedinIcon className="h-4 w-4" />
            </Link>
            <Link href="mailto:rashidvp776@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            Built with Next.js &amp; Tailwind · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
