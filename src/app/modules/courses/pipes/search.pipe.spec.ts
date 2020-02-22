import { SearchPipe } from './search.pipe';
import { MOCK_DATA } from 'assets/mock/db';


describe('SearchPipe', () => {
  let search: SearchPipe;
  beforeEach(() => {
    search = new SearchPipe();
  });
  it('create an instance', () => {
    expect(search).toBeTruthy();
  });

  it('should filter courses by name', () => {
    const coursesLength = MOCK_DATA.length;
    const coursesLeft = search.transform(MOCK_DATA, 'java').length;
    const isLessCourses: boolean = coursesLeft < coursesLength;
    expect(isLessCourses).toBeTruthy();
  });

  it('should left only courses included "java" in name', () => {
    const coursesLeft = search.transform(MOCK_DATA, 'java');
    expect(coursesLeft.length).toBe(3);
  });

  it('should show all courses if name is empty', () => {
    const coursesLength = MOCK_DATA.length;
    const coursesLeft = search.transform(MOCK_DATA, '');
    expect(coursesLeft.length).toBe(coursesLength);
  });
});
