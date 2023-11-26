import { FC, MouseEventHandler, ReactNode } from 'react';

export const BUTTON_TYPE = {
  SUBMIT: 'submit',
  BUTTON: 'button'
} as const;

export type ButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];

type Props = {
  /** ボタン内に表示させる要素 */
  children: ReactNode;
  /** ボタンのタイプ */
  type?: ButtonType;
  /** 非活性か */
  isDisabled?: boolean;
  /** クリック時の処理 */
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

/**
 * ボタン
 */
export const Button: FC<Props> = ({
  children,
  type = BUTTON_TYPE.SUBMIT,
  isDisabled = false,
  onClick
}: Props) => {
  return (
    <button type={type} className="" disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};
