import { useEffect, useState } from 'react';

type Hook = {
  /** PC表示か */
  isPc: boolean;
};

/**
 * js内でレスポンシブタイプを判別するhook
 */
export const useResponsive = (): Hook => {
  /** PC表示か */
  const [isPc, setIsPc] = useState(false);

  /** resize時の処理 */
  const handleResize = () => {
    setIsPc(window.innerWidth > 768);
  };

  useEffect(() => {
    // 初回読み込み時
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isPc
  };
};
