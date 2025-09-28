import path from "path";
import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const { combine, timestamp, label, printf, prettyPrint } = format;

const logsFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp as string);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${date.toDateString()} ${hours}:${minutes}:${seconds} [${label}] ${level}: ${message}`;
});

const info = createLogger({
  level: "info",
  format: combine(
    label({ label: "My-Circle" }),
    timestamp(),
    logsFormat,
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        "logs",
        "winston",
        "successes",
        "mc-%DATE%-success.log",
      ),
      datePattern: "YYYY-DD-MM-HH",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});

// Error logger
const error = createLogger({
  level: "error",
  format: combine(
    label({ label: "My-Circle" }),
    timestamp(),
    logsFormat,
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        "logs",
        "winston",
        "errors",
        "mc-%DATE%-error.log",
      ),
      datePattern: "YYYY-DD-MM-HH",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});

const logger = {
  info: info.info.bind(info),
  error: error.error.bind(error),
};

export default logger;
