// ── Committee member images ──
import chiefPatron from '../assets/images/Chief Patron.png';
import patron from '../assets/images/Patron.png';
import patron2 from '../assets/images/Patron-2.png';
import generalChair from '../assets/images/General Chair & Convenor.png';
import generalCoChair from '../assets/images/General Co-Chair & Organizing Secretary.png';
import generalCoChair2 from '../assets/images/General Co-Chair & Organizing Secretary-2.png';
import generalCoChair3 from '../assets/images/General Co-Chair & Organizing Secretary-3.png';
import tpcChair from '../assets/images/TPC Chair.png';
import tpcChair2 from '../assets/images/TPC Chair-2.png';
import tpcCoChair from '../assets/images/TPC Co- Chair.png';
import financeChair from '../assets/images/Finance Committee Chair .png';
import publicityChair from '../assets/images/Publicity Chair .png';
import publicityChair2 from '../assets/images/Publicity Chair-2.png';
import publicityChair3 from '../assets/images/Publicity Chair-3.png';

// ── Conference info ──
export const conferenceInfo = {
    name: "ICMSS 2026",
    fullName: "4th International Conference on Communication, Microelectronics, Signal Processing & Systems",
    edition: "4th",
    venue: "TKM College of Engineering, Kollam, India",
    dates: "11–13 December 2026",
    dateStart: new Date('2026-12-11T09:00:00+05:30'),
};

// ── About ──
export const aboutConference = `The Fourth International Conference on Communication, Microelectronics, Signal Processing & Systems (ICMSS'26), hosted by TKM College of Engineering, continues its tradition of bringing together researchers, academicians, and industry professionals to share innovations and advancements in Electrical, Electronics, and Computing technologies. Since its inception in 2014, ICMSS has served as a vibrant platform for presenting cutting-edge research and fostering collaboration among experts from academia, research laboratories, and industry.

ICMSS'26 focuses on emerging trends and technological advancements across several key areas including Devices, Circuits, and Systems; VLSI and Nanotechnology; Computer Architecture and Embedded Systems; Signal Processing and Multimedia; Artificial Intelligence and Data Science; and Robotics and Cybernetics. These domains represent the core technologies that drive modern electronic and intelligent systems.

The conference further explores rapidly evolving fields such as Communication Networks, Internet of Things (IoT), Antenna and Microwave Techniques, Security and Privacy, and Control and Automation, emphasizing the integration of hardware and software solutions for next-generation systems.

In addition, ICMSS'26 highlights research in Power Electronics and Power Systems, addressing the growing need for sustainable and efficient energy technologies, as well as Biomedical Engineering and Healthcare, where innovative electronic and computational solutions are transforming medical diagnostics and treatment.

By bringing together diverse research communities, ICMSS'26 aims to provide a dynamic forum for knowledge exchange, interdisciplinary collaboration, and the dissemination of innovative ideas that will shape the future of communication, electronics, and intelligent systems.`;

export const aboutTKM = `TKM College of Engineering, the oldest engineering college in the private sector in the state of Kerala, was established in 1958 by Janab Thangal Kunju Musaliar, a reformer, philanthropist and businessman under the aegis of the TKM College Trust, in Kollam district of Kerala. The institution has been a torchbearer for social and technological transformation since its inception and has touched the lives of countless individuals from around the nation, both directly and indirectly. Over a period of six decades, the college produced thousands of brilliant engineers, many of whom are stalwarts in their fields across the globe.`;

// ── Stats ──
export const stats = [
    { label: "Years of Legacy", value: 12, suffix: "+" },
    { label: "Research Papers", value: 500, suffix: "+" },
    { label: "Countries", value: 15, suffix: "+" },
    { label: "Speakers", value: 50, suffix: "+" },
];

// ── Schedule / Important Dates ──
export const schedule = [
    { date: "20 March 2026", event: "Call for Papers Announcement", icon: "megaphone", status: "active" },
    { date: "15 September 2026", event: "Last Date for Draft Paper Submission", icon: "file-text", status: "upcoming" },
    { date: "15 October 2026", event: "Notification of Acceptance", icon: "check-circle", status: "upcoming" },
    { date: "11 November 2026", event: "Last Date for Final Camera-Ready Paper", icon: "file-check", status: "upcoming" },
    { date: "11–13 December 2026", event: "Conference Dates", icon: "calendar", status: "upcoming" },
];

