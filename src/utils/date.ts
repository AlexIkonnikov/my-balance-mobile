import dayjs from 'dayjs';

export const getDateByFormat = (date: string, format = 'DD.MM.YYYY'): string => {
  return dayjs(date).format(format);
};
