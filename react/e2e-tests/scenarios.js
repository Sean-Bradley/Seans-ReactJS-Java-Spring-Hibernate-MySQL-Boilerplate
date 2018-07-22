'use strict';

describe('Home', function () {

  beforeEach(function () {
    browser.get('');
  });

  it('should render home page when url contains no path', function () {
    expect(element.all(by.tagName('h1'))
      .first()
      .getText()).
      toMatch(/seans reactjs java spring hibernate mysql boilerplate/);
  });
});

describe('Cats', function () {

  //beforeEach(function () {
  browser.get('/');
  //});

  it('should click the Cats link', function () {
    const link = $('[href*=Cats]');
    link.click()
  })

  it('should now render "Cats" in h1 after link clicked', function () {
    expect(element.all(by.tagName('h1'))
      .first()
      .getText()).
      toMatch(/Cats/);
  })

  it('"Add Cats" button should be disabled by default', function () {
    expect(element(by.buttonText('Add Cat')).getAttribute('disabled')).toEqual('true');
  });

  it('should click the Dogs link', function () {
    const link = $('[href*=Dogs]');
    link.click()
  })

  it('should now render "Dogs" in h1 after link clicked', function () {
    expect(element.all(by.tagName('h1'))
      .first()
      .getText()).
      toMatch(/Dogs/);
  })

  it('should click the Birds link', function () {
    const link = $('[href*=Birds]');
    link.click()
  })

  it('should now render "Birds" in h1 after link clicked', function () {
    expect(element.all(by.tagName('h1'))
      .first()
      .getText()).
      toMatch(/Birds/);
  })
})


