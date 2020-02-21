import { CourseDurationPipe } from './course-date.pipe';

describe('CourseDurationPipe', () => {
  const pipe = new CourseDurationPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
