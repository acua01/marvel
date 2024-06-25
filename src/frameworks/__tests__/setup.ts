import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

beforeEach(() => {
  vi.resetAllMocks();
});

afterEach(() => {
  cleanup();
});
