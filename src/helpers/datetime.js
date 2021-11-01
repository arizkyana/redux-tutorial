import moment from 'moment';

export const convertDateToString = (dateString) => moment(dateString).format('DD/MM/YYYY a');
