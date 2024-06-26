import { FC, ReactNode } from 'react';

type Props = {
  /** children */
  children: ReactNode;
};

/**
 * ContentCard
 */
export const ContentCard: FC<Props> = ({ children }: Props) => {
  return (
    <div className="h-full w-full max-w-xl rounded-2xl bg-slate-100 p-10 shadow-lg md:p-16">
      {children}
    </div>
  );
};
