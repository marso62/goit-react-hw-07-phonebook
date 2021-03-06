import {
  CONTACT_REQUEST_ERROR,
  ERROR_RESET,
  DELETE_ERROR,
} from "../types/types";

export const setError = () => ({
  type: CONTACT_REQUEST_ERROR,
});

export const resetError = () => ({
  type: ERROR_RESET,
});

export const setDeleteError = () => ({
  type: DELETE_ERROR,
});
