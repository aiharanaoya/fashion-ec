import { ComponentProps, FC } from 'react';

type Props =
  // ComponentPropsから必要なものだけ抽出
  Pick<
    ComponentProps<'input'>,
    'type' | 'id' | 'name' | 'value' | 'placeholder' | 'disabled' | 'required' | 'onChange'
  >;

/**
 * インプットテキスト
 */
export const InputText: FC<Props> = (props: Props) => {
  return (
    <input
      {...props}
      className="
        flex h-full w-full items-center justify-center
        rounded-lg border border-slate-300 p-4
        outline-none duration-300 focus:border-slate-800
        disabled:opacity-30
      "
      aria-label="input text"
    />
  );
};
