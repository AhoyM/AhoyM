jest.dontMock('../src/js/content/deep-dive');


describe('DeepDive', () => {
  let DeepDive = require('../src/js/content/deep-dive');
  let React = require('react/addons');

  let TestUtils = React.addons.TestUtils;
  let deepDiveView;

  beforeEach(() => {
    deepDiveView = TestUtils.renderIntoDocument(<DeepDive />);
  });

  it('renders the section', () => {
    let sectionEl = TestUtils.findRenderedDOMComponentWithClass(
                      deepDiveView, 'deep-dive').getDOMNode();

    expect(sectionEl.tagName).toBe('SECTION');
  });

  it('renders a list of particle layers', () => {
    let layerListEl = TestUtils.findRenderedDOMComponentWithTag(
                        deepDiveView, 'UL').getDOMNode();

    expect(layerListEl.className).toBe('deep-dive__particles');
  });

  it('renders 3 layers of particles', () => {
    let layerListEl = TestUtils.findRenderedDOMComponentWithTag(
                        deepDiveView, 'UL').getDOMNode();

    expect(layerListEl.children.length).toBe(3);
  });

  it('layers move when on mousemove', () => {
    let largeParticleLayer = TestUtils.findRenderedDOMComponentWithClass(
                                deepDiveView, 'deep-dive__large-particles')
                                .getDOMNode();

    expect(largeParticleLayer.style.transform).not.toBeDefined();

    TestUtils.Simulate.mouseMove(largeParticleLayer);
    // 'NaN' because Simulate.mouseMove doesn't accept specific values
    let expectedValue = 'translate3d(NaNpx, NaNpx, 0px)';

    expect(largeParticleLayer.style.transform).toBe(expectedValue);
  });
});
