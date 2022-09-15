import { SetMetadata } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

/**
 * Autenticação
 */
export const JWT_SECRET = process.env.JWT_SECRET;
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

/**
 * Level Permissions
 */
export const SALON = process.env.PERMISSION_SALON || 1;
export const MANAGER = process.env.PERMISSION_MANAGER || 2;
export const EMPLOYEE = process.env.PERMISSION_EMPLOYEE || 3;
export const CUSTOMER = process.env.PERMISSION_CUSTOMER || 4;
