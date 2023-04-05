import { atom } from 'recoil';

export const globalLoadingState = atom<boolean>({
	key: 'globalLoading',
	default: false,
});

export const nightModeState = atom<boolean>({
	key: 'nightModeState',
	default: false,
})