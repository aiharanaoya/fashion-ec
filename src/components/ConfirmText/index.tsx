import { FC } from 'react';

type Props = {
  /** ラベルテキスト */
  labelText: string;
  /** バリューテキスト */
  valueText: string;
};

/**
 * ConfirmText
 */
export const ConfirmText: FC<Props> = ({ labelText, valueText }: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-sm">{labelText}</p>
      <p className="text-lg font-bold">{valueText}</p>
    </div>
  );
};
