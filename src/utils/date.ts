import dayjs from 'dayjs';
export function localDate(v?: Date): Date {
  const d = new Date(v || Date.now());
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d;
}

export function formatDayOfStart(v?: string): string {
  if (v) {
    return dayjs(v)
      .startOf('date')
      .format('YYYY-MM-DD HH:mm:ss');
  }
  return dayjs()
    .startOf('date')
    .format('YYYY-MM-DD HH:mm:ss');
}
