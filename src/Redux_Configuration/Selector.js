import {createSelector} from 'reselect';
export const WordBankHeadingfunc = state => state.WordBank.heading;
export const WordBankContactfunc = state => state.WordBank.contact;
export const WordBankaboutfunc = state => state.WordBank.about;
export const WordBankDatafunc = (state, index) =>  ({
    ...state.WordBank.categories[index],
    subCategories: [...state.WordBank.subcategories[index]],
  });
export const WordBankCategoriesfunc = (state, index = 0) => {
  return state.WordBank?.categories[index];
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
