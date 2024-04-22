import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.filter.filter;

export const selectFilters = state => state.contacts.filters;

export const selectError = state => state.contacts.error;

export const selectLoading = state => state.contacts.loading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
