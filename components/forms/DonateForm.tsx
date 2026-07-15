"use client"

import React, { useMemo, useState } from 'react'
import Button from '../ui/Button'
import styles from './donateForm.module.css'

type Frequency = 'one-time' | 'monthly'

type DonateFormMessages = {
  heading: string;
  lead: string;
  oneTime: string;
  monthly: string;
  customAmount: string;
  donateButton: string;
  featureSecure: string;
  featureDirect: string;
  featureReports: string;
  featureCertified: string;
}

type DonateFormProps = {
  messages: DonateFormMessages;
}

export default function DonateForm({ messages }: DonateFormProps) {
  const content = messages
  const [frequency, setFrequency] = useState<Frequency>('one-time')
  const [selectedAmount, setSelectedAmount] = useState(25)
  const [customAmount, setCustomAmount] = useState('')

  const amount = useMemo(() => {
    const parsed = Number(customAmount)
    return parsed > 0 ? parsed : selectedAmount
  }, [customAmount, selectedAmount])

  const presetAmounts = [5, 10, 25, 50, 100, 250]

  return (
    <section className={styles.card}>
      <div className={styles.formCard}>
        <div className={styles.switchRow}>
          <Button
            type="button"
            variant="outline"
            className={`${styles.switchButton} ${frequency === 'one-time' ? styles.activeSwitch : ''}`}
            onClick={() => setFrequency('one-time')}
          >
            {content.oneTime}
          </Button>
          <Button
            type="button"
            variant="outline"
            className={`${styles.switchButton} ${frequency === 'monthly' ? styles.activeSwitch : ''}`}
            onClick={() => setFrequency('monthly')}
          >
            {content.monthly}
          </Button>
        </div>

        <div className={styles.tiers}>
          {presetAmounts.map((value) => (
            <Button
              key={value}
              type="button"
              variant="outline"
              className={`${styles.tierButton} ${amount === value ? styles.activeTier : ''}`}
              onClick={() => {
                setSelectedAmount(value)
                setCustomAmount('')
              }}
            >
              ${value}
            </Button>
          ))}
        </div>

        <div className={styles.customRow}>
          <label className={styles.customLabel} htmlFor="donation-amount">
            {content.customAmount}
          </label>
          <div className={styles.customInputWrapper}>
            <span className={styles.currencySign}>$</span>
            <input
              id="donation-amount"
              type="number"
              min="1"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter amount"
              className={styles.customInput}
            />
          </div>
        </div>

        <Button variant="primary" className={styles.donateButton}>
          {content.donateButton} ${amount}
        </Button>

        <div className={styles.noteRow}>
          <span>All transactions are encrypted and secure</span>
        </div>
      </div>
    </section>
  )
}
