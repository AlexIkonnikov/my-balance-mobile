import dayjs from 'dayjs';

export const getDateByFormat = (date: dayjs.ConfigType | undefined, format = 'DD.MM.YYYY'): string => {
  return dayjs(date).format(format);
};
