import { create } from 'zustand';
import {
  getInstruments,
  getAssets,
  searchAssets,
  createOrder,
} from '@services';
import { Instrument, Asset } from '@types';

interface TradingState {
  instruments: Instrument[];
  portfolio: Asset[];
  searchResults: Instrument[];
  loading: boolean;
  error: string | null;
  fetchInstruments: () => Promise<void>;
  fetchPortfolio: () => Promise<void>;
  searchForInstrument: (query: string) => Promise<void>;
  placeOrder: (orderData: {
    instrument_id: number;
    side: 'BUY' | 'SELL';
    type: 'MARKET' | 'LIMIT';
    quantity: number;
    price?: number;
  }) => Promise<void>;
}

export const useStore = create<TradingState>((set) => ({
  instruments: [],
  portfolio: [],
  searchResults: [],
  loading: false,
  error: null,

  fetchInstruments: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getInstruments();
      set({ instruments: data, loading: false });
    } catch (error: any) {
      set({ error: 'Error al obtener instrumentos', loading: false });
    }
  },

  fetchPortfolio: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getAssets();
      set({ portfolio: data, loading: false });
    } catch (error: any) {
      set({ error: 'Error al obtener portfolio', loading: false });
    }
  },

  searchForInstrument: async (query) => {
    if (!query.trim()) {
      set({ searchResults: [] });
      return;
    }
    set({ loading: true, error: null });
    try {
      const data = await searchAssets(query.toUpperCase());
      set({ searchResults: data, loading: false });
    } catch (error: any) {
      set({ error: 'Error en la búsqueda', loading: false });
    }
  },

  placeOrder: async (orderData) => {
    set({ loading: true, error: null });
    try {
      await createOrder(orderData);
      set({ loading: false });
    } catch (error: any) {
      set({ error: 'Error al crear orden', loading: false });
    }
  },
}));
