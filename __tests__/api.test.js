/**
 * @jest-environment node
 */
import { POST as sendOtp } from '@/app/api/otp/send/route'
import { POST as verifyOtp } from '@/app/api/otp/verify/route'
import { createMocks } from 'node-mocks-http'

describe('OTP API', () => {
  it('should send an OTP successfully', async () => {
    const { req } = createMocks({
      method: 'POST',
      json: () => ({ identifier: 'test@example.com', type: 'email' }),
    })

    const res = await sendOtp(req)
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.success).toBe(true)
  })

  it('should verify correct OTP', async () => {
    const { req } = createMocks({
      method: 'POST',
      json: () => ({ identifier: 'test@example.com', otp: '123456' }),
    })

    const res = await verifyOtp(req)
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.success).toBe(true)
  })

  it('should reject incorrect OTP', async () => {
    const { req } = createMocks({
      method: 'POST',
      json: () => ({ identifier: 'test@example.com', otp: '000000' }),
    })

    const res = await verifyOtp(req)
    const data = await res.json()

    expect(res.status).toBe(400)
    expect(data.error).toBe('Invalid OTP')
  })
})
