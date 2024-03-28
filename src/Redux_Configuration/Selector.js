import {createSelector} from 'reselect';
export const WordBankHeadingfunc = state => state.heading;
export const WordBankContactfunc = state => state.contact;
export const WordBankaboutfunc = state => state.about;
export const WordBankDatafunc = (state, index) => {
  return {
    ...state.categories[index],
    subCategories: [...state.subcategories[index]],
  };
};
export const WordBankCategoriesfunc = (state, index = 0) => {
  return state?.categories && state?.categories[index];
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