// ── Topics ──
export const topics = [
    { title: "Signal Processing", icon: "activity" },
    { title: "Next Generation Communication Networks & Photonics", icon: "radio" },
    { title: "Intelligent Computing & Cybersecurity", icon: "shield" },
    { title: "Microelectronics & VLSI Design", icon: "cpu" },
    { title: "Advanced Analytics and AI Integration", icon: "brain" },
    { title: "Smart Energy Technologies", icon: "zap" },
    { title: "Advanced Biomedical Instrumentation", icon: "heart-pulse" },
    { title: "Cognitive Robotics & Drone Technology", icon: "bot" },
    { title: "Power Electronics and Smart Grids", icon: "plug" },
    { title: "Quantum Computing & Quantum Communication", icon: "atom" },
    { title: "Product Development & Technology Deployment", icon: "rocket" },
];

// ── Author Guidelines ──
export const authorGuidelines = {
    overview: `ICMSS 2026 aims to bring together researchers, academicians, and industry professionals from around the globe to share their latest research findings, exchange ideas, and discuss emerging trends in engineering systems and technologies.`,
    submission: `Technical papers describing original, previously unpublished research results—experimental or theoretical—are solicited in all relevant areas. Authors must format their papers using the official IEEE conference template.`,
    templateUrl: "https://www.ieee.org/conferences/publishing/templates",
    cmtLink: "https://cmt3.research.microsoft.com/TKMCEICMSS2026",
    maxPages: 6,
    peerReview: `All submissions will undergo a rigorous peer-review process led by an International Technical Program Committee. Accepted and presented papers will be submitted to IEEE Xplore Digital Library, ensuring wide visibility and impact for your research work. All submissions are processed through Crossref Similarity Check (iThenticate) to screen for plagiarism.`,
    cmtAcknowledgment: `The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.`,
};

// ── Committee ──
export const committee = [
    {
        role: "Chief Patron",
        members: [
            { name: "Janab T K Shahal Hassan Musaliar", designation: "Chairman, TKM Trust", image: chiefPatron },
        ],
    },
    {
        role: "Patron",
        members: [
            { name: "Janab T K Jalaluddin Musaliar", designation: "Treasurer, TKM Trust", image: patron },
            { name: "Dr. Sadiq A", designation: "Principal-in-charge, TKMCE", image: patron2 },
        ],
    },
    {
        role: "General Chair & Convenor",
        members: [
            { name: "Dr. Nishanth N", designation: "Professor, TKMCE", image: generalChair },
        ],
    },
    {
        role: "General Co-Chair & Organizing Secretary",
        members: [
            { name: "Dr. Arun A V", designation: "Assistant Professor, TKMCE", image: generalCoChair },
            { name: "Ms. Anu Assis", designation: "Associate Professor, TKMCE", image: generalCoChair2 },
            { name: "Ms. Reshna S", designation: "Associate Professor, TKMCE", image: generalCoChair3 },
        ],
    },
    {
        role: "TPC Chair",
        members: [
            { name: "Dr. Varun P Gopi", designation: "Associate Professor, NIT Tiruchirapalli", image: tpcChair },
            { name: "Dr. J Dhoulath Beegum", designation: "Professor, TKMCE", image: tpcChair2 },
        ],
    },
    {
        role: "TPC Co-Chair",
        members: [
            { name: "Mr. Ganeshnath R", designation: "Assistant Professor, TKMCE", image: tpcCoChair },
        ],
    },
    {
        role: "Finance Committee Chair",
        members: [
            { name: "Dr. Vishnu D", designation: "Assistant Professor, TKMCE", image: financeChair },
        ],
    },
    {
        role: "Publicity Chair",
        members: [
            { name: "Ms. Najia A", designation: "Associate Professor, TKMCE", image: publicityChair },
            { name: "Mr. Shabeer S", designation: "Associate Professor, TKMCE", image: publicityChair2 },
            { name: "Mr. Lubaib P", designation: "Assistant Professor, TKMCE", image: publicityChair3 },
        ],
    },
];

// ── Navigation ──
export const navLinks = [
    { label: "Home", path: "/" },
    { label: "Call for Papers", path: "/call-for-papers" },
    { label: "Committee", path: "/committee" },
    { label: "Speakers", path: "/speakers" },
    { label: "Camera Ready", path: "/camera-ready" },
    { label: "Registration", path: "/registration" },
];
