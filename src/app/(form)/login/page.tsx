import { signIn } from '@/auth';
import { Button } from '@/components/Button';
import { ContentCard } from '@/components/ContentCard';
import { FormText } from '@/components/FormText';
import { H2 } from '@/components/H2';
import { LinkButton } from '@/components/LinkButton';

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-y-12 px-4 py-8 md:py-12">
      <ContentCard>
        <form
          className="flex flex-col gap-y-8"
          action={async (formData) => {
            'use server';
            await signIn('credentials', formData);
          }}
        >
          <H2 text="ログイン" />
          <div className="flex flex-col gap-y-6">
            <FormText name="email" labelText="メールアドレス" type="email" id="email" />
            <FormText name="password" labelText="パスワード" type="password" id="password" />
          </div>
          <Button isPrimary>ログイン</Button>
        </form>
      </ContentCard>
      <div className="flex h-full w-full max-w-xl flex-col gap-y-6 px-10 md:px-16">
        <H2 text="初めてご利用の方" />
        <LinkButton href="/sign-up">新規会員登録</LinkButton>
      </div>
    </div>
  );
}
