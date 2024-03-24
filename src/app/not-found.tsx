import { H1 } from '@/components/H1';

export default function Page() {
  return (
    <div className="flex justify-center pt-8">
      <div className="flex max-w-lg flex-col gap-y-4 px-8">
        <H1 text="ページが見つかりません" />
        <p>お探しのページは移動、または削除された可能性があります。</p>
      </div>
    </div>
  );
}
