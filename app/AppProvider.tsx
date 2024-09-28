'use client';

import { FC, PropsWithChildren } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const { push } = useRouter();

  return <NextUIProvider navigate={push}>{children}</NextUIProvider>;
};
