const {
  createEventQuery,
  getCategoryQuery,
  getLocationQuery,
  getEventsQuery,
  getBannerQuery,
  eventDetailQuery
} = require("../queries/eventQuery");

const createEventService = async (
  eventName,
  categoryId,
  locationId,
  userId,
  startDate,
  endDate,
  time,
  eventStatus,
  description,
  address,
  hargatiket,
  totaltiket,
  image
) => {
  try {
    const res = await createEventQuery(
      eventName,
      categoryId,
      locationId,
      userId,
      startDate,
      endDate,
      time,
      eventStatus,
      description,
      address,
      hargatiket,
      totaltiket,
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

const eventDetailService = async (id) => {
	try {
		const res = eventDetailQuery(id);
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
  eventDetailService
};
