import * as moment from 'moment';
import { FormatDatePipe } from "./format-date.pipe";

describe('MomentPipe', () => {
  let pipe = new FormatDatePipe();

  const mockEpochTime: number = 1557744584000;

  it("should return time in format: HH:mm", () => {
    const result = pipe.transform(moment(mockEpochTime), 'HH:mm');
    expect(result).toBe('16:19');
  });

  it("should return date in format: DD-MM-YYYY, HH:mm", () => {
    const result = pipe.transform(moment(mockEpochTime), 'DD-MM-YYYY, HH:mm');
    expect(result).toEqual("13-05-2019, 16:19");
  });

  it("should return date in format: dddd, DD MMM YYYY - HH:mm", () => {
    const result = pipe.transform(moment(mockEpochTime), 'dddd, DD MMM YYYY - HH:mm');
    expect(result).toEqual("Monday, 13 May 2019 - 16:19");
  });

  it("should return date in format: MMM DD, HH:mm", () => {
    const result = pipe.transform(moment(mockEpochTime), 'MMM DD, HH:mm');
    expect(result).toEqual("May 13, 16:19");
  });

  it("should return date in format: ddd, Do MMM YYYY", () => {
    const result = pipe.transform(moment(mockEpochTime), 'ddd, Do MMM YYYY');
    expect(result).toEqual("Mon, 13th May 2019");
  });

  it('should not format empty dates', () => {
    expect(pipe.transform('', 'MMMM Do YYYY')).toBe('');
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
    expect(pipe.transform(0)).toBe('');
  });

});


