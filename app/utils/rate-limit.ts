import { NextRequest, NextResponse } from 'next/server';

const DEFAULT_DURATION = 2000; // 2 seconds
const DEFAULT_MAX_REQUESTS = 1;

const getLimitDuration = (): number => {
  try {
    return parseInt(
      process.env.RATE_LIMIT_DURATION || DEFAULT_DURATION.toString()
    );
  } catch (err) {
    return DEFAULT_DURATION;
  }
};

const getMaxRequest = (): number => {
  try {
    return parseInt(
      process.env.RATE_LIMIT_MAX_REQUEST || DEFAULT_MAX_REQUESTS.toString()
    );
  } catch (err) {
    return DEFAULT_MAX_REQUESTS;
  }
};

const store = new Map();

export const rateLimit = async (
  req: NextRequest,
  next: () => Promise<NextResponse | void>
) => {
  const ip = req.headers.get('x-forwarded-for');
  const now = Date.now();

  const requestLog = store.get(ip) || { count: 0, startTime: now };
  const timePassed = now - requestLog.startTime;
  const duration = getLimitDuration();
  const maxRequest = getMaxRequest();

  if (timePassed > duration) {
    requestLog.count = 1;
    requestLog.startTime = now;
    store.set(ip, requestLog);
    return next();
  } else {
    requestLog.count += 1;
    if (requestLog.count > maxRequest) {
      return new NextResponse(`You are rate limited.`, {
        status: 429,
      });
    }
    store.set(ip, requestLog);
    return next();
  }
};
