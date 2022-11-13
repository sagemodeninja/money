// Written by Gary Antier 2020
// Last updated: April 11, 2021
// Current version 1.2.0.0
var FullMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var AbbrMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var FullDaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var AbbrDaysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var MinutesInHour = 60;
var SecondsInMinute = 60;
var MillisecondsInSecond = 1000;
var TimeConstantsBase = /** @class */ (function () {
    function TimeConstantsBase() {
    }
    Object.defineProperty(TimeConstantsBase.prototype, "MillisecondsInASecond", {
        get: function () {
            return 1000;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeConstantsBase.prototype, "SecondsInAMinute", {
        get: function () {
            return 60;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeConstantsBase.prototype, "MillisecondsInAMinute", {
        get: function () {
            var milli = this.MillisecondsInASecond * this.SecondsInAMinute;
            return milli;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeConstantsBase.prototype, "MinutesInAnHour", {
        get: function () {
            return 60;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeConstantsBase.prototype, "MillisecondsInAnHour", {
        get: function () {
            var milli = this.MillisecondsInAMinute * this.MinutesInAnHour;
            return milli;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeConstantsBase.prototype, "HoursInADay", {
        get: function () {
            return 24;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeConstantsBase.prototype, "MillisecondsInADay", {
        get: function () {
            var milli = this.MillisecondsInAnHour * this.HoursInADay;
            return milli;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeConstantsBase.prototype, "DaysInAYear", {
        get: function () {
            return 365;
        },
        enumerable: false,
        configurable: true
    });
    return TimeConstantsBase;
}());
var TimeConstants = new TimeConstantsBase();
var TimeSpan = /** @class */ (function () {
    function TimeSpan(milli) {
        this.milli = milli;
        this.totalSeconds = Math.floor(milli / TimeConstants.MillisecondsInASecond);
        this.totalMinutes = Math.floor(milli / TimeConstants.MillisecondsInAMinute);
        this.totalHours = Math.floor(milli / TimeConstants.MillisecondsInAnHour);
        this.totalDays = Math.floor(milli / TimeConstants.MillisecondsInADay);
        this.seconds = this.totalSeconds % TimeConstants.SecondsInAMinute;
        this.minutes = this.totalMinutes % TimeConstants.MinutesInAnHour;
        this.hours = this.totalHours % TimeConstants.HoursInADay;
        this.days = this.totalDays % TimeConstants.DaysInAYear;
    }
    TimeSpan.prototype.toString = function () {
        var duration = "";
        if (this.days > 0) {
            duration += "".concat(this.days, "d ");
        }
        if (this.hours > 0) {
            duration += "".concat(this.hours, "h ");
        }
        if (this.minutes > 0) {
            duration += "".concat(this.minutes, "m ");
        }
        if (this.seconds > 0) {
            duration += "".concat(this.seconds, "s");
        }
        else if (duration == "") {
            duration = "...";
        }
        return duration;
    };
    return TimeSpan;
}());
var DateTime = /** @class */ (function () {
    function DateTime(date, offset) {
        this._date = date;
        this.offset = offset;
    }
    DateTime.parse = function (dateTime, offset) {
        if (offset === void 0) { offset = 0; }
        if (dateTime) {
            var irregularFormatRegex = /(\/Date\()(.*)(\)\/)/i;
            if (typeof dateTime === "string" && irregularFormatRegex.test(dateTime)) {
                var match = irregularFormatRegex.exec(dateTime);
                dateTime = parseInt(match[2]);
            }
            var milli = typeof dateTime === "number" ? dateTime : Date.parse(dateTime);
            if (isNaN(milli)) {
                milli = 1;
            }
            // UTC offset...
            offset = offset * TimeConstants.MillisecondsInAnHour;
            milli += offset;
            var date = new Date(milli);
            return new DateTime(date, offset);
        }
        else {
            return null;
        }
    };
    DateTime.now = function () {
        return new DateTime(new Date(), 8);
    };
    Object.defineProperty(DateTime.prototype, "year", {
        get: function () {
            return this._date.getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "month", {
        get: function () {
            return this._date.getMonth();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "date", {
        get: function () {
            return this._date.getDate();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "day", {
        get: function () {
            return this._date.getDay();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "hour", {
        get: function () {
            return this._date.getHours();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "minutes", {
        get: function () {
            return this._date.getMinutes();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "seconds", {
        get: function () {
            return this._date.getSeconds();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "time", {
        get: function () {
            return this._date.getTime();
        },
        enumerable: false,
        configurable: true
    });
    DateTime.difference = function (start, end) {
        var timeDiff = end.getTime() - start.getTime();
        return new TimeSpan(timeDiff);
    };
    DateTime.prototype.difference = function (secondDate) {
        var diff = this.time - secondDate.time;
        return new TimeSpan(diff);
    };
    DateTime.prototype.addDays = function (days) {
        var newDate = new Date(this._date);
        newDate.setDate(this.date + days);
        return new DateTime(newDate, this.offset);
    };
    DateTime.prototype.addYears = function (years) {
        var newDate = new Date(this._date);
        newDate.setFullYear(this.year + years);
        return new DateTime(newDate, this.offset);
    };
    DateTime.prototype.toString = function (format) {
        if (format === void 0) { format = "yyyy/MM/dd HH:mm:ss"; }
        if (!this._date)
            return null;
        var year = this.year.toString();
        var subYear = year.padStart(2, '0').slice(-2);
        var month = this.month;
        var day = this.day;
        var date = this.date;
        var hour = this.hour;
        var _12Hour = hour < 13 ? hour : hour - 12;
        var isAM = hour < 12;
        var minutes = this.minutes;
        var seconds = this.seconds;
        // Day...
        format = format.replace(/dd/g, date.toString().padStart(2, '0'));
        format = format.replace(/d/g, date);
        // 24-Hour...
        format = format.replace(/HH/g, hour.toString().padStart(2, '0'));
        format = format.replace(/H/g, hour);
        // 12-Hour...
        format = format.replace(/hh/g, _12Hour.toString().padStart(2, '0'));
        format = format.replace(/h/g, _12Hour);
        // Minutes...
        format = format.replace(/mm/g, minutes.toString().padStart(2, '0'));
        format = format.replace(/m/g, minutes);
        // Seconds...
        format = format.replace(/ss/g, seconds.toString().padStart(2, '0'));
        format = format.replace(/s/g, seconds);
        // Year...
        format = format.replace(/yyyyy/g, year.padStart(5, '0'));
        format = format.replace(/yyyy/g, year.padStart(4, '0'));
        format = format.replace(/yyy/g, year.padStart(3, '0'));
        format = format.replace(/yy/g, subYear);
        format = format.replace(/y/g, parseInt(subYear));
        // Month in words...
        format = format.replace(/MMMM/g, "####");
        format = format.replace(/MMM/g, "###");
        // Month in number...
        var _month = month + 1;
        format = format.replace(/MM/g, _month.toString().padStart(2, '0'));
        format = format.replace(/M/g, _month);
        // AM/PM...
        format = format.replace(/tt/g, isAM ? "AM" : "PM");
        format = format.replace(/t/g, isAM ? "A" : "P");
        // Day of week...
        format = format.replace(/dddd/g, FullDaysOfWeek[day]);
        format = format.replace(/ddd/g, AbbrDaysOfWeek[day]);
        // Month in words...
        format = format.replace(/####/g, FullMonth[month]);
        format = format.replace(/###/g, AbbrMonth[month]);
        return format;
    };
    return DateTime;
}());
