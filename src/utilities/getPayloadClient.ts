import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Get the Payload client instance
 * Uses a cached instance in development to avoid multiple instances
 */
export const getPayloadClient = async () => {
  return await getPayload({ config })
}
