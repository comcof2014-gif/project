import { z } from 'zod';
export const installationRequestSchema = z.object({ customer_name: z.string().min(2), phone: z.string().min(9), address: z.string().min(3), region: z.string().min(2), privacy_consent: z.literal(true) });
export const bulkQuoteSchema = z.object({ customer_name: z.string().min(2), phone: z.string().min(9), quantity: z.number().min(10), message: z.string().min(5) });
