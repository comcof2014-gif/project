export type UserRole = 'customer'|'business_member'|'installer'|'admin';
export type AdminRole = 'super_admin'|'support_admin'|'product_admin';
export type SessionUser = { id: string; role: UserRole; adminRole?: AdminRole; businessApproved?: boolean };
