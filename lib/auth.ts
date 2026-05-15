import { SessionUser } from './types';
export async function getMockSession(): Promise<SessionUser|null> { return null; }
export function canViewBusinessPrice(user: SessionUser|null) { return !!user && (user.role === 'admin' || (user.role === 'business_member' && user.businessApproved)); }
