import {createSelector} from 'reselect';
<<<<<<< HEAD
export const newProjectHeadingfunc = state => state.newProject.heading;
export const newProjectContactfunc = state => state.newProject.contact;
export const newProjectaboutfunc = state => state.newProject.about;
export const newProjectDatafunc = (state, index) => ({
  ...state.newProject.categories[index],
  subCategories: [...state.newProject.subcategories[index]],
});
export const newProjectCategoriesfunc = (state, index = 0) => {
  return state.newProject?.categories[index];
=======
export const WordBankHeadingfunc = state => state.WordBank.data.heading;
export const WordBankContactfunc = state => state.WordBank.data.contact;
export const WordBankaboutfunc = state => state.WordBank.data.about;
export const WordBankDatafunc = (state, index) => ({
  ...state.WordBank.data.categories[index],
  subCategories: [...state.WordBank.data.subcategories[index]],
});
export const WordBankCategoriesfunc = (state, index = 0) => {
  // console.log('State:', state);
  return (
    state.WordBank.data?.categories && state.WordBank.data?.categories[index]
  );
>>>>>>> 1e70226e65360686cd46d8b4e244bd14c7bc6dd0
};

export const newProjectContact = createSelector(
  newProjectContactfunc,
  data => data,
);
export const newProjectAbout = createSelector(
  newProjectaboutfunc,
  data => data,
);
export const newProjectData = createSelector(newProjectDatafunc, data => data);
export const newProjectHeading = createSelector(
  newProjectHeadingfunc,
  data => data,
);
export const newProjectCategories = createSelector(
  newProjectCategoriesfunc,
  data => data,
);
