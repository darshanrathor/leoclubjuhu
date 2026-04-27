"use client";
import styles from "./Team.module.css";
import Reveal from "./Reveal";

import Image from "next/image";

const team = [
  {
    name: "Leo Dhruvi Shah",
    role: "President, LY'25-26",
    image: "/team/dhruvi.jpeg",
    socials: { 
      insta: "https://www.instagram.com/dhruviii9898?igsh=MTc3ZmR2bDVzZHk4&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/dhruvi-shah-a53757185?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
    }
  },
  {
    name: "Leo Hitansh Doshi",
    role: "Vice President, LY'25-26 ",
    image: "/team/hitansh.jpeg",
    socials: { 
      insta: "https://www.instagram.com/hitansh28?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/in/hitanshdoshi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  },
  {
    name: "Leo Vatsal Nagodra",
    role: "Secretary, LY'25-26",
    image: "/team/vatsal.jpeg",
    socials: { 
      insta: "https://www.instagram.com/nagodra?igsh=MWFnc200NGh5NWdmaw==",
      linkedin: "https://www.linkedin.com/in/vatsal-nagodra?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    }
  },
  {
    name: "Leo Mit Shah",
    role: "Treasurer, LY'25-26",
    image: "/team/mit.jpeg",
    socials: {
      insta: "https://www.instagram.com/mitshxh?igsh=MWZxYThvY24xZnRjdQ%3D%3D&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/ca-mit-shah-0a430b18b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  }
];

export default function Team() {
  return (
    <section id="team" className={styles.teamSection}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <div className={styles.titleLine} />
            <h2 className={styles.title}>Meet The Team</h2>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {team.map((m) => (
            <Reveal key={m.name}>
              <div className={styles.memberCard}>
                <div className={styles.imageBox}>
                  <Image src={m.image} alt={m.name} width={300} height={350} className={m.name === "MJF Lion Navdeep Nigam" ? styles.navdeepImage : styles.memberImage} />
                </div>
                <div className={styles.infoBox}>
                  <p className={styles.name}>{m.name}</p>
                  <p className={styles.role}>{m.role}</p>
                  <div className={styles.socialLinks}>
                    <a href={m.socials.insta} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    </a>
                    <a href={m.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
