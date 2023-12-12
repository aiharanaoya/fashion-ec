import { ComponentProps, FC, ReactNode } from 'react';

type Props = {
  /** children */
  children: ReactNode;
  /** component props */
} & Pick<ComponentProps<'button'>, 'onClick'>;

/**
 *  アイコンボタン
 */
export const IconButton: FC<Props> = ({ children, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className="
        h-fit w-fit rounded-full p-3 duration-300
        hover:bg-slate-200
      "
    >
      {children}
    </button>
  );
};
