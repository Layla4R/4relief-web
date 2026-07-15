"use client"

import React, { useState } from 'react'
import styles from './card.module.css'
import Button from './Button'

type CardMessages = {
  program: string;
  fromGoal: string;
  donors: string;
  once: string;
  monthly: string;
  donateNow: string;
  noGoal: string;
};

const defaultCardMessages: CardMessages = {
  program: 'program',
  fromGoal: 'from goal',
  donors: 'donors',
  once: 'Once',
  monthly: 'Monthly',
  donateNow: 'Donate now ♥',
  noGoal: 'No goal',
};

type CardProps = {
  title: string;
  category?: string;
  image?: string;
  goal?: number;
  raised?: number;
  donors?: number;
  amount?: number;
  currency?: string;
  messages?: CardMessages;
};

export default function Card({
  title,
  category = 'general',
  image,
  goal = 0,
  raised = 0,
  donors = 0,
  amount = 0,
  currency = '$',
  messages,
}: CardProps) {
  const cardMessages = messages ?? defaultCardMessages;
  const [qty, setQty] = useState(25)
  const [freq, setFreq] = useState<'once' | 'monthly'>('once')
  const percent = goal > 0 ? Math.min(100, Math.round((raised / goal) * 100)) : 0

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} className={styles.image} />
        ) : (
          <div className={styles.placeholder} />
        )}
        <span className={styles.badge}>{category}</span>
        <button className={styles.share} aria-label="share">◦◦</button>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.amountRow}>
          <div className={styles.amountValue}>
            <span className={styles.currency}>{currency}</span>
            <span className={styles.amount}>{amount.toLocaleString()}</span>
          </div>
          <div className={styles.goalText}>{goal ? `${goal.toLocaleString()} ${cardMessages.fromGoal}` : cardMessages.noGoal}</div>
        </div>

        <div className={styles.progress} aria-hidden>
          <div className={styles.progressBar} style={{ width: `${percent}%` }} />
        </div>

        <div className={styles.metaRow}>
          <div className={styles.metaItem}>{percent}%</div>
          <div className={styles.metaItem}>{donors} {cardMessages.donors}</div>
        </div>

        <div className={styles.controls}>
          <div className={styles.frequency} role="tablist">
            <button
              className={`${styles.freqBtn} ${freq === 'once' ? styles.activeFreq : ''}`}
              onClick={() => setFreq('once')}
            >
              {cardMessages.once}
            </button>
            <button
              className={`${styles.freqBtn} ${freq === 'monthly' ? styles.activeFreq : ''}`}
              onClick={() => setFreq('monthly')}
            >
              {cardMessages.monthly}
            </button>
          </div>

          <div className={styles.qty}> 
            <button onClick={() => setQty(Math.max(1, qty - 1))} className={styles.qtyBtn}>-</button>
            <input className={styles.qtyInput} value={qty} onChange={(e) => setQty(Number(e.target.value) || 0)} />
            <button onClick={() => setQty(qty + 1)} className={styles.qtyBtn}>+</button>
          </div>
        </div>

        <div className={styles.actions}>
          <Button variant="primary" className={styles.primary}>{cardMessages.donateNow}</Button>
        </div>
      </div>
    </article>
  )
}
