export type Project={slug:string;
    year:number;
    title:string;
    summary:string;
    role:string;
    image:string;
    content?:string};
    export const projects:Project[]=[
        {slug:'2017-dewa-3d-printed-building',
            year:2017,title:'First 3D‑Printed Building in the UAE (DEWA) — Guinness World Record',
            summary:'Led R&D/realization of the first fully 3D‑printed building for DEWA; award‑winning milestone in large‑format AM.',
            role:'Senior Scientist & Lead Researcher',
            image: "/projects/dewa-building/hero.jpg",
            content:'High-level story, key challenges, materials, partners, and outcomes.'},
        {slug:'2024-swarm-robot',
            year:2024,
            title:'Ultra‑Low‑Cost LiDAR Robot for Swarm Robotics Teaching',
            summary:'Designed and deployed a low‑cost autonomous platform with LiDAR for hands‑on robotics curricula.',
            role:'Associate Professor / PI',
            image:'/placeholder/robot.jpg',
            content:'Hardware overview, software stack, course integration, results.'},
        {slug: "metal-3d-printing",
            year: 2022,
            title: "'Electrochemical Metal 3D Printing — Dense Copper Structures (Patent)'",
            summary: "Developed a stable EC jet process for dense copper AM; launched tabletop PCB etcher for makers.",
            role: "Founder & CTO, AthenaTech",
            image: "/projects/metal-3d-printing/hero.jpg",  // this must match your folder/filename
            content: "More details about the project, challenges, and outcomes."},
        {slug:'2025-etching-controller',
            year:2025,
            title:'Full‑Process Electrochemical Etching Controller',
            summary:'Closed‑loop controller for repeatable metal etching suitable for PCB and precision machining.',
            role:'Founder & CTO, AthenaTech',
            image:'/placeholder/etch.jpg',
            content:'Electronics, firmware, UI, performance metrics.'}];
