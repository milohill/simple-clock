import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(timezone);

// const now = dayjs();
console.log(dayjs.tz.guess());
