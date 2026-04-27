"use client";
import styles from "./Vision.module.css";
import Reveal from "./Reveal";
import Link from "next/link";

export default function Vision() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* LEFT CONTENT */}
                    <Reveal>
                        <div className={styles.left}>
                            <span className={styles.subTitle}>OUR VISION</span>

                            <h2 className={styles.title}>
                                More Than a Club. <br />
                                A Movement of Impact.
                            </h2>

                            <p className={styles.description}>
                                Leo Club of Juhu is a space where passion meets purpose.
                                We empower individuals to lead, serve, grow, and build lifelong
                                connections — all while creating real impact in the community.
                            </p>

                            <div className={styles.points}>
                                <div className={styles.point}>❤️ Service-driven initiatives</div>
                                <div className={styles.point}>🚀 Leadership & growth</div>
                                <div className={styles.point}>🤝 Networking & exposure</div>
                                <div className={styles.point}>🎉 Fun, culture & fellowship</div>
                            </div>

                            <Link href="#contact" className={styles.cta}>
                                Join The Movement
                            </Link>
                        </div>
                    </Reveal>

                    {/* RIGHT CARDS */}
                    <div className={styles.cards}>
                        <Reveal>
                            <div className={styles.card}>
                                <h3>Lead</h3>
                                <p>Take initiative, own projects, and build leadership skills.</p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div className={styles.card}>
                                <h3>Serve</h3>
                                <p>Create meaningful impact through community service.</p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div className={styles.card}>
                                <h3>Connect</h3>
                                <p>Build strong networks and lifelong friendships.</p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div className={styles.card}>
                                <h3>Celebrate</h3>
                                <p>Balance purpose with fun, culture, and experiences.</p>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
}