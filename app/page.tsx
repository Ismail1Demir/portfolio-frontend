"use client";
import { useState } from "react";
import Image from "next/image";
import ChatWidget from "@/components/ChatWidget";
import { Mail, Phone, Award } from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<"sv" | "en">("sv");

  const content = {
    sv: {
      title: "Ismail Demir",
      sub: "Dataingenjör | Software & AI Engineer",
      desc: "Nyexaminerad dataingenjör med stort intresse för mjukvaruutveckling och AI. För mig är den tekniska utvecklingen ett tåg jag aldrig vill kliva av, jag drivs av att ständigt lära mig mer och utvecklas.\n\nSom person är jag nyfiken, tar snabbt till mig ny kunskap och älskar att lösa komplexa problem genom smarta, datadrivna lösningar som gör verklig skillnad.",
      skillsTitle: "Tekniska Färdigheter",
      experienceTitle: "Erfarenhet",
      educationTitle: "Utbildning",
      projectTitle: "Projekt",
      awardsTitle: "Utmärkelser",
      skills: ["Python", "C#", "SQL", "Java", "C++", "Machine Learning", "Deep Learning", "Neural Networks", "Transformers", "Pytorch", "Medical AI", "RAG", "HTML", "CSS", "MySQL", "PostgreSQL", "FastAPI", "Git", "GitHub", "GitLab", "Docker", "Slurm", "Scrum", "Spring Boot", "JUnit"],
      experience: [
        {
          company: "Sigma Industry Solutions",
          role: "Internship",
          date: "Sep 2024 - Jan 2025",
          desc: "Utvecklade ett objektorienterat databassystem i C# och SQL för att spåra projektobjekt, samt ett webbgränssnitt i ASP.NET Core MVC."
        },
        {
          company: "Godishuset",
          role: "Operations Manager (Familjeföretag)",
          date: "Apr 2019 - Aug 2025",
          desc: "Ansvarade för daglig butiksdrift och schemaläggning. Ledde ett team på 2–3 anställda och införde operativa arbetsflöden som förbättrade effektiviteten. Hanterade företagets databas, designade ett lagersystem för inköpsstöd och bidrog till utvecklingen av webbplatsen."
        },
        {
          company: "Kriminalvården",
          role: "Kriminalvårdare",
          date: "Jun 2022 - Nov 2022",
          desc: "Ansvarade för de intagnas säkerhet, rehabilitering och framgångsrika återanpassning genom regelbundna ronder, visitationer och övervakning inom anstalten."
        }
      ],
      education: [
        {
          school: "Technical University of Munich (TUM)",
          degree: "Utbytestermin / Avancerade studier / forskningsprojekt",
          date: "Okt 2025 - Mar 2026",
          desc: "Läste en extra termin utomlands efter kandidatexamen med fokus på avancerade kurser inom Machine Learning, AI in Medicine, Data Mining och Multimodal AI in Medicine. Var även aktivt delaktig i en forskningsgrupp."
        },
        {
          school: "Högskolan i Halmstad",
          degree: "Dataingenjör (Kandidatexamen i Datateknik)",
          date: "Aug 2022 - Jun 2025",
        }
      ],
      awards: [
        { title: "Best Thesis in Health Innovation", org: "Getinge Sterilization AB" },
        { title: "Best Thesis in Innovation", org: "Leap for Life" }
      ],
      projects: [
        {
          title: "AI-driven Portfolio & RAG Chatbot",
          tech: ["Python", "RAG", "FastAPI", "Next.js"],
          desc: "Utvecklade denna webbplats med en integrerad AI-assistent via npx create-next-app@latest. Frontend-delen är enkel eftersom det är mitt första Next.js-projekt och jag fortfarande lär mig ramverket. Projektets verkliga komplexitet och mitt huvudfokus ligger på RAG-systemet och backenden som driver chatbotten."
        },
        {
          title: "Learning from Time: Longitudinal and Anatomy-Aware Models for Lung Cancer Risk Prediction (TUM)",
          tech: ["Python", "PyTorch", "AI", "Medical Imaging", "Transformers", "Deep Learning", "Scrum"],
          desc: "Genomförde ett maskininlärningsprojekt vid Chair of AI in Healthcare and Medicine, Technical University of Munich. Utvecklade en longitudinell och anatomi-medveten modell med Python och PyTorch för att prediktera lungcancerrisk över en 6-årsperiod. Kombinerade temporal medicinsk data med anatomiska bildegenskaper med hjälp av transformer-baserade arkitekturer för att fånga upp långsiktiga sjukdomsmönster och förbättra träffsäkerheten för tidig riskbedömning, samtidigt som arbetet bedrevs i en agil Scrum-miljö."
        },
        {
          title: "Inventory Management System",
          tech: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
          desc: "Utvecklade ett lagerhanteringssystem för Godishuset för att spåra lagernivåer och stödja inköpsbeslut. Systemet visar lagertillgänglighet i realtid och genererar varningar för artiklar som behöver beställas om.",
          images: ["/images/inventory1.png", "/images/inventory2.png"]
        },
        
        {
          title: "AI-Based Detection & Classification of Prostate Cancer (Högskolan i Halmstad och Sahlgrenska Universitetssjukhuset)",
          tech: ["Python", "PyTorch", "AI", "Deep Learning", "CNN", "Medical Imaging", "Bachelor's Thesis"],
          desc: "Mitt examensarbete handlade om att utveckla en AI-modell för detektion av prostatacancer baserad på medicinska bilddata. Arbetet belönades med två stipendier för bästa examensarbete, vilket speglar kvaliteten på mitt arbete. I samband med projektet utvecklade jag även en applikation för att visualisera modellens beslutsprocess.",
          image: "/images/prostate-cam.png"
        },
        {
          title: "Bowling Game Simulator",
          tech: ["Java", "Swing", "JUnit"],
          desc: "Utvecklade en bowlingsimulator i Java med separerad spellogik och GUI-komponenter. Implementerade poängräkning, hantering av omgångar (frames) och ett grafiskt gränssnitt, samt skrev JUnit-tester för att verifiera spelets beteende och poängregler. Projektet stärkte mina färdigheter inom Java, objektorienterad programmering och strukturerad applikationsdesign.",
          image: "/images/bowling.png"
        },
        {
          title: "Game Development (Högskolan i Halmstad)",
          tech: ["Java", "OOP", "MVC", "JUnit"],
          desc: "Utvecklade två Java-spel, SameGame och Bomberman, med starkt fokus på objektorienterad programmering, mjukvarudesign och underhållbar kod. Byggde ett delat ramverk med hjälp av MVC-arkitektur för att förbättra modularitet, återanvändning av kod och skalbarhet. Arbetade även med JUnit-testning, strukturerad inmatningshantering och applikationslogik, vilket stärkte mina Java-kunskaper och mitt intresse för backend-utveckling.",
          videos: [
            { src: "/videos/Bomberman.mp4", label: "Bomberman" },
            { src: "/videos/Samegame.mp4", label: "SameGame" }
          ]
        },
        {
          title: "Real-Time Microkernel (Högskolan i Halmstad)",
          tech: ["C++", "Embedded Systems", "ARM Cortex"],
          desc: "Utvecklade en realtids-mikrokärna i mjukvara för ARM Cortex (Arduino Due). Implementerade uppgiftsschemaläggning (task scheduling) och processhantering för inbyggda system."
        },
        {
          title: "Smart Home Project (Högskolan i Halmstad)",
          tech: ["C++", "Arduino", "Linked Lists", "Embedded Systems"],
          desc: "Utvecklade ett smart hemsystem med Arduino innehållande realtidsövervakning av temperatur, ett dynamiskt 7-dagars dataloggningssystem med länkade listor (Linked Lists) och SysTick-baserad tidsstämpling. Implementerade även ett automatiserat, solspårande rullgardinssystem med servomotorer, samt ett konfigurerbart temperaturlarm via ett interaktivt gränssnitt med LCD och knappsats där dagliga min-, max- och medelvärden presenterades."
        }
      ]
    },
    en: {
      title: "Ismail Demir",
      sub: "Computer Science Engineer | Software & AI Engineer",
      desc: "Newly graduated Computer Engineer with a strong passion for software development and AI. To me, technological advancement is a train I never want to get off, I am driven by constantly learning and evolving.\n\nI am a curious, fast learner who loves solving complex problems through smart, data-driven solutions that make a real difference.",
      skillsTitle: "Technical Skills",
      experienceTitle: "Experience",
      educationTitle: "Education",
      projectTitle: "Projects",
      awardsTitle: "Awards",
      skills: ["Python", "C#", "SQL", "Java", "C++", "Machine Learning", "Deep Learning", "Medical AI", "RAG", "HTML", "CSS"],
      experience: [
        {
          company: "Sigma Industry Solutions",
          role: "Internship",
          date: "Sep 2024 - Jan 2025",
          desc: "Developed an object-oriented database system in C# and SQL, and a web interface using ASP.NET Core MVC."
        },
        {
          company: "Godishuset",
          role: "Operations Manager (Family Business)",
          date: "Apr 2019 - Aug 2025",
          desc: "Oversaw daily store operations and staff scheduling. Led a small team of 2-3 staff, introducing operational workflows that improved consistency. Designed and implemented an inventory management system to track stock levels and support purchasing decisions."
        },
        {
          company: "Kriminalvården",
          role: "Corrections Officer",
          date: "Jun 2022 - Nov 2022",
          desc: "Ensured inmate safety, rehabilitation, and successful reintegration by conducting regular patrols, inspections, and monitoring within the facility."
        }
      ],
      education: [
        {
          school: "Technical University of Munich (TUM)",
          degree: "Exchange Semester / Advanced Studies / research project",
          date: "Oct 2025 - Mar 2026",
          desc: "Completed an extra semester abroad after my bachelor's degree, focusing on advanced courses in Machine Learning, AI in Medicine, Data Mining, and Multimodal AI in Medicine. Also actively participated in a research group."
        },
        {
          school: "Halmstad University",
          degree: "Bachelor of Science in Computer Engineering",
          date: "Aug 2022 - Jun 2025",
        }
      ],
      awards: [
        { title: "Best Thesis in Health Innovation", org: "Getinge Sterilization AB" },
        { title: "Best Thesis in Innovation", org: "Leap for Life" }
      ],
      projects: [
        {
          title: "AI-driven Portfolio & RAG Chatbot",
          tech: ["Python", "RAG", "FastAPI", "Next.js"],
          desc: "Developed this website with an integrated AI assistant using npx create-next-app@latest. The frontend is simple because it's my first Next.js project and I am still learning the framework. The true complexity and my main focus lie in the RAG system and the backend powering the chatbot."
        },
        {
          title: "Learning from Time: Longitudinal and Anatomy-Aware Models for Lung Cancer Risk Prediction (TUM)",
          tech: ["Python", "PyTorch", "AI", "Medical Imaging", "Transformers", "Deep Learning", "Scrum"],
          desc: "Conducted a machine learning project at the Chair of AI in Healthcare and Medicine, Technical University of Munich. Developed a longitudinal and anatomy-aware model using Python and PyTorch to predict lung cancer risk over a 6-year period. Combined temporal medical data with anatomical imaging features using transformer-based architectures to capture long-term disease patterns and improve early risk prediction accuracy, while also working in an agile Scrum environment."
        },
        {
        title: "Inventory Management System",
        tech: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
        desc: "Developed an inventory management system for Godishuset to track stock levels and support candy purchasing decisions. Implemented functionality to display real-time stock availability and reorder alerts.",
        images: ["/images/inventory1.png", "/images/inventory2.png"]
        },
        {
          title: "AI-Based Detection & Classification of Prostate Cancer (Halmstad University and Sahlgrenska University Hospital)",
          tech: ["Python", "PyTorch", "AI", "Deep Learning", "CNN", "Medical Imaging", "Bachelor's Thesis"],
          desc: "My bachelor's thesis involved developing an AI model for the detection of prostate cancer based on medical imaging data. The work was awarded two scholarships for the best thesis, reflecting the quality of my work. In connection with the project, I also developed an application to visualize the model's decision-making process.",
          image: "/images/prostate-cam.png"
        },
        {
          title: "Bowling Game Simulator",
          tech: ["Java", "Swing", "JUnit"],
          desc: "Developed a bowling game simulator in Java with separate game logic and GUI components. Implemented scoring logic, frame handling, and a graphical interface, and wrote JUnit tests to verify game behavior and scoring rules. The project strengthened my skills in Java, object-oriented programming, and structured application design.",
          image: "/images/bowling.png"
        },
        {
          title: "Game Development (Halmstad University)",
          tech: ["Java", "OOP", "MVC", "JUnit"],
          desc: "Developed two Java games, SameGame and Bomberman, with a strong focus on object-oriented programming, software design, and maintainable code. Built a shared framework using MVC architecture to improve modularity, code reuse, and scalability. Also worked with JUnit testing, structured input handling, and application logic, which strengthened my Java skills and interest in backend development.",
          videos: [
            { src: "/videos/Bomberman.mp4", label: "Bomberman" },
            { src: "/videos/Samegame.mp4", label: "SameGame" }
          ]
        },
        {
          title: "Real-Time Microkernel (Halmstad University)",
          tech: ["C++", "Embedded Systems", "ARM Cortex"],
          desc: "Developed a real-time microkernel in software on an ARM Cortex processor (Arduino Due). Implemented core functionalities including task scheduling and process management for embedded devices."
        },
        {
          title: "Smart Home Project (Halmstad University)",
          tech: ["C++", "Arduino", "Linked Lists", "Embedded Systems"],
          desc: "Developed a smart home system using Arduino featuring real-time temperature monitoring, a dynamic 7-day data logging system using Linked Lists, and custom SysTick-based timestamping. Implemented an automated sun-tracking shading system using a servo motor, alongside a configurable temperature alarm and a keypad/LCD interface to interact with the system and display daily minimum, maximum, and average metrics."
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-24">
      
      {/* Språkväljare överst till höger */}
      <div className="absolute top-6 right-6">
        <button 
          onClick={() => setLang(lang === "sv" ? "en" : "sv")}
          className="text-[10px] font-bold tracking-widest border border-gray-700 px-3 py-1.5 rounded bg-[#111] hover:bg-white hover:text-black transition-colors uppercase"
        >
          {lang === "sv" ? "EN" : "SV"}
        </button>
      </div>

      {/* 1. CENTRERAD HEADER ("Visitkortet") */}
      <header className="pt-24 pb-16 px-6 border-b border-gray-800 bg-black flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">{t.title}</h1>
        <p className="text-xl md:text-2xl text-blue-500 font-medium mb-6">{t.sub}</p>
        
        <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed mb-8 whitespace-pre-line">
          {t.desc}
        </p>
        
        {/* Kontakt-blocken i mitten */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium mb-10">
          <a href="mailto:ismdem654@hotmail.com" className="flex items-center gap-2 bg-[#111] border border-gray-800 px-4 py-2 rounded-lg hover:border-gray-500 transition-colors">
            <Mail size={16} className="text-gray-400" /> ismdem654@hotmail.com
          </a>
          
          <a href="https://www.linkedin.com/in/ismail-demir-724902299/" target="_blank" className="flex items-center gap-2 bg-[#111] border border-gray-800 px-4 py-2 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors">
            🔗 LINKEDIN
          </a>
          <a href="https://github.com/Ismail1Demir" target="_blank" className="flex items-center gap-2 bg-[#111] border border-gray-800 px-4 py-2 rounded-lg hover:border-gray-500 hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GITHUB
          </a>
        </div>

        {/* Utmärkelser placerade under länkarna, sida vid sida */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-3xl">
          {t.awards.map((award, i) => (
            <div key={i} className="flex-1 flex items-center gap-4 bg-[#0a0a0a] border border-gray-800 p-4 rounded-xl shadow-sm hover:border-gray-600 transition-colors text-left">
              <Award size={28} className="text-yellow-600 shrink-0"/>
              <div>
                <span className="block font-bold text-sm text-gray-200 leading-tight mb-1">{award.title}</span>
                <span className="text-xs text-gray-500">{award.org}</span>
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* 2. INNEHÅLLET (Blocken under headern) */}
      <main className="max-w-3xl mx-auto px-6 mt-16 space-y-16">
        
        {/* Skills - Centrerad grid */}
        <section>
          <h2 className="text-sm font-bold mb-6 uppercase tracking-widest text-gray-500 text-center">{t.skillsTitle}</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {t.skills.map((skill, i) => (
              <span key={i} className="px-4 py-2 bg-[#111] border border-gray-800 rounded-lg text-xs font-semibold text-gray-300 shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience - Block */}
        <section>
          <h2 className="text-sm font-bold mb-6 uppercase tracking-widest text-gray-500 border-b border-gray-800 pb-2">{t.experienceTitle}</h2>
          <div className="space-y-6">
            {t.experience.map((exp, i) => (
              <div key={i} className="bg-[#0f0f0f] border border-gray-800 p-6 md:p-8 rounded-2xl hover:border-gray-700 transition-colors">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
                  <h3 className="font-bold text-xl text-white">{exp.company}</h3>
                  <span className="text-xs text-gray-400 font-mono bg-black px-3 py-1.5 rounded-md border border-gray-800 w-fit">{exp.date}</span>
                </div>
                <p className="text-sm text-blue-500 font-bold mb-4 uppercase tracking-wider">{exp.role}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education - Block */}
        <section>
          <h2 className="text-sm font-bold mb-6 uppercase tracking-widest text-gray-500 border-b border-gray-800 pb-2">{t.educationTitle}</h2>
          <div className="space-y-6">
            {t.education.map((edu, i) => (
              <div key={i} className="bg-[#0f0f0f] border border-gray-800 p-6 md:p-8 rounded-2xl hover:border-gray-700 transition-colors">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
                  <h3 className="font-bold text-xl text-white">{edu.school}</h3>
                  <span className="text-xs text-gray-400 font-mono bg-black px-3 py-1.5 rounded-md border border-gray-800 w-fit">{edu.date}</span>
                </div>
                <p className="text-sm text-blue-500 font-bold mb-4 uppercase tracking-wider">{edu.degree}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{edu.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects - Block */}
        <section>
          <h2 className="text-sm font-bold mb-6 uppercase tracking-widest text-gray-500 border-b border-gray-800 pb-2">{t.projectTitle}</h2>
          <div className="space-y-6">
            {t.projects.map((proj, i) => (
              <div key={i} className="bg-[#0f0f0f] border border-gray-800 p-6 md:p-8 rounded-2xl hover:border-gray-700 transition-colors">
                <h3 className="font-bold text-xl mb-4 text-white">{proj.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((techItem, index) => (
                    <span key={index} className="px-2.5 py-1 bg-black border border-gray-800 rounded-md text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                      {techItem}
                    </span>
                  ))}
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed">{proj.desc}</p>
                
                {/* BILDEN RENDERAS HÄR OM DEN FINNS I OBJEKTET (Enstaka bild) */}
                {(proj as any).image && (
                  <div className="mt-6 rounded-lg overflow-hidden border border-gray-800">
                    <Image 
                      src={(proj as any).image} 
                      alt={proj.title} 
                      width={800} 
                      height={400} 
                      className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}

                {/* NYTT: RENDERAR FLERA BILDER SIDA VID SIDA */}
                {(proj as any).images && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(proj as any).images.map((img: string, idx: number) => (
                      <div key={idx} className="rounded-lg overflow-hidden border border-gray-800 bg-black">
                        <Image 
                          src={img} 
                          alt={`${proj.title} ${idx}`} 
                          width={400} 
                          height={300} 
                          className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                )}
                {/* VIDEOS RENDERAS HÄR SIDA VID SIDA */}
                {(proj as any).videos && (
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {(proj as any).videos.map((video: any, idx: number) => (
                      <div key={idx} className="flex flex-col space-y-2">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold ml-1">
                          {video.label}
                        </span>
                        <div className="rounded-lg overflow-hidden border border-gray-800 bg-black flex-1 flex">
                          <video 
                            src={video.src}
                            controls
                            muted
                            loop
                            playsInline
                            className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>
      
      <ChatWidget />
    </div>
  );
}