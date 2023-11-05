const {
  createEventQuery,
  getCategoryQuery,
  getLocationQuery,
  getEventsQuery,
  getBannerQuery,
} = require("../queries/eventQuery");

const createEventService = async (
  eventName,
  categoryId,
  locationId,
  // userId,
  startDate,
  endDate,
  time,
  eventStatus,
  description,
  image
) => {
  try {
    const res = await createEventQuery(
      eventName,
      categoryId,
      locationId,
      // userId,
      startDate,
      endDate,
      time,
      eventStatus,
      description,
      image
    );
    return res;
  } catch (err) {
    throw err;
  }
};

const getCategoryService = async () => {
  try {
    const res = await getCategoryQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

const getLocationService = async () => {
  try {
    const res = await getLocationQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

const getEventsService = async () => {
  try {
    const res = await getEventsQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

const getBannerService = async () => {
  try {
    const res = await getBannerQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createEventService,
  getCategoryService,
  getLocationService,
  getEventsService,
  getBannerService,
};
