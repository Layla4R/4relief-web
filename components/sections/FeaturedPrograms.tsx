import React from 'react';
import styles from './featured.module.css';
import Card from '../ui/Card';

const programs = [
  { id: 'foodSupplies', image: '/images/campaigns/food-camp.jpg' },
  { id: 'medicalAid', image: '/images/campaigns/medical-camp.jpg' },
  { id: 'shelterTents', image: '/images/campaigns/khyam-camp.jpg' },
];

type ProgramMessage = {
  title: string;
  desc: string;
};

type FeaturedProgramsProps = {
  heading: string;
  cardMessages: {
    program: string;
    fromGoal: string;
    donors: string;
    once: string;
    monthly: string;
    donateNow: string;
    noGoal: string;
  };
  programMessages: Record<string, ProgramMessage>;
};

const FeaturedPrograms: React.FC<FeaturedProgramsProps> = ({ heading, cardMessages, programMessages }) => {
  return (
    <section className={styles.featured}>
      <div className={styles.inner}>
        <h2>{heading}</h2>
        <div className={styles.grid}>
          {programs.map((p) => (
            <Card
              key={p.id}
              title={programMessages[p.id].title}
              category={cardMessages.program}
              image={p.image}
              amount={0}
              goal={50000}
              raised={0}
              donors={0}
              messages={cardMessages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
