import { create } from "zustand";
import { immer } from "zustand/middleware/immer";


import { devtools, persist } from "zustand/middleware";
import { scrapeSlice, ScrapeSliceProps } from "./slices/scrapeSlice";

interface StoreProps extends ScrapeSliceProps {}

export const useCombineStore = create<StoreProps>()(
	devtools(
		persist(
				immer((...a) => ({
					...scrapeSlice(...a),
				})),
			{
				name: 'local-storage',
				partialize: (state) => ({
					response: state.response,
				}),
			}
		)
	));