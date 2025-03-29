import { useState, useCallback } from 'react';

type FetchFunction = () => Promise<void>;

const useRefresh = (fetchData: FetchFunction) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await fetchData();
    } catch (error) {
      console.error('Error al recargar:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, [fetchData]);

  return {
    isRefreshing,
    handleRefresh,
  };
};

export default useRefresh;
