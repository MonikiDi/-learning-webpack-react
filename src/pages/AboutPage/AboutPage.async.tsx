import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // Так делать не надо
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}));