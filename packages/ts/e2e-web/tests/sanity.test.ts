Feature(`Sanity Check`);

Scenario(`The app loads as expected`, ({ I }) => {
  I.amOnPage(`/login`);
});
