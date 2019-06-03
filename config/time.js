const config = {
    TIME_INTERVAL_3S_IN_MILISECOND: 3 * 1000, // 24h in seconds
    TIME_INTERVAL_10S_IN_MILISECOND: 10 * 1000, // 24h in seconds
    TIME_INTERVAL_1S_IN_MILISECOND: 1 * 1000, // 24h in seconds
    TIME_INTERVAL_1DAY_IN_SECOND: 1 * 24 * 60 * 60, // 24h in seconds
    TIME_INTERVAL_2DAY_IN_SECOND: 2 * 24 * 60 * 60, // 24h in seconds
    TIME_INTERVAL_1WEEK_IN_SECOND: 7 * 24 * 60 * 60, // 1 week in seconds
    TIME_INTERVAL_1MONTH_IN_SECOND: 30 * 24 * 60 * 60, // 1 month in seconds, assume 30 days
    TIME_INTERVAL_1YEAR_IN_SECOND: 365 * 24 * 60 * 60, // 1 year in seconds, assume 30 days
    TIME_INTERVAL_5MINUTE_IN_SECOND: 5 * 60, // 5 minutes in second
    TIME_INTERVAL_1HOUR_IN_SECOND: 60 * 60,
    TIME_INTERVAL_3HOUR_IN_SECOND: 3 * 60 * 60,
    TIME_INTERVAL_1DAY_IN_HOUR: 24, // 24h
    TIME_INTERVAL_1WEEK_IN_HOUR: 24 * 7, // 24h * 7days, this is not in 1 Hour, it in basic unit of each time period
    TIME_INTERVAL_1MONTH_IN_HOUR: 8 * 30, // (24h/3h) * 30 days
    TIME_INTERVAL_1YEAR_IN_HOUR: 365, // 1 day * 365
    UTC_PLUS7: new Date().getTimezoneOffset() * 60000, // this get reverse time zone offset, ex +7 : -420
    CRONJOB_1M_INTERVAL: "*/1 * * * *",
    CRONJOB_5M_INTERVAL: "*/5 * * * *",
    CRONJOB_5S_INTERVAL: "*/5 * * * * *",
    CRONJOB_10S_INTERVAL: "*/10 * * * * *",
    CRONJOB_15S_INTERVAL: "*/15 * * * * *",
    CRONJOB_1H_INTERVAL: "0 * * * *",
    CRONJOB_24H_INTERVAL: "0 0 0 * * *", //
    CRONJOB_1M5S_INTERVAL: "5 * * * * *", // every 5th second of every minute
    CRONJOB_1S_INTERVAL: "0 * * * * *", // every first second of every minute
    CRONJOB_56M_INTERVAL: "0 57 * * * *",
    CRONJOB_23H_55M_INTERVAL: "0 57 23 * * *",
  
    CRONJOB_59M_INTERVAL: "0 59 * * * *",
  
    M1: 60, // seconds,
    M3: 180, // seconds,
    M5: 300, // seconds,
    M15: 900, //seconds,
    M30: 1800, // seconds
    H1: 3600, // seconds,
    H2: 7200, // seconds
    H4: 14400, // seconds
    D1: 86400, // seconds
    EMIT_INTERVAL_HOUR: 3360, // 56th minute = 56 * 60
    EMIT_INTERVAL_DAY: 77280 // 56th minute = 56 * 60
  };
  
  const candleResolution = {
    MINUTE: "1",
    HOUR: "60",
    DAY: "1D"
  };
  module.exports = { config, candleResolution };
  