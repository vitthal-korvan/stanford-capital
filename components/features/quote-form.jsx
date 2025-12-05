"use client"

import Button from '@/components/ui/button'
import Card from '@/components/ui/card'
import Input from '@/components/ui/input'
import Select from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import styles from './quote-form.module.css'

const schema = z.object({
  salutation: z.string().min(1, 'Required'),
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  mobile: z.string().regex(/^[0-9]{10}$/, 'Must be a valid 10-digit mobile number'),
  location: z.string().min(2, 'Location is required'),
  service: z.string().min(1, 'Please select a service'),
  updates: z.boolean().optional(),
})

const SALUTATIONS = [
  { value: 'Mr', label: 'Mr.' },
  { value: 'Ms', label: 'Ms.' },
  { value: 'Mrs', label: 'Mrs.' },
  { value: 'Dr', label: 'Dr.' },
]

const SERVICES = [
  { value: 'pvt-ltd', label: 'Private Limited Company' },
  { value: 'llp', label: 'LLP Registration' },
  { value: 'trademark', label: 'Trademark Registration' },
  { value: 'gst', label: 'GST Registration' },
  { value: 'compliance', label: 'ROC Compliance' },
]

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      salutation: 'Mr',
      updates: true,
    }
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      console.log('Form data:', data)
      // TODO: Submit logic
      await new Promise(resolve => setTimeout(resolve, 1000)) // Mock delay
      alert('Quote requested successfully!')
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className={styles.card}>
      <h2 className={styles.title}>Get Quote Instantly</h2>
      <p className={styles.subtitle}>In a Minute</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.row}>
          <div style={{ flex: '0 0 80px' }}>
            <Select
              label="Title"
              options={SALUTATIONS}
              error={errors.salutation?.message}
              {...register('salutation')}
            />
          </div>
          <div style={{ flex: 1 }}>
            <Input
              label="Full Name"
              placeholder="John Doe"
              error={errors.fullName?.message}
              {...register('fullName')}
            />
          </div>
        </div>

        <div className={styles.verifyGroup}>
          <div className={styles.inputWrapper}>
            <Input
              label="Email"
              placeholder="john@example.com"
              type="email"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>
          <Button type="button" variant="outline" size="sm" style={{ marginBottom: errors.email ? '1.5rem' : '0' }}>
            Verify
          </Button>
        </div>

        <div className={styles.verifyGroup}>
          <div className={styles.inputWrapper}>
            <Input
              label="Mobile Number"
              placeholder="9876543210"
              type="tel"
              error={errors.mobile?.message}
              {...register('mobile')}
            />
          </div>
          <Button type="button" variant="outline" size="sm" style={{ marginBottom: errors.mobile ? '1.5rem' : '0' }}>
            Verify
          </Button>
        </div>

        <Input
          label="Location"
          placeholder="City, State"
          error={errors.location?.message}
          {...register('location')}
        />

        <Select
          label="Looking For"
          placeholder="Select Service"
          options={SERVICES}
          error={errors.service?.message}
          {...register('service')}
        />

        <label className={styles.checkboxWrapper}>
          <input 
            type="checkbox" 
            className={styles.checkbox}
            {...register('updates')}
          />
          <span className={styles.checkboxText}>
            Get updates through Call & WhatsApp
          </span>
        </label>

        <Button type="submit" variant="primary" loading={isSubmitting} className={styles.submitBtn}>
          Get Quote Now
        </Button>
      </form>
    </Card>
  )
}
