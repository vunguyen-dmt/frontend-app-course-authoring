/* eslint-disable import/prefer-default-export */
import { camelCaseObject, getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { adjustToLocalTimeFromBackendToFrontend, adjustToLocalTimeFromFrontendToBackend, convertObjectToSnakeCase } from '../../utils';

const getApiBaseUrl = () => getConfig().STUDIO_BASE_URL;
export const getCourseDetailsApiUrl = (courseId) => `${getApiBaseUrl()}/api/contentstore/v1/course_details/${courseId}`;
export const getCourseSettingsApiUrl = (courseId) => `${getApiBaseUrl()}/api/contentstore/v1/course_settings/${courseId}`;
export const getUploadAssetsUrl = (courseId) => `${getApiBaseUrl()}/assets/${courseId}/`;

/**
 * Get course details.
 * @param {string} courseId
 * @returns {Promise<Object>}
 */
export async function getCourseDetails(courseId) {
  const { data } = await getAuthenticatedHttpClient().get(
    `${getCourseDetailsApiUrl(courseId)}`,
  );
  const result = camelCaseObject(data);
  if (result) {
    const adjustingDates = ['startDate', 'endDate', 'enrollmentStart', 'enrollmentEnd', 'certificateAvailableDate', 'upgradeDeadline'];
    adjustingDates.forEach(i => {
      result[i] = adjustToLocalTimeFromBackendToFrontend(result[i]);
    });
  }
  return result;
}

/**
 * Update course details.
 * @param {string} courseId
 * @param {object} details
 * @returns {Promise<Object>}
 */
export async function updateCourseDetails(courseId, details) {
  const adjustingDates = ['startDate', 'endDate', 'enrollmentStart', 'enrollmentEnd', 'certificateAvailableDate', 'upgradeDeadline'];
  const adjustedDetails = { ...details };
  adjustingDates.forEach(i => {
    adjustedDetails[i] = adjustToLocalTimeFromFrontendToBackend(details[i]);
  });

  const { data } = await getAuthenticatedHttpClient().put(
    `${getCourseDetailsApiUrl(courseId)}`,
    convertObjectToSnakeCase(adjustedDetails, true),
  );
  const result = camelCaseObject(data);
  if (result) {
    adjustingDates.forEach(i => {
      result[i] = adjustToLocalTimeFromBackendToFrontend(result[i]);
    });
  }
  return result;
}

/**
 * Get course settings.
 * @param {string} courseId
 * @returns {Promise<Object>}
 */
export async function getCourseSettings(courseId) {
  const { data } = await getAuthenticatedHttpClient().get(
    `${getCourseSettingsApiUrl(courseId)}`,
  );
  return camelCaseObject(data);
}
