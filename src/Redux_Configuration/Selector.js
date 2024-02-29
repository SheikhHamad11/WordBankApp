import {createSelector} from 'reselect';
export const newProjectHeadingfunc = state => state.newProject.heading;
export const newProjectContactfunc = state => state.newProject.contact;
export const newProjectaboutfunc = state => state.newProject.about;
export const newProjectDatafunc = (state, index) => ({
  ...state.newProject.categories[index],
  subCategories: [...state.newProject.subcategories[index]],
});
export const newProjectCategoriesfunc = (state, index = 0) => {
  return state.newProject?.categories[index];
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
