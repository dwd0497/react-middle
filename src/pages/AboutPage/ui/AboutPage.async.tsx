import { lazy } from 'react';

// @ts-ignore
export const AboutPageAsync = lazy(() => new Promise((resolve) => { setTimeout(() => resolve(import('./AboutPage')), 1000); }));
