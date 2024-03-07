import {createSelector} from 'reselect';
export const WordBankHeadingfunc = state => state.WordBank.data.heading;
export const WordBankContactfunc = state => state.WordBank.data.contact;
export const WordBankaboutfunc = state => state.WordBank.data.about;
export const WordBankDatafunc = (state, index) => ({
  ...state.WordBank.data.categories[index],
  subCategories: [...state.WordBank.data.subcategories[index]],
});
export const WordBankCategoriesfunc = (state, index = 0) => {
  return (
    state.WordBank.data?.categories && state.WordBank.data?.categories[index]
  );
};

export const WordBankContact = createSelector(
  WordBankContactfunc,
  data => data,
);
export const WordBankAbout = createSelector(WordBankaboutfunc, data => data);
export const WordBankData = createSelector(WordBankDatafunc, data => data);
export const WordBankHeading = createSelector(
  WordBankHeadingfunc,
  data => data,
);
export const WordBankCategories = createSelector(
  WordBankCategoriesfunc,
  data => data,
);
